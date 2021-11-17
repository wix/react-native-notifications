package com.wix.reactnativenotifications;

public interface Defs {
    String LOGTAG = "ReactNativeNotifs";

    String TOKEN_RECEIVED_EVENT_NAME = "remoteNotificationsRegistered";
    String TOKEN_REGISTRATION_FAILED_EVENT_NAME = "remoteNotificationsRegistrationFailed";

    String NOTIFICATION_RECEIVED_EVENT_NAME = "notificationReceived";
    String NOTIFICATION_RECEIVED_BACKGROUND_EVENT_NAME = "notificationReceivedBackground";
    String NOTIFICATION_OPENED_EVENT_NAME = "notificationOpened";
}
