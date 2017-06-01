package com.wix.reactnativenotifications.core.notificationdrawer;

import android.app.Activity;
import android.app.NotificationManager;
import android.content.Context;
import android.content.Intent;
import android.support.annotation.Nullable;

import com.wix.reactnativenotifications.core.AppLaunchHelper;
import com.wix.reactnativenotifications.core.InitialNotificationHolder;
import com.wix.reactnativenotifications.core.notifications.NotificationProps;

public class NotificationDrawer implements INotificationDrawer {

    protected final Context mContext;
    protected final AppLaunchHelper mAppLaunchHelper;

    public static INotificationDrawer get(Context context) {
        return NotificationDrawer.get(context, new AppLaunchHelper());
    }

    public static INotificationDrawer get(Context context, AppLaunchHelper appLaunchHelper) {
        final Context appContext = context.getApplicationContext();
        if (appContext instanceof INotificationDrawerApplication) {
            return ((INotificationDrawerApplication) appContext).getNotificationsDrawer(context, appLaunchHelper);
        }

        return new NotificationDrawer(context, appLaunchHelper);
    }

    protected NotificationDrawer(Context context, AppLaunchHelper appLaunchHelper) {
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
        if (mAppLaunchHelper.isLaunchIntentsActivity(activity)) {
            final Intent intent = activity.getIntent();

            if (!mAppLaunchHelper.isLaunchIntentOfNotification(intent)) {
                final InitialNotificationHolder initialNotificationHolder = InitialNotificationHolder.getInstance();
                initialNotificationHolder.clear();

                if (mAppLaunchHelper.isLaunchIntentOfBackgroundPushNotification(intent)) {
                    final NotificationProps notificationProps = NotificationProps.fromBackgroundPushNotificationIntent(activity, intent);
                    initialNotificationHolder.set(notificationProps);
                }
            }
        }
    }

    @Override
    public void onNotificationOpened() {
    }

    @Override
    public void onCancelLocalNotification(@Nullable String tag, int id) {
        final NotificationManager notificationManager = (NotificationManager) mContext.getSystemService(Context.NOTIFICATION_SERVICE);
        notificationManager.cancel(tag, id);
    }

    @Override
    public void onCancelAllLocalNotifications() {
        final NotificationManager notificationManager = (NotificationManager) mContext.getSystemService(Context.NOTIFICATION_SERVICE);
        notificationManager.cancelAll();
    }
}
