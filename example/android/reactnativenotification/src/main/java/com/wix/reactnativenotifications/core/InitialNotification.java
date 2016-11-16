package com.wix.reactnativenotifications.core;

import android.support.annotation.Nullable;

import com.wix.reactnativenotifications.core.notification.PushNotificationProps;

public class InitialNotification {
    private static PushNotificationProps sNotification;

    public static void set(PushNotificationProps pushNotificationProps) {
        sNotification = pushNotificationProps;
    }

    public static void clear() {
        sNotification = null;
    }

    @Nullable
    public static PushNotificationProps get() {
        return sNotification;
    }
}
