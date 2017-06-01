package com.wix.reactnativenotifications.fcm;

import android.util.Log;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;
import com.wix.reactnativenotifications.core.notifications.NotificationProps;
import com.wix.reactnativenotifications.core.notifications.RemoteNotification;

import static com.wix.reactnativenotifications.Defs.LOGTAG;

public class FcmMessageHandlerService extends FirebaseMessagingService {

    @Override
    public void onMessageReceived(RemoteMessage message) {
        Log.d(LOGTAG, "New message from firebase");
        final NotificationProps notificationProps = NotificationProps.fromRemoteMessage(this, message);
        new RemoteNotification(this, notificationProps).onReceived();
    }
}
