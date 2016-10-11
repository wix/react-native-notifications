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
    }

    @Override
    public String getName() {
        return "WixRNNotifications";
    }

    @Override
    public void initialize() {
        Log.d(LOGTAG, "native module init");
        final Context appContext = getReactApplicationContext().getApplicationContext();
        final Intent tokenFetchIntent = new Intent(appContext, GcmInstanceIdRefreshHandlerService.class);
        appContext.startService(tokenFetchIntent);
    }

    @ReactMethod
    public void getInitialNotification(final Promise promise) {
        Object result = null;

        try {
            final PushNotificationProps notification = InitialNotificationStore.getInitialNotification();
            if (notification == null) {
                return;
            }

            result = Arguments.fromBundle(notification.asBundle());
        } finally {
            promise.resolve(result);
        }
    }
}
