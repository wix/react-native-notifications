package com.wix.reactnativenotifications.core;

import android.app.Activity;

public interface IPushNotificationsDrawer {
    void onAppInit();
    void onAppVisible();
    void onNewActivity(Activity activity);

    void onNotificationOpened();
}
