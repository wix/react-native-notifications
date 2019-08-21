package com.wix.reactnativenotifications.fcm;

public interface IFcmToken {

    /**
     * Handle an event where we've been notified of a that a fresh token is now available from Google.
     */
    void onNewTokenReady();

    /**
     * Handle an event where application is ready; typically used for sending token to JS.
     */
    void onAppReady();

    /**
     * Handle a request to actively refresh the token on demand.
     * This is in essence a workaround so as to allow apps to handle end-cases of token refreshing. It
     * shouldn't be used by standard apps, as the token management is self sufficient.
     */
    void onManualRefresh();
}
