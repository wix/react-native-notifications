package com.wix.reactnativenotifications.core;

import android.app.Activity;
import android.app.NotificationManager;
import android.content.Context;

public class PushNotificationsDrawer implements IPushNotificationsDrawer {

    protected final Context mContext;

    public PushNotificationsDrawer(Context context) {
        mContext = context;
    }

    public static IPushNotificationsDrawer get(Context context) {
        final Context appContext = context.getApplicationContext();
        if (appContext instanceof INotificationsDrawerApplication) {
            return ((INotificationsDrawerApplication) appContext).getPushNotificationsDrawer();
        }

        return new PushNotificationsDrawer(context);
    }

    @Override
    public void onAppInit() {
        clearAll();
    }

    @Override
    public void onAppVisible() {
        clearAll();
    }

    @Override
    public void onNewActivity(Activity activity) {
        if (AppLaunchHelper.isLaunchIntentsActivity(activity) &&
            !AppLaunchHelper.isLaunchIntent(activity.getIntent())) {
            InitialNotification.clear();
        }
    }

    @Override
    public void onNotificationOpened() {
        clearAll();
    }

    protected void clearAll() {
        final NotificationManager notificationManager = (NotificationManager) mContext.getSystemService(Context.NOTIFICATION_SERVICE);
        notificationManager.cancelAll();
    }
}
