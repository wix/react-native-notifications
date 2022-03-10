package com.wix.reactnativenotifications.core.notification;

public interface INotificationChannel {

    /**
     * Creates a new notification channel with the given parameters. This also updates an existing
     * notification channel.
     *
     */
    void setNotificationChannel();

    NotificationChannelProps asProps();
}
