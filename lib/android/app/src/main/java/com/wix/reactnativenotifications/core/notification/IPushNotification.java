package com.wix.reactnativenotifications.core.notification;

public interface IPushNotification {
    class InvalidNotificationException extends Exception {
        public InvalidNotificationException(String detailMessage) {
            super(detailMessage);
        }
    }

    /**
     * Handle an event where notification has just been received.
     * @throws InvalidNotificationException
     */
    void onReceived() throws InvalidNotificationException;

    /**
     * Handle an event where notification has already been dispatched and is not being opened by the device user.
     */
    void onOpened();

    /**
     * Handle a request to post this notification.
     *
     * @param notificationId (optional) The specific ID to associated with the notification.
     * @param channelID (optional) The specific channel ID to associated with the notification.
     * @return The ID effectively assigned to the notification (Auto-assigned if not specified as a parameter).
     */
    int onPostRequest(Integer notificationId, String channelID);

    PushNotificationProps asProps();
}
