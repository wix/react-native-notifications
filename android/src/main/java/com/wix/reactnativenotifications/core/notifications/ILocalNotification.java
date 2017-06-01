package com.wix.reactnativenotifications.core.notifications;

import android.support.annotation.Nullable;

public interface ILocalNotification {

    /**
     * Post this notification.
     *
     * @param notificationId (optional) The specific ID to associated with the notification.
     * @return The ID effectively assigned to the notification (Auto-assigned if not specified as a parameter).
     */
    int post(@Nullable Integer notificationId);

    /**
     * Handle an event where notification has already been dispatched and is not being opened by the device user.
     */
    void onOpened();
}
