package com.wix.reactnativenotifications.core.notificationdrawer;

import android.app.NotificationManager;
import android.content.Context;

import com.facebook.react.bridge.ReactContext;
import com.wix.reactnativenotifications.core.AppLaunchHelper;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.robolectric.RobolectricTestRunner;

import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(RobolectricTestRunner.class)
public class PushNotificationsDrawerTest {

    @Mock private ReactContext mReactContext;
    @Mock private Context mContext;
    @Mock private NotificationManager mNotificationManager;
    @Mock private AppLaunchHelper mAppLaunchHelper;

    @Before
    public void setup() throws Exception {
        MockitoAnnotations.initMocks(this);

        when(mContext.getSystemService(Context.NOTIFICATION_SERVICE)).thenReturn(mNotificationManager);
    }

    @Test
    public void onAppInit_clearAllNotifications() throws Exception {
        createUUT().onAppInit();
        verify(mNotificationManager).cancelAll();
    }

    @Test
    public void onAppVisible_clearAllNotifications() throws Exception {
        createUUT().onAppVisible();
        verify(mNotificationManager).cancelAll();
    }

    @Test
    public void onNotificationOpened_clearAllNotifications() throws Exception {
        createUUT().onNotificationOpened();
        verify(mNotificationManager).cancelAll();
    }

    @Test
    public void onNotificationClearRequest_clearSpecificNotification() throws Exception {
        createUUT().onNotificationClearRequest(666);
        verify(mNotificationManager).cancel(eq(666));
        verify(mNotificationManager, never()).cancelAll();
    }

    protected PushNotificationsDrawer createUUT() {
        return new PushNotificationsDrawer(mContext, mAppLaunchHelper);
    }
}
