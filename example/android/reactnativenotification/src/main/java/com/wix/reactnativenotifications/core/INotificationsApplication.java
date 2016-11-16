package com.wix.reactnativenotifications.core;

import android.content.Context;
import android.os.Bundle;

public interface INotificationsApplication {
    IPushNotification getPushNotification(Context context, Bundle bundle, AppLifecycleFacade facade);
}
