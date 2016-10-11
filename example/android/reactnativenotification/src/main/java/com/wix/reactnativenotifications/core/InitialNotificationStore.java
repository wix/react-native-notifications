package com.wix.reactnativenotifications.core;

public class InitialNotificationStore {
    private static PushNotificationProps sInitialNotif;

    public static void setInitialNotification(PushNotificationProps pushNotificationProps) {
        sInitialNotif = pushNotificationProps;
    }

    public static PushNotificationProps getInitialNotification() {
        return sInitialNotif;
    }
}
