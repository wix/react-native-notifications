package com.wix.reactnativenotifications.core;

import android.app.IntentService;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.wix.reactnativenotifications.core.notifications.ILocalNotification;
import com.wix.reactnativenotifications.core.notifications.LocalNotification;
import com.wix.reactnativenotifications.core.notifications.NotificationProps;

public class ProxyService extends IntentService {

    private static final String TAG = ProxyService.class.getSimpleName();

    public ProxyService() {
        super("notificationsProxyService");
    }

    @Override
    protected void onHandleIntent(Intent intent) {
        Log.d(TAG, "New intent: "+intent);
        final Bundle notificationBundle = NotificationIntentAdapter.extractPendingNotificationDataFromIntent(intent);

        if (notificationBundle != null) {
            final NotificationProps notificationProps = NotificationProps.fromBundle(this, notificationBundle);
            final ILocalNotification localNotification = LocalNotification.get(this, notificationProps);
            localNotification.onOpened();
        }
    }
}
