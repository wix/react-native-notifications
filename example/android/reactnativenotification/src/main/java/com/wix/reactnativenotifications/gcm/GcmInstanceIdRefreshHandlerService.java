package com.wix.reactnativenotifications.gcm;

import android.app.IntentService;
import android.content.Intent;

public class GcmInstanceIdRefreshHandlerService extends IntentService {

    public GcmInstanceIdRefreshHandlerService() {
        super(GcmInstanceIdRefreshHandlerService.class.getSimpleName());
    }

    @Override
    protected void onHandleIntent(Intent intent) {
        IGcmToken gcmToken = GcmToken.get(this);
        if (gcmToken != null) {
            gcmToken.onNewTokenReady();
        }
    }
}
