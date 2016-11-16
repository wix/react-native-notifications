package com.wix.reactnativenotifications.core;

import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.wix.reactnativenotifications.gcm.GcmToken;
import com.wix.reactnativenotifications.gcm.IGcmToken;

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
        Log.d(LOGTAG, "Native module init");
        IGcmToken gcmToken = GcmToken.get(getReactApplicationContext().getApplicationContext());
        gcmToken.onAppReady();
    }

    @ReactMethod
    public void getInitialNotification(final Promise promise) {
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
}
