package com.wix.reactnativenotifications.core.notificationdrawer;

import android.content.Context;

public interface INotificationsDrawerApplication {
    IPushNotificationsDrawer getPushNotificationsDrawer(Context context);
}
