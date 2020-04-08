package com.wix.reactnativenotifications.core.notificationdrawer;

import android.app.Activity;
import android.app.NotificationManager;
import android.content.Context;

import com.wix.reactnativenotifications.core.AppLaunchHelper;

public class PushNotificationsDrawer implements IPushNotificationsDrawer {

    final protected Context mContext;
    final protected AppLaunchHelper mAppLaunchHelper;

    public static IPushNotificationsDrawer get(Context context) {
        return PushNotificationsDrawer.get(context, new AppLaunchHelper());
    }

    public static IPushNotificationsDrawer get(Context context, AppLaunchHelper appLaunchHelper) {
        final Context appContext = context.getApplicationContext();
        if (appContext instanceof INotificationsDrawerApplication) {
            return ((INotificationsDrawerApplication) appContext).getPushNotificationsDrawer(context, appLaunchHelper);
        }

        return new PushNotificationsDrawer(context, appLaunchHelper);
    }

    protected PushNotificationsDrawer(Context context, AppLaunchHelper appLaunchHelper) {
        mContext = context;
        mAppLaunchHelper = appLaunchHelper;
    }

    @Override
    public void onAppInit() {
    }

    @Override
    public void onAppVisible() {
    }

    @Override
    public void onNewActivity(Activity activity) {
    }

    @Override
    public void onNotificationOpened() {
    }

    @Override
    public void onNotificationClearRequest(int id) {
        final NotificationManager notificationManager = (NotificationManager) mContext.getSystemService(Context.NOTIFICATION_SERVICE);
        notificationManager.cancel(id);
    }

    @Override
    public void onNotificationClearRequest(String tag, int id) {
        final NotificationManager notificationManager = (NotificationManager) mContext.getSystemService(Context.NOTIFICATION_SERVICE);
        notificationManager.cancel(tag, id);
    }

    @Override
    public void onAllNotificationsClearRequest() {
        final NotificationManager notificationManager = (NotificationManager) mContext.getSystemService(Context.NOTIFICATION_SERVICE);
        notificationManager.cancelAll();
    }
}
