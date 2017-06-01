package com.wix.reactnativenotifications.fcm;

import java.util.Map;

import android.os.Bundle;
import android.util.Log;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;
import com.wix.reactnativenotifications.core.notification.IPushNotification;
import com.wix.reactnativenotifications.core.notification.PushNotification;

import static com.wix.reactnativenotifications.Defs.LOGTAG;

public class FcmMessageHandlerService extends FirebaseMessagingService {

    @Override
    public void onMessageReceived(RemoteMessage message) {
        Log.d(LOGTAG, "New message from firebase: " + message.getData());

        try {
            final Bundle bundle = new Bundle();

            for (Map.Entry<String, String> entry : message.getData().entrySet()) {
                bundle.putString(entry.getKey(), entry.getValue());
            }

            final IPushNotification notification = PushNotification.get(getApplicationContext(), bundle);
            notification.onReceived();
        } catch (IPushNotification.InvalidNotificationException e) {
            // Received a message, but not the kind we know how to work with.
            Log.v(LOGTAG, "Firebase message handling aborted", e);
        }
    }
}
