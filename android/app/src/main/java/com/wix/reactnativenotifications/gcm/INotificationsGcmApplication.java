package com.wix.reactnativenotifications.gcm;

import android.content.Context;

public interface INotificationsGcmApplication {
    IFcmToken getFcmToken(Context context);
}
