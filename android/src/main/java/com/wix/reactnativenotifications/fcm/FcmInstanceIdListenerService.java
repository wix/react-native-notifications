package com.wix.reactnativenotifications.fcm;

import android.content.Intent;

import com.google.firebase.iid.FirebaseInstanceIdService;

public class FcmInstanceIdListenerService extends FirebaseInstanceIdService {

    @Override
    public void onTokenRefresh() {
        final Intent intent = new Intent(this, FcmTokenService.class);
        intent.setAction(FcmTokenService.ACTION_REFRESH_TOKEN);
        startService(intent);
    }
}
