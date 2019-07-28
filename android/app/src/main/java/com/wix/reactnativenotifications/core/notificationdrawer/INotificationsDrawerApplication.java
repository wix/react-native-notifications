package com.wix.reactnativenotifications.core.notificationdrawer;

import android.content.Context;

import com.wix.reactnativenotifications.core.AppLaunchHelper;

public interface INotificationsDrawerApplication {
    IPushNotificationsDrawer getPushNotificationsDrawer(Context context, AppLaunchHelper defaultAppLaunchHelper);
}
