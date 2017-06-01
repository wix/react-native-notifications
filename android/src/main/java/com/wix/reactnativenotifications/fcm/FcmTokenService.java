package com.wix.reactnativenotifications.fcm;

import android.app.IntentService;
import android.content.Intent;

public class FcmTokenService extends IntentService {

    public static final String ACTION_REFRESH_TOKEN = "com.wix.reactnativenotifications.fcm.ACTION_REFRESH_TOKEN";
    public static final String ACTION_INVALIDATE_TOKEN = "com.wix.reactnativenotifications.fcm.ACTION_INVALIDATE_TOKEN";

    private FcmTokenBridge fcmTokenBridge;

    public FcmTokenService() {
        super(FcmTokenService.class.getSimpleName());

        fcmTokenBridge = new FcmTokenBridge(this);
    }

    @Override
    protected void onHandleIntent(Intent intent) {
        final String action = intent.getAction();

        if (ACTION_REFRESH_TOKEN.equals(action)) {
            fcmTokenBridge.refreshToken();
        } else if (ACTION_INVALIDATE_TOKEN.equals(action)) {
            fcmTokenBridge.invalidateToken();
        }
    }
}
