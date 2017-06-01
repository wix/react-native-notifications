package com.wix.reactnativenotifications.fcm;

import android.content.Context;
import android.os.Bundle;

import com.google.firebase.iid.FirebaseInstanceId;
import com.wix.reactnativenotifications.core.JsIOHelper;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.robolectric.RobolectricTestRunner;

import static com.wix.reactnativenotifications.Defs.TOKEN_RECEIVED_EVENT_NAME;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(RobolectricTestRunner.class)
public class FcmTokenBridgeTest {

    private static final String DEFAULT_NOTIFICATION_TITLE = "Notification-title";
    private static final String DEFAULT_NOTIFICATION_BODY = "Notification-body";

    @Mock private Context mContext;

    @Mock private Bundle mDefaultBundle;
    @Mock private FirebaseInstanceId mFirebaseInstanceId;
    @Mock private JsIOHelper mJsIOHelper;

    @Before
    public void setup() throws Exception {
        MockitoAnnotations.initMocks(this);

        when(mDefaultBundle.getString(eq("title"))).thenReturn(DEFAULT_NOTIFICATION_TITLE);
        when(mDefaultBundle.getString(eq("body"))).thenReturn(DEFAULT_NOTIFICATION_BODY);
        when(mDefaultBundle.clone()).thenReturn(mDefaultBundle);
    }

    @Test
    public void refreshToken_notifyJs() throws Exception {
        // Act

        final FcmTokenBridge uut = createUUT();
        uut.refreshToken();

        // Assert

        verify(mJsIOHelper).sendEventToJS(eq(TOKEN_RECEIVED_EVENT_NAME), eq(mDefaultBundle));
    }

    protected FcmTokenBridge createUUT() {
        return new FcmTokenBridge(mFirebaseInstanceId, mJsIOHelper);
    }
}
