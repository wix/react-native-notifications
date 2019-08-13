package com.wix.reactnativenotifications.fcm;

import android.app.IntentService;
import android.content.Intent;

public class FcmInstanceIdRefreshHandlerService extends IntentService {

    public static String EXTRA_IS_APP_INIT = "isAppInit";
    public static String EXTRA_MANUAL_REFRESH = "doManualRefresh";

    public FcmInstanceIdRefreshHandlerService() {
        super(FcmInstanceIdRefreshHandlerService.class.getSimpleName());
    }

    @Override
    protected void onHandleIntent(Intent intent) {
        IFcmToken fcmToken = FcmToken.get(this);
        if (fcmToken == null) {
            return;
        }

        if (intent.getBooleanExtra(EXTRA_IS_APP_INIT, false)) {
            fcmToken.onAppReady();
        } else if (intent.getBooleanExtra(EXTRA_MANUAL_REFRESH, false)) {
            fcmToken.onManualRefresh();
        } else {
            fcmToken.onNewTokenReady();
        }
    }
}
