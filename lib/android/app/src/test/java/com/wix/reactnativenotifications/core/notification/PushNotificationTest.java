package com.wix.reactnativenotifications.core.notification;

import android.app.Activity;
import android.app.Notification;
import android.app.NotificationManager;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.content.res.Resources;
import android.os.Bundle;
import android.os.Message;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.JavaOnlyMap;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.wix.reactnativenotifications.core.AppLaunchHelper;
import com.wix.reactnativenotifications.core.AppLifecycleFacade;
import com.wix.reactnativenotifications.core.AppLifecycleFacade.AppVisibilityListener;
import com.wix.reactnativenotifications.core.InitialNotificationHolder;
import com.wix.reactnativenotifications.core.JsIOHelper;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.mockito.ArgumentMatcher;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.robolectric.RobolectricTestRunner;
import org.robolectric.Shadows;
import org.robolectric.shadows.ShadowNotification;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.argThat;

@RunWith(RobolectricTestRunner.class)
public class PushNotificationTest {

    private static final String NOTIFICATION_OPENED_EVENT_NAME = "notificationOpened";
    private static final String NOTIFICATION_RECEIVED_EVENT_NAME = "notificationReceived";

    private static final String DEFAULT_NOTIFICATION_TITLE = "Notification-title";
    private static final String DEFAULT_NOTIFICATION_BODY = "Notification-body";

    @Mock private ReactContext mReactContext;
    @Mock private Context mContext;
    @Mock private NotificationManager mNotificationManager;

    private Bundle mResponseBundle;
    private Bundle mNotificationBundle;
    @Mock private Intent mLaunchIntent;
    @Mock private AppLifecycleFacade mAppLifecycleFacade;
    @Mock private AppLaunchHelper mAppLaunchHelper;
    @Mock private JsIOHelper mJsIOHelper;
    @Mock private Resources mResources;
    @Mock private PackageManager mPackageManager;

    @Before
    public void setup() throws Exception {
        MockitoAnnotations.initMocks(this);
        InitialNotificationHolder.setInstance(mock(InitialNotificationHolder.class));

        mNotificationBundle = new Bundle();
        mNotificationBundle.putString("title", DEFAULT_NOTIFICATION_TITLE);
        mNotificationBundle.putString("body", DEFAULT_NOTIFICATION_BODY);

        mResponseBundle = new Bundle();
        mResponseBundle.putBundle("notification", mNotificationBundle);

        when(mAppLaunchHelper.getLaunchIntent(eq(mContext))).thenReturn(mLaunchIntent);

        ApplicationInfo ai = mock(ApplicationInfo.class);
        when(mContext.getApplicationInfo()).thenReturn(ai);
        when(mContext.getResources()).thenReturn(mResources);
        when(mContext.getPackageManager()).thenReturn(mPackageManager);
        when(mContext.getSystemService(Context.NOTIFICATION_SERVICE)).thenReturn(mNotificationManager);
    }

    @Test
    public void onOpened_noReactContext_launchApp() throws Exception {
        when(mAppLifecycleFacade.isReactInitialized()).thenReturn(false);

        final PushNotification uut = createUUT();
        uut.onOpened();

        verify(mContext).startActivity(eq(mLaunchIntent));

        // The unit shouldn't wait for visibility in this case cause we dont make the extra effort of
        // notifying the notification upon app launch completion (simply cause we dont know when in completes).
        // Instead, the user is expected to use getInitialNotification().
        verify(mAppLifecycleFacade, never()).addVisibilityListener(any(AppVisibilityListener.class));
    }

    @Test
    public void onOpened_noReactContext_setAsInitialNotification() throws Exception {
        when(mAppLifecycleFacade.isReactInitialized()).thenReturn(false);
        Activity currentActivity = mock(Activity.class);
        when(mReactContext.getCurrentActivity()).thenReturn(currentActivity);

        final PushNotification uut = createUUT();
        uut.onOpened();

        verify(InitialNotificationHolder.getInstance()).set(any(PushNotificationProps.class));
    }

    @Test
    public void onOpened_appInvisible_resumeAppWaitForVisibility() throws Exception {
        setUpBackgroundApp();

        final PushNotification uut = createUUT();
        uut.onOpened();

        verify(mContext).startActivity(any(Intent.class));
        verify(mAppLifecycleFacade).addVisibilityListener(any(AppVisibilityListener.class));
    }

    @Test
    public void onOpened_appInvisible_dontSetInitialNotification() throws Exception {
        setUpBackgroundApp();
        Activity currentActivity = mock(Activity.class);
        when(mReactContext.getCurrentActivity()).thenReturn(currentActivity);

        final PushNotification uut = createUUT();
        uut.onOpened();

        verify(InitialNotificationHolder.getInstance(), never()).set(any(PushNotificationProps.class));
    }

    @Test
    public void onOpened_appGoesVisible_resumeAppAndNotifyJs() throws Exception {

        // Arrange

        setUpBackgroundApp();

        // Act

        final PushNotification uut = createUUT();
        uut.onOpened();

        // Hijack and invoke visibility listener
        ArgumentCaptor<AppVisibilityListener> listenerCaptor = ArgumentCaptor.forClass(AppVisibilityListener.class);
        verify(mAppLifecycleFacade).addVisibilityListener(listenerCaptor.capture());
        AppVisibilityListener listener = listenerCaptor.getValue();
        listener.onAppVisible();

        // Assert

        verify(mJsIOHelper).sendEventToJS(eq(NOTIFICATION_OPENED_EVENT_NAME), argThat(new isValidResponse(mResponseBundle)), eq(mReactContext));
    }

    @Test
    public void onOpened_appVisible_notifyJS() throws Exception {
        setUpForegroundApp();

        final PushNotification uut = createUUT();
        uut.onOpened();

        verify(mContext, never()).startActivity(any(Intent.class));
        verify(mJsIOHelper).sendEventToJS(eq(NOTIFICATION_OPENED_EVENT_NAME), argThat(new isValidResponse(mResponseBundle)), eq(mReactContext));
    }

    @Test
    public void onOpened_appVisible_clearNotificationsDrawer() throws Exception {
        verify(mNotificationManager, never()).cancelAll();
        setUpForegroundApp();

        final PushNotification uut = createUUT();
        uut.onOpened();

        verify(mNotificationManager).cancelAll();
    }

    @Test
    public void onOpened_appVisible_dontSetInitialNotification() throws Exception {
        setUpForegroundApp();
        Activity currentActivity = mock(Activity.class);
        when(mReactContext.getCurrentActivity()).thenReturn(currentActivity);

        final PushNotification uut = createUUT();
        uut.onOpened();

        verify(InitialNotificationHolder.getInstance(), never()).set(any(PushNotificationProps.class));
    }

    @Test
    public void onOpened_reactInitializedWithNoActivities_setAsInitialNotification() throws Exception {
        setUpBackgroundApp();
        when(mReactContext.getCurrentActivity()).thenReturn(null); // Just for clarity

        final PushNotification uut = createUUT();
        uut.onOpened();

        verify(InitialNotificationHolder.getInstance()).set(any(PushNotificationProps.class));
    }

    @Test
    public void onReceived_validData_postNotificationAndNotifyJS() throws Exception {
        // Arrange

        setUpForegroundApp();

        // Act

        final PushNotification uut = createUUT();
        uut.onReceived();

        // Assert

        ArgumentCaptor<Notification> notificationCaptor = ArgumentCaptor.forClass(Notification.class);
        verify(mNotificationManager).notify(anyInt(), notificationCaptor.capture());
        verifyNotification(notificationCaptor.getValue());

        verify(mJsIOHelper).sendEventToJS(eq(NOTIFICATION_RECEIVED_EVENT_NAME), argThat(new isValidNotification(mNotificationBundle)), eq(mReactContext));
    }

    @Test
    public void onReceived_validDataForBackgroundApp_postNotificationAndNotifyJs() throws Exception {
        // Arrange

        setUpForegroundApp();

        // Act

        final PushNotification uut = createUUT();
        uut.onReceived();

        // Assert

        ArgumentCaptor<Notification> notificationCaptor = ArgumentCaptor.forClass(Notification.class);
        verify(mNotificationManager).notify(anyInt(), notificationCaptor.capture());
        verifyNotification(notificationCaptor.getValue());

        verify(mJsIOHelper).sendEventToJS(eq(NOTIFICATION_RECEIVED_EVENT_NAME), argThat(new isValidNotification(mNotificationBundle)), eq(mReactContext));
    }

    @Test
    public void onReceived_validDataForDeadApp_postNotificationDontNotifyJS() throws Exception {
        final PushNotification uut = createUUT();
        uut.onReceived();

        ArgumentCaptor<Notification> notificationCaptor = ArgumentCaptor.forClass(Notification.class);
        verify(mNotificationManager).notify(anyInt(), notificationCaptor.capture());
        verifyNotification(notificationCaptor.getValue());

        verify(mJsIOHelper, never()).sendEventToJS(eq(NOTIFICATION_RECEIVED_EVENT_NAME), any(Bundle.class), any(ReactContext.class));
    }

    @Test
    public void onPostRequest_withValidDataButNoId_postNotifications() throws Exception {

        // Arrange

        setUpForegroundApp();

        // Act

        final PushNotification uut = createUUT();
        uut.onPostRequest(null);

        // Assert

        ArgumentCaptor<Notification> notificationCaptor = ArgumentCaptor.forClass(Notification.class);
        verify(mNotificationManager).notify(anyInt(), notificationCaptor.capture());
        verifyNotification(notificationCaptor.getValue());

        // Shouldn't notify an event on an explicit call to notification posting
        verify(mJsIOHelper, never()).sendEventToJS(eq(NOTIFICATION_RECEIVED_EVENT_NAME), any(Bundle.class), any(ReactContext.class));
    }

    @Test
    public void onPostRequest_withValidDataButNoId_idsShouldBeUnique() throws Exception {
        createUUT().onPostRequest(null);
        createUUT().onPostRequest(null);

        ArgumentCaptor<Integer> idsCaptor = ArgumentCaptor.forClass(Integer.class);
        verify(mNotificationManager, times(2)).notify(idsCaptor.capture(), any(Notification.class));
        assertNotEquals(idsCaptor.getAllValues().get(0), idsCaptor.getAllValues().get(1));
    }

    @Test
    public void onPostRequest_withValidDataAndExplicitId_postNotification() throws Exception {
        final int id = 666;

        final PushNotification uut = createUUT();
        uut.onPostRequest(id);

        verify(mNotificationManager).notify(eq(id), any(Notification.class));
    }

    @Test
    public void onPostRequest_emptyData_postNotification() throws Exception {
        PushNotification uut = createUUT(new Bundle());
        uut.onPostRequest(null);

        verify(mNotificationManager).notify(anyInt(), any(Notification.class));
    }

    protected PushNotification createUUT() {
        return createUUT(mNotificationBundle);
    }

    protected PushNotification createUUT(Bundle bundle) {
        return new PushNotification(mContext, bundle, mAppLifecycleFacade, mAppLaunchHelper, mJsIOHelper);
    }

    protected void setUpBackgroundApp() {
        when(mAppLifecycleFacade.isReactInitialized()).thenReturn(true);
        when(mAppLifecycleFacade.getRunningReactContext()).thenReturn(mReactContext);
        when(mAppLifecycleFacade.isAppVisible()).thenReturn(false);
    }

    protected void setUpForegroundApp() {
        when(mAppLifecycleFacade.isReactInitialized()).thenReturn(true);
        when(mAppLifecycleFacade.getRunningReactContext()).thenReturn(mReactContext);
        when(mAppLifecycleFacade.isAppVisible()).thenReturn(true);
    }

    protected void verifyNotification(Notification notification) {
        ShadowNotification shadowNotification = Shadows.shadowOf(notification);
        assertEquals(shadowNotification.getContentText(), DEFAULT_NOTIFICATION_BODY);
        assertEquals(shadowNotification.getContentTitle(), DEFAULT_NOTIFICATION_TITLE);
    }

    private class isValidNotification implements ArgumentMatcher<Bundle> {
        private Bundle left;

        protected isValidNotification(Bundle left) {
            this.left = left;
        }

        @Override
        public boolean matches(Bundle right) {
            return right.getString("body").equals(left.getString("body"));
        }
    }

    private class isValidResponse implements ArgumentMatcher<Bundle> {
        private Bundle left;

        protected isValidResponse(Bundle left) {
            this.left = left;
        }

        @Override
        public boolean matches(Bundle right) {
            return right.getBundle("notification").getString("body").equals(left.getBundle("notification").getString("body"));
        }
    }
}
