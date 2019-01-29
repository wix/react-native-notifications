package com.wix.reactnativenotifications.gcm;

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
        IFcmToken gcmToken = FcmToken.get(this);
        if (gcmToken == null) {
            return;
        }

        if (intent.getBooleanExtra(EXTRA_IS_APP_INIT, false)) {
            gcmToken.onAppReady();
        } else if (intent.getBooleanExtra(EXTRA_MANUAL_REFRESH, false)) {
            gcmToken.onManualRefresh();
        } else {
            gcmToken.onNewTokenReady();
        }
    }
}
