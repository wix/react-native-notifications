package com.wix.reactnativenotifications.core.notifications;

import android.content.Context;
import android.os.Bundle;

import com.wix.reactnativenotifications.core.JsIOHelper;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.robolectric.RobolectricTestRunner;

import static com.wix.reactnativenotifications.Defs.NOTIFICATION_RECEIVED_EVENT_NAME;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(RobolectricTestRunner.class)
public class RemoteNotificationTest {

    private static final String DEFAULT_NOTIFICATION_TITLE = "Notification-title";
    private static final String DEFAULT_NOTIFICATION_BODY = "Notification-body";

    @Mock private Context mContext;

    @Mock private Bundle mDefaultBundle;
    @Mock private JsIOHelper mJsIOHelper;

    @Before
    public void setup() throws Exception {
        MockitoAnnotations.initMocks(this);

        when(mDefaultBundle.getString(eq("title"))).thenReturn(DEFAULT_NOTIFICATION_TITLE);
        when(mDefaultBundle.getString(eq("body"))).thenReturn(DEFAULT_NOTIFICATION_BODY);
        when(mDefaultBundle.clone()).thenReturn(mDefaultBundle);
    }

    @Test
    public void onReceived_validData_postNotificationAndNotifyJS() throws Exception {
        // Act

        final RemoteNotification uut = createUUT();
        uut.onReceived();

        // Assert

        verify(mJsIOHelper).sendEventToJS(eq(NOTIFICATION_RECEIVED_EVENT_NAME), eq(mDefaultBundle));
    }

    protected RemoteNotification createUUT() {
        return createUUT(mDefaultBundle);
    }

    protected RemoteNotification createUUT(Bundle bundle) {
        final NotificationProps notificationProps = new NotificationProps(mContext, bundle);
        return new RemoteNotification(notificationProps, mJsIOHelper);
    }
}
