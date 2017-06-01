package com.wix.reactnativenotifications.fcm;

import android.content.Context;
import android.util.Log;

import com.google.firebase.iid.FirebaseInstanceId;
import com.wix.reactnativenotifications.core.JsIOHelper;

import static com.wix.reactnativenotifications.Defs.LOGTAG;
import static com.wix.reactnativenotifications.Defs.TOKEN_RECEIVED_EVENT_NAME;

public class FcmTokenBridge {

    private final FirebaseInstanceId mFirebaseInstanceId;
    private final JsIOHelper mJsIOHelper;

    protected FcmTokenBridge(FirebaseInstanceId firebaseInstanceId, JsIOHelper jsIOHelper) {
        mFirebaseInstanceId = firebaseInstanceId;
        mJsIOHelper = jsIOHelper;
    }

    public FcmTokenBridge(Context context) {
        this(FirebaseInstanceId.getInstance(), new JsIOHelper(context));
    }

    public void refreshToken() {
        try {
            sendReceivedEvent();
        } catch (Exception e) {
            Log.e(LOGTAG, "Failed to refresh FCM token", e);
        }
    }

    public void invalidateToken() {
        try {
            Log.i(LOGTAG, "Manually deleting firebase token: FirebaseInstanceId=" + mFirebaseInstanceId.getId() + ", token=" + mFirebaseInstanceId.getToken());
            mFirebaseInstanceId.deleteInstanceId();
            sendReceivedEvent();
        } catch (Exception e) {
            Log.e(LOGTAG, "Failed to invalidate FCM token", e);
        }
    }

    private void sendReceivedEvent() {
        final String token = mFirebaseInstanceId.getToken();
        Log.i(LOGTAG, "Firebase has a new token: FirebaseInstanceId=" + mFirebaseInstanceId.getId() + ", token=" + token);
        mJsIOHelper.sendEventToJS(TOKEN_RECEIVED_EVENT_NAME, token);
    }
}
