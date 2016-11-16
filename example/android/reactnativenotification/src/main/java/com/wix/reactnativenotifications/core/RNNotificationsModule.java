package com.wix.reactnativenotifications.core;

import android.content.Context;
import android.content.Intent;
import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.wix.reactnativenotifications.gcm.GcmInstanceIdRefreshHandlerService;

import static com.wix.reactnativenotifications.Defs.LOGTAG;

public class RNNotificationsModule extends ReactContextBaseJavaModule {

    public RNNotificationsModule(ReactApplicationContext reactContext) {
        super(reactContext);

        ReactAppLifecycleFacade.get().onAppInit(reactContext);
    }

    @Override
    public String getName() {
        return "WixRNNotifications";
    }

    @Override
    public void initialize() {
        Log.d(LOGTAG, "Native module init");

        final Context appContext = getReactApplicationContext().getApplicationContext();
        final Intent tokenFetchIntent = new Intent(appContext, GcmInstanceIdRefreshHandlerService.class);
        tokenFetchIntent.putExtra(GcmInstanceIdRefreshHandlerService.EXTRA_IS_APP_INIT, true);
        appContext.startService(tokenFetchIntent);
    }



    @ReactMethod
    public void getInitialNotification(final Promise promise) {
        Log.d(LOGTAG, "Native method invocation: getInitialNotification");
        Object result = null;

        try {
            final PushNotificationProps notification = InitialNotification.get();
            if (notification == null) {
                return;
            }

            result = Arguments.fromBundle(notification.asBundle());
        } finally {
            promise.resolve(result);
        }
    }

    @ReactMethod
    public void refreshToken() {
        Log.d(LOGTAG, "Native method invocation: refreshToken()");

        final Context appContext = getReactApplicationContext().getApplicationContext();
        final Intent tokenFetchIntent = new Intent(appContext, GcmInstanceIdRefreshHandlerService.class);
        tokenFetchIntent.putExtra(GcmInstanceIdRefreshHandlerService.EXTRA_MANUAL_REFRESH, true);
        appContext.startService(tokenFetchIntent);
    }
}
