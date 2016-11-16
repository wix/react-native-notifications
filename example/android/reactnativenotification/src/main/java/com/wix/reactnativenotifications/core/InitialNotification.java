package com.wix.reactnativenotifications.core;

import android.support.annotation.Nullable;

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
