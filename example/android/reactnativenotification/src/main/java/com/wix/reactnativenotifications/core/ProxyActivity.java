package com.wix.reactnativenotifications.core;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;

import static com.wix.reactnativenotifications.Defs.LOGTAG;

/**
 * The front-end (hidden) activity for handling notification <b>opening</b> actions triggered by the
 * device user (i.e. upon tapping on them in the notifications drawer).
 */
public class ProxyActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Log.d(LOGTAG, "ProxyActivity.onCreate, " + getIntent().getExtras());

        final Bundle rawNotificationData = NotificationIntentAdapter.extractPendingNotificationDataFromIntent(getIntent());
        if (rawNotificationData != null) {
            new PushNotification(this, rawNotificationData).onOpened(this);
        }

        finish();
    }
}
