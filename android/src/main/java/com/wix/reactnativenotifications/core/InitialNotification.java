package com.wix.reactnativenotifications.core;

import android.support.annotation.Nullable;

import com.wix.reactnativenotifications.core.notification.PushNotificationProps;

public class InitialNotification {

    private static InitialNotification sInstance;

    private PushNotificationProps mNotification;

    public static void setInstance(InitialNotification instance) {
        sInstance = instance;
    }

    /*package*/ InitialNotification() {
    }

    public static InitialNotification getInstance() {
        if (sInstance == null) {
            sInstance = new InitialNotification();
        }
        return sInstance;
    }

    public void set(PushNotificationProps pushNotificationProps) {
        mNotification = pushNotificationProps;
    }

    public void clear() {
        mNotification = null;
    }

    @Nullable
    public PushNotificationProps get() {
        return mNotification;
    }
}
