package com.wix.reactnativenotifications.core;

import android.app.IntentService;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.util.Log;

import com.wix.reactnativenotifications.core.notifications.ILocalNotification;
import com.wix.reactnativenotifications.core.notifications.LocalNotification;
import com.wix.reactnativenotifications.core.notifications.NotificationProps;

public class LocalNotificationService extends IntentService {

    public static final String EXTRA_NOTIFICATION = "com.wix.reactnativenotifications.core.NOTIFICATION";

    private static final String TAG = LocalNotificationService.class.getSimpleName();

    public LocalNotificationService() {
        super(LocalNotificationService.class.getSimpleName());
    }

    @Override
    protected void onHandleIntent(@Nullable Intent intent) {
        Log.d(TAG, "New intent: " + intent);
        final Bundle notificationBundle = intent != null ? intent.getBundleExtra(EXTRA_NOTIFICATION) : null;

        if (notificationBundle != null) {
            final NotificationProps notificationProps = NotificationProps.fromBundle(this, notificationBundle);
            final ILocalNotification localNotification = LocalNotification.get(this, notificationProps);
            localNotification.onOpened();
        }
    }
}
