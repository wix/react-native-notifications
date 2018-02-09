package com.wix.reactnativenotifications.core.notificationdrawer;

import android.app.Activity;

public interface IPushNotificationsDrawer {
    void onAppInit(boolean clearNotificationsOnInit);
    void onAppVisible(boolean clearNotificationsOnAppVisible);
    void onNewActivity(Activity activity);

    void onNotificationOpened();
    void onNotificationClearRequest(int id);
}
