package com.wix.reactnativenotifications;

import android.app.Activity;
import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.google.android.gms.gcm.GcmListenerService;

import static com.wix.reactnativenotifications.Defs.LOGTAG;

public class GcmMessageHandlerService extends GcmListenerService {

    @Override
    public void onMessageReceived(String s, Bundle bundle) {
        Log.d(LOGTAG, "New message from GCM: " + bundle);

        final Bundle notificationBundle = bundle.getBundle("notification");
        final Bundle dataBundle = bundle.getBundle("data");
        if (notificationBundle == null) {
            return;
        }

        final String title = notificationBundle.getString("title");
        final String body = notificationBundle.getString("body");
        if (title == null || title.trim().isEmpty() || body == null || body.trim().isEmpty()) {
            return;
        }

        final PendingIntent pendingIntent = getCTAPendingIntent(notificationBundle, dataBundle);
        final Notification notification = buildNotification(title, body, pendingIntent);
        postNotification((int) System.currentTimeMillis(), notification);
    }

    protected PendingIntent getCTAPendingIntent(Bundle notificationBundle, Bundle dataBundle) {
        final Context appContext = getApplicationContext();
        final Intent helperIntent = getPackageManager().getLaunchIntentForPackage(getPackageName());
        final Intent intent;
        try {
            intent = new Intent(appContext, Class.forName(helperIntent.getComponent().getClassName()));
            intent.addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP);
            intent.putExtra("notification.meta", notificationBundle);
            intent.putExtra("notification.data", dataBundle);
            return PendingIntent.getActivity(appContext, 0, intent, 0);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            return null;
        }
    }

    protected Notification buildNotification(String title, String body, PendingIntent intent) {
        final Context appContext = getApplicationContext();
        final Notification.Builder notificationBuilder = new Notification.Builder(appContext)
                .setContentTitle(title)
                .setContentText(body)
                .setSmallIcon(R.drawable.notification)
                .setContentIntent(intent)
                .setDefaults(Notification.DEFAULT_ALL)
                .setAutoCancel(true);

        final Notification notification = notificationBuilder.build();
        return notification;
    }

    protected void postNotification(int id, Notification notification) {
        final Context appContext = getApplicationContext();
        final NotificationManager notificationManager = (NotificationManager) appContext.getSystemService(Context.NOTIFICATION_SERVICE);
        notificationManager.notify(id, notification);
    }

    protected Activity getCurrentActivity() {
        final ReactApplicationContext reactContext = RNNotificationsContextHolder.getReactContext();
        if (reactContext == null) {
            return null;
        }
        return reactContext.getCurrentActivity();
    }
}
