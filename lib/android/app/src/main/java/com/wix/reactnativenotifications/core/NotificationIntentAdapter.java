package com.wix.reactnativenotifications.core;

import android.annotation.SuppressLint;
import android.app.PendingIntent;
import android.app.TaskStackBuilder;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;

import com.wix.reactnativenotifications.core.notification.PushNotificationProps;

public class NotificationIntentAdapter {
    private static final String PUSH_NOTIFICATION_EXTRA_NAME = "pushNotification";

    @SuppressLint("UnspecifiedImmutableFlag")
    public static PendingIntent createPendingNotificationIntent(Context appContext, PushNotificationProps notification) {
        if (canHandleTrampolineActivity(appContext)) {
            Intent intent = new Intent(appContext, ProxyService.class);
            intent.putExtra(PUSH_NOTIFICATION_EXTRA_NAME, notification.asBundle());
            return PendingIntent.getService(appContext, (int) System.currentTimeMillis(), intent, PendingIntent.FLAG_ONE_SHOT);
        } else {
            Intent mainActivityIntent = appContext.getPackageManager().getLaunchIntentForPackage(appContext.getPackageName());
            mainActivityIntent.putExtra(PUSH_NOTIFICATION_EXTRA_NAME, notification.asBundle());
            TaskStackBuilder taskStackBuilder = TaskStackBuilder.create(appContext);
            taskStackBuilder.addNextIntentWithParentStack(mainActivityIntent);
            return taskStackBuilder.getPendingIntent((int) System.currentTimeMillis(), PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_ONE_SHOT | PendingIntent.FLAG_IMMUTABLE);
        }
    }

    public static boolean canHandleTrampolineActivity(Context appContext) {
        return android.os.Build.VERSION.SDK_INT < android.os.Build.VERSION_CODES.R || appContext.getApplicationInfo().targetSdkVersion < 31;
    }

    public static Bundle extractPendingNotificationDataFromIntent(Intent intent) {
        Bundle notificationBundle = intent.getBundleExtra(PUSH_NOTIFICATION_EXTRA_NAME);
        if (notificationBundle != null) {
            return notificationBundle;
        } else {
            return intent.getExtras();
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
