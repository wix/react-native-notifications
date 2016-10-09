package com.wix.reactnativenotifications;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class RNNotificationsContextHolder extends ReactContextBaseJavaModule {

    private static RNNotificationsContextHolder sInstance;

    public static RNNotificationsContextHolder createInstance(ReactApplicationContext reactContext) {
        if (sInstance == null) {
            sInstance = new RNNotificationsContextHolder(reactContext);
        }

        return sInstance;
    }

    public static ReactApplicationContext getReactContext() {
        return (sInstance == null ? null : sInstance.getReactApplicationContext());
    }

    private RNNotificationsContextHolder(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "RNNotificationsContextHolder";
    }
}
