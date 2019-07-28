package com.wix.reactnativenotifications.core.notificationdrawer;

import android.app.Activity;
import android.app.NotificationManager;
import android.content.Context;
import android.content.Intent;

import com.facebook.react.bridge.ReactContext;
import com.wix.reactnativenotifications.core.AppLaunchHelper;
import com.wix.reactnativenotifications.core.InitialNotificationHolder;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.robolectric.RobolectricTestRunner;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.mock;
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

        InitialNotificationHolder.setInstance(mock(InitialNotificationHolder.class));
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
    public void onNotificationClearRequest_clearSpecificNotification() throws Exception {
        createUUT().onNotificationClearRequest(666);
        verify(mNotificationManager).cancel(eq(666));
        verify(mNotificationManager, never()).cancelAll();
    }

    @Test
    public void onNewActivity_activityIsTheOneLaunchedByNotifs_clearInitialNotification() throws Exception {
        verify(InitialNotificationHolder.getInstance(), never()).clear();

        Activity activity = mock(Activity.class);
        Intent intent = mock(Intent.class);
        when(activity.getIntent()).thenReturn(intent);
        when(mAppLaunchHelper.isLaunchIntentsActivity(activity)).thenReturn(true);
        when(mAppLaunchHelper.isLaunchIntentOfNotification(any(Intent.class))).thenReturn(false);

        createUUT().onNewActivity(activity);

        verify(InitialNotificationHolder.getInstance()).clear();
    }

    @Test
    public void onNewActivity_activityIsNotTheOneLaunchedByNotifs_dontClearInitialNotification() throws Exception {
        Activity activity = mock(Activity.class);
        Intent intent = mock(Intent.class);
        when(activity.getIntent()).thenReturn(intent);
        when(mAppLaunchHelper.isLaunchIntentsActivity(activity)).thenReturn(false);
        when(mAppLaunchHelper.isLaunchIntentOfNotification(any(Intent.class))).thenReturn(false);

        createUUT().onNewActivity(activity);

        verify(InitialNotificationHolder.getInstance(), never()).clear();
    }

    @Test
    public void onNewActivity_activityLaunchedFromPushNotification_dontClearInitialNotification() throws Exception {
        Activity activity = mock(Activity.class);
        Intent intent = mock(Intent.class);
        when(activity.getIntent()).thenReturn(intent);
        when(mAppLaunchHelper.isLaunchIntentsActivity(activity)).thenReturn(true);
        when(mAppLaunchHelper.isLaunchIntentOfNotification(eq(intent))).thenReturn(true);

        createUUT().onNewActivity(activity);

        verify(InitialNotificationHolder.getInstance(), never()).clear();
    }

    protected PushNotificationsDrawer createUUT() {
        return new PushNotificationsDrawer(mContext, mAppLaunchHelper);
    }
}
