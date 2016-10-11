package com.wix.reactnativenotifications.gcm;

import android.os.Bundle;
import android.util.Log;

import com.google.android.gms.gcm.GcmListenerService;
import com.wix.reactnativenotifications.core.PushNotification;

import static com.wix.reactnativenotifications.Defs.LOGTAG;

public class GcmMessageHandlerService extends GcmListenerService {

    @Override
    public void onMessageReceived(String s, Bundle bundle) {
        Log.d(LOGTAG, "New message from GCM: " + bundle);

        try {
            final PushNotification notification = new PushNotification(getApplicationContext(), bundle);
            notification.onReceived();
        } catch (PushNotification.InvalidNotificationException e) {
            // A GCM message, yes - but not the kind we know how to work with.
            Log.v(LOGTAG, "GCM message handling aborted", e);
        }
    }
}
