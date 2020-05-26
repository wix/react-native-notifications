package com.wix.reactnativenotifications.fcm;

import android.os.Bundle;
import android.util.Log;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;
import com.wix.reactnativenotifications.BuildConfig;
import com.wix.reactnativenotifications.core.notification.IPushNotification;
import com.wix.reactnativenotifications.core.notification.PushNotification;

import org.json.JSONObject;

import static com.wix.reactnativenotifications.Defs.LOGTAG;

/**
 * Instance-ID + token refreshing handling service. Contacts the FCM to fetch the updated token.
 *
 * @author amitd
 */
public class FcmInstanceIdListenerService extends FirebaseMessagingService {

    @Override
    public void onMessageReceived(RemoteMessage message) {
        Bundle bundle = message.toIntent().getExtras();
        if(BuildConfig.DEBUG) Log.d(LOGTAG, "New message from FCM: " + bundle);

        JSONObject data = new JSONObject(message.getData());
        if (data.has("message")) {
            try {
                final IPushNotification notification = PushNotification.get(getApplicationContext(), bundle);
                notification.onReceived();
            } catch (IPushNotification.InvalidNotificationException e) {
                if(BuildConfig.DEBUG) Log.v(LOGTAG, "FCM message handling aborted", e);
            }
        } else {
            Log.d("fonMessageReceived", "having custom key"); // it's from other service than FCM
        }
    }
}
