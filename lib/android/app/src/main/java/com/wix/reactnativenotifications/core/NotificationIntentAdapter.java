package com.wix.reactnativenotifications.core;

import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;

import com.wix.reactnativenotifications.core.notification.PushNotificationProps;

public class NotificationIntentAdapter {
    private static final String PUSH_NOTIFICATION_EXTRA_NAME = "pushNotification";

    public static PendingIntent createPendingNotificationIntent(Context appContext, PushNotificationProps notification) {
        Intent intent = new AppLaunchHelper().getLaunchIntent(appContext);
        intent.putExtra(PUSH_NOTIFICATION_EXTRA_NAME, notification.asBundle());
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            return PendingIntent.getActivity(appContext, (int) System.currentTimeMillis(), intent, PendingIntent.FLAG_ONE_SHOT | PendingIntent.FLAG_IMMUTABLE);
        } else {
            return PendingIntent.getActivity(appContext, (int) System.currentTimeMillis(), intent, PendingIntent.FLAG_ONE_SHOT);
        }
    }

    public static boolean canHandleIntent(Intent intent) {
        if (intent != null) {
            Bundle notificationData = intent.getExtras();
            return notificationData != null &&
                    (intent.hasExtra(PUSH_NOTIFICATION_EXTRA_NAME) ||
                            notificationData.getString("google.message_id", null) != null);
        }

        return false;
    }
}
