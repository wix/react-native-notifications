package com.wix.reactnativenotifications.core.notifications;

public interface IntentExtras {
    String FCM_PREFIX = "google."; // Typically "google.sent_time" and "google.message_id"
    String FCM_COLLAPSE_KEY = "collapse_key";
    String FCM_FROM = "from";

    String LAUNCH_FLAG = "launchedFromNotification";
}
