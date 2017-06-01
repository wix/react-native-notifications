package com.wix.reactnativenotifications.core.notifications;

import android.content.Context;

import com.wix.reactnativenotifications.core.AppLaunchHelper;
import com.wix.reactnativenotifications.core.AppLifecycleFacade;

public interface INotificationsApplication {
    ILocalNotification getLocalNotification(Context context, NotificationProps notificationProps, AppLifecycleFacade facade, AppLaunchHelper defaultAppLaunchHelper);
}
