package com.wix.reactnativenotifications.gcm;

import android.app.IntentService;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.google.android.gms.gcm.GoogleCloudMessaging;
import com.google.android.gms.iid.InstanceID;

import static com.wix.reactnativenotifications.Defs.GCM_SENDER_ID_ATTR_NAME;
import static com.wix.reactnativenotifications.Defs.LOGTAG;
import static com.wix.reactnativenotifications.Defs.TOKEN_RECEIVED_EVENT_NAME;

public class GcmInstanceIdRefreshHandlerService extends IntentService {

    public GcmInstanceIdRefreshHandlerService() {
        super(GcmInstanceIdRefreshHandlerService.class.getSimpleName());
    }

    public GcmInstanceIdRefreshHandlerService(String name) {
        super(name);
    }

    @Override
    protected void onHandleIntent(Intent intent) {
        final InstanceID instanceId = InstanceID.getInstance(getApplicationContext());
        Log.d(LOGTAG, "GCM is refreshing token... instanceId=" + instanceId.getId());

        // TODO why is this needed?
        GoogleCloudMessaging.getInstance(getApplicationContext()).close();

        final String registrationToken;
        try {
            registrationToken = instanceId.getToken(getSenderId(), GoogleCloudMessaging.INSTANCE_ID_SCOPE);
            Log.i(LOGTAG, "GCM has a new token: instanceId=" + instanceId.getId() + ", token=" + registrationToken);
        } catch (Exception e) {
            Log.e(LOGTAG, "FATAL: Failed to fetch a fresh new token, instanceId=" + instanceId.getId(), e);
            return;
        }

        notifyTokenEvent(registrationToken);
    }

    protected String getSenderId() {
        final String senderId = getSenderIdFromManifest();
        if (senderId == null) {
            throw new IllegalStateException("Sender ID not found in manifest. Did you forget to add it as the value of a '"+GCM_SENDER_ID_ATTR_NAME+"' meta-data field?");
        }
        return senderId;
    }

    protected String getSenderIdFromManifest() {
        final ApplicationInfo appInfo;
        try {
            appInfo = getPackageManager().getApplicationInfo(getPackageName(), PackageManager.GET_META_DATA);
            return appInfo.metaData.getString(GCM_SENDER_ID_ATTR_NAME);
        } catch (PackageManager.NameNotFoundException e) {
            // Should REALLY never happen cause we're querying for our own package.
            Log.e(LOGTAG, "Failed to resolve sender ID from manifest", e);
            return null;
        }
    }

    protected void notifyTokenEvent(String registrationToken) {
        final ReactInstanceManager instanceManager = ((ReactApplication) getApplication()).getReactNativeHost().getReactInstanceManager();
        final ReactContext reactContext = instanceManager.getCurrentReactContext();

        // Note: Cannot assume react-context exists cause this is an async dispatched service.
        if (reactContext != null && reactContext.hasActiveCatalystInstance()) {
            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(TOKEN_RECEIVED_EVENT_NAME, registrationToken);
        }
    }
}
