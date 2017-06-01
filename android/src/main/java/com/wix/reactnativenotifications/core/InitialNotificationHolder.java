package com.wix.reactnativenotifications.core;

import android.support.annotation.Nullable;

import com.wix.reactnativenotifications.core.notifications.NotificationProps;

public class InitialNotificationHolder {

    private static InitialNotificationHolder sInstance;

    private NotificationProps mNotification;

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

    public void set(NotificationProps notificationProps) {
        mNotification = notificationProps;
    }

    public void clear() {
        mNotification = null;
    }

    @Nullable
    public NotificationProps get() {
        return mNotification;
    }
}
