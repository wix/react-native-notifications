package com.wix.reactnativenotifications.core.notificationdrawer;

import android.content.Context;

import com.wix.reactnativenotifications.core.AppLaunchHelper;

public interface INotificationDrawerApplication {
    INotificationDrawer getNotificationsDrawer(Context context, AppLaunchHelper defaultAppLaunchHelper);
}
