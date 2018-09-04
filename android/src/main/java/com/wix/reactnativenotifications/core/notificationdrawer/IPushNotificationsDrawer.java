package com.wix.reactnativenotifications.core.notificationdrawer;

import android.app.Activity;

public interface IPushNotificationsDrawer {
    void onAppInit();
    void onAppVisible();
    void onNewActivity(Activity activity);

    void onNotificationOpened();
    void onNotificationClearRequest(int id);
    void clearAll();
}
