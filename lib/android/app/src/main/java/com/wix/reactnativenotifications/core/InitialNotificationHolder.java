package com.wix.reactnativenotifications.core;


import com.wix.reactnativenotifications.core.notification.PushNotificationProps;

public class InitialNotificationHolder {

    private static InitialNotificationHolder sInstance;

    private PushNotificationProps mNotification;

    public static void setInstance(InitialNotificationHolder instance) {
        sInstance = instance;
    }

    /*package*/ InitialNotificationHolder() {
    }

    public static InitialNotificationHolder getInstance() {
        if (sInstance == null) {
            sInstance = new InitialNotificationHolder();
        }
        return sInstance;
    }

    public void set(PushNotificationProps pushNotificationProps) {
        mNotification = pushNotificationProps;
    }

    public void clear() {
        mNotification = null;
    }

    public PushNotificationProps get() {
        return mNotification;
    }
}
