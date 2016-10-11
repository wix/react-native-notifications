package com.wix.reactnativenotifications.gcm;

import android.content.Intent;

import com.google.android.gms.iid.InstanceIDListenerService;

/**
 * Instance-ID + token refreshing handling service. Contacts the GCM to fetch the updated token.
 *
 * @author amitd
 */
public class GcmInstanceIdListenerService extends InstanceIDListenerService {

    @Override
    public void onTokenRefresh() {
        // Fetch updated Instance ID token and notify our app's server of any changes (if applicable).
        // Google recommends running this from an intent service.
        Intent intent = new Intent(this, GcmInstanceIdRefreshHandlerService.class);
        startService(intent);
    }
}
