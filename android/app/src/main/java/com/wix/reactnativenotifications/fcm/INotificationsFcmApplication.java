package com.wix.reactnativenotifications.fcm;

import android.content.Context;

public interface INotificationsFcmApplication {
    IFcmToken getFcmToken(Context context);
}
