package com.wix.reactnativenotifications.core;

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

    PushNotificationProps asProps();
}
