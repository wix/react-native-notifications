package com.wix.reactnativenotifications.gcm;

import android.content.Context;

public interface INotificationsGcmApplication {
    IGcmToken getGcmToken(Context context);
}
