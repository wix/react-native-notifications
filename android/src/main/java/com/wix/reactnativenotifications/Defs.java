package com.wix.reactnativenotifications;

public interface Defs {
    String LOGTAG = "ReactNativeNotifs";
    String GCM_SENDER_ID_ATTR_NAME = "com.wix.reactnativenotifications.gcmSenderId";

    String TOKEN_RECEIVED_EVENT_NAME = "remoteNotificationsRegistered";

    String NOTIFICATION_RECEIVED_EVENT_NAME = "notificationReceived";
    String LOCAL_NOTIFICATION_RECEIVED_EVENT_NAME = "localNotificationReceived";
    String NOTIFICATION_RECEIVED_FOREGROUND_EVENT_NAME = "notificationReceivedInForeground";
    String NOTIFICATION_OPENED_EVENT_NAME = "notificationOpened";
}
