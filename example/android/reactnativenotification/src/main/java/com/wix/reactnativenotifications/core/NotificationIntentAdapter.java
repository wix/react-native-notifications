package com.wix.reactnativenotifications.core;

import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;

public class NotificationIntentAdapter {
    private static final int PENDING_INTENT_CODE = 0;
    private static final String PUSH_NOTIFICATION_EXTRA_NAME = "pushNotification";

    public static PendingIntent createPendingNotificationIntent(Context appContext, Intent intent, PushNotificationProps notification) {
        intent.putExtra(PUSH_NOTIFICATION_EXTRA_NAME, notification.asBundle());
        return PendingIntent.getActivity(appContext, PENDING_INTENT_CODE, intent, 0);
    }

    public static Bundle extractPendingNotificationDataFromIntent(Intent intent) {
        return intent.getBundleExtra(PUSH_NOTIFICATION_EXTRA_NAME);
    }
}
