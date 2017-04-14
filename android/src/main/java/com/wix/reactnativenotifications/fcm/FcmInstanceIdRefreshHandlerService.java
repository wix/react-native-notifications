package com.wix.reactnativenotifications.fcm;

import android.app.IntentService;
import android.content.Intent;
import android.content.SharedPreferences;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import com.google.firebase.iid.FirebaseInstanceId;

import static com.wix.reactnativenotifications.Defs.LOGTAG;
import static com.wix.reactnativenotifications.Defs.TOKEN_RECEIVED_EVENT_NAME;

public class FcmInstanceIdRefreshHandlerService extends IntentService {

    public static final String ACTION_APP_LAUNCH = "com.wix.reactnativenotifications.fcm.ACTION_APP_LAUNCH";
    public static final String ACTION_MANUAL_REFRESH = "com.wix.reactnativenotifications.fcm.ACTION_MANUAL_REFRESH";

    private static final String PREFS_NAME = "com.wix.reactnativenotifications.fcm.token";
    private static final String PREF_REFRESH_INCOMPLETE = "refreshIncomplete";

    private final LifecycleEventListener reactContextListener = new LifecycleEventListener() {
        @Override
        public void onHostResume() {
            try {
                final ReactContext reactContext = getReactContext();
                reactContext.removeLifecycleEventListener(this);

                SharedPreferences settings = getSharedPreferences(PREFS_NAME, 0);

                if (settings.getBoolean(PREF_REFRESH_INCOMPLETE, false)) {
                    onTokenRefreshed();
                }
            } catch (Exception e) {
                Log.e(LOGTAG, "FATAL: FCM token context refresh listener encountered an error", e);
            }
        }

        @Override
        public void onHostPause() {
        }

        @Override
        public void onHostDestroy() {
        }
    };

    public FcmInstanceIdRefreshHandlerService() {
        super(FcmInstanceIdRefreshHandlerService.class.getSimpleName());
    }

    @Override
    protected void onHandleIntent(Intent intent) {
        String action = intent.getAction();

        if (ACTION_APP_LAUNCH.equals(action)) {
            onAppLaunch();
        } else if (ACTION_MANUAL_REFRESH.equals(action)) {
            onManualRefresh();
        } else {
            onTokenRefreshed();
        }
    }

    private void onAppLaunch() {
        if (getSharedPreferences(PREFS_NAME, 0).getBoolean(PREF_REFRESH_INCOMPLETE, false)) {
            onTokenRefreshed();
        }
    }

    private void onManualRefresh() {
        deleteToken();
    }

    private void onTokenRefreshed() {
        try {
            final ReactContext reactContext = getReactContext();

            boolean refreshIncomplete = true;

            if (reactContext != null) {
                if (reactContext.hasActiveCatalystInstance()) {
                    emitJsEvent(reactContext);
                    refreshIncomplete = false;
                } else {
                    reactContext.addLifecycleEventListener(reactContextListener);
                }
            }

            SharedPreferences.Editor preferencesEditor = getSharedPreferences(PREFS_NAME, 0).edit();
            preferencesEditor.putBoolean(PREF_REFRESH_INCOMPLETE, refreshIncomplete);
            preferencesEditor.commit();
        } catch (Exception e) {
            Log.e(LOGTAG, "FATAL: Failed to refresh FCM token", e);
        }
    }

    private void emitJsEvent(ReactContext reactContext) {
        final FirebaseInstanceId firebaseInstanceID = FirebaseInstanceId.getInstance();
        final String token = firebaseInstanceID.getToken();
        Log.i(LOGTAG, "Firebase has a new token: FirebaseInstanceId=" + firebaseInstanceID.getId() + ", token=" + token);

        if (token != null) {
            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(TOKEN_RECEIVED_EVENT_NAME, token);
        }
    }

    private void deleteToken() {
        try {
            final FirebaseInstanceId firebaseInstanceID = FirebaseInstanceId.getInstance();
            Log.i(LOGTAG, "Manually deleting firebase token: FirebaseInstanceId=" + firebaseInstanceID.getId() + ", token=" + firebaseInstanceID.getToken());
            firebaseInstanceID.deleteInstanceId();
        } catch (Exception e) {
            Log.e(LOGTAG, "FATAL: Failed to delete FCM token", e);
        }
    }

    private ReactContext getReactContext() {
        final ReactInstanceManager instanceManager = ((ReactApplication) getApplicationContext()).getReactNativeHost().getReactInstanceManager();
        return instanceManager.getCurrentReactContext();
    }
}
