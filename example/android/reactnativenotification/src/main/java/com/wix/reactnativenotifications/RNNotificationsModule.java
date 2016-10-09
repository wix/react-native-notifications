package com.wix.reactnativenotifications;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

import static com.wix.reactnativenotifications.Defs.LOGTAG;

public class RNNotificationsModule extends ReactContextBaseJavaModule implements ActivityEventListener {

    public RNNotificationsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "WixRNNotification";
    }

    @Override
    public void initialize() {
        Log.d(LOGTAG, "native module init");
        final Context appContext = getReactApplicationContext().getApplicationContext();
        final Intent tokenFetchIntent = new Intent(appContext, GcmInstanceIdRefreshHandlerService.class);
        appContext.startService(tokenFetchIntent);

        getReactApplicationContext().addActivityEventListener(this);
    }

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
    }

    @Override
    public void onNewIntent(Intent intent) {
        Log.e(LOGTAG, "New intent: "+intent);
    }
}
