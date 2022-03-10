package com.wix.reactnativenotifications.fcm;

/**
 * API for Applications that want to listen new FCM tokens
 * whenever its ready.
 */
public interface IFcmTokenListenerApplication {
    void onNewFCMToken(String token);
}
