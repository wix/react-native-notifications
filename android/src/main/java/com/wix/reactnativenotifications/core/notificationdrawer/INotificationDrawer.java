package com.wix.reactnativenotifications.core.notificationdrawer;

import android.app.Activity;
import android.support.annotation.Nullable;

public interface INotificationDrawer {
    void onAppInit();
    void onAppVisible();
    void onNewActivity(Activity activity);

    void onNotificationOpened();

    void onCancelLocalNotification(@Nullable String tag, int id);
    void onCancelAllLocalNotifications();
}
