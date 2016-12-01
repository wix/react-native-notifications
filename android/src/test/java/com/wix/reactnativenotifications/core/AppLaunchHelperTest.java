package com.wix.reactnativenotifications.core;

import android.app.Activity;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.robolectric.RobolectricTestRunner;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@RunWith(RobolectricTestRunner.class)
public class AppLaunchHelperTest {

    private static final String LAUNCHED_FROM_NOTIF_BOOLEAN_EXTRA_NAME = "launchedFromNotification";

    static class ActivityMock extends Activity {
    }

    private final String APP_PACKAGE_NAME = "the.package";
    private final String APP_MAIN_ACTIVITY_NAME = ActivityMock.class.getName();

    @Mock private Context mContext;
    @Mock private PackageManager mPackageManager;


    @Before
    public void setup() throws Exception {
        MockitoAnnotations.initMocks(this);
        when(mContext.getApplicationContext()).thenReturn(mContext);
        when(mContext.getPackageManager()).thenReturn(mPackageManager);
        when(mContext.getPackageName()).thenReturn(APP_PACKAGE_NAME);

        // Set-up the intent (mock) returned by the SDK for getLaunchIntentForPackage()
        Intent intent = mock(Intent.class);
        when(intent.getComponent()).thenReturn(new ComponentName(APP_PACKAGE_NAME, APP_MAIN_ACTIVITY_NAME));
        when(mPackageManager.getLaunchIntentForPackage(eq(APP_PACKAGE_NAME))).thenReturn(intent);
    }

    @Test
    public void getLaunchIntent__returnsCustomIntentWithNotifFlagExtra() throws Exception {
        final AppLaunchHelper uut = getUUT();
        Intent intent = uut.getLaunchIntent(mContext);

        assertNotNull(intent);
        assertEquals(APP_PACKAGE_NAME, intent.getComponent().getPackageName());
        assertEquals(APP_MAIN_ACTIVITY_NAME, intent.getComponent().getClassName());
        assertEquals(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED, intent.getFlags());
        assertTrue(intent.getBooleanExtra(LAUNCHED_FROM_NOTIF_BOOLEAN_EXTRA_NAME, false));
    }

    @Test
    public void isLaunchIntentsActivity_activityIsMainLauncherActivity_returnTrue() throws Exception {
        Activity activity = getActivityMock(APP_MAIN_ACTIVITY_NAME);

        final AppLaunchHelper uut = getUUT();
        boolean result = uut.isLaunchIntentsActivity(activity);

        assertTrue(result);
    }

    @Test
    public void isLaunchIntentsActivity_activityIsNotMainActivity_returnFalse() throws Exception {
        Activity activity = getActivityMock("other.activity");

        final AppLaunchHelper uut = getUUT();
        boolean result = uut.isLaunchIntentsActivity(activity);

        assertFalse(result);
    }

    @Test
    public void isLaunchIntentOfNotification_hasFlagInBundle_returnTrue() throws Exception {
        Intent intent = mock(Intent.class);
        when(intent.getBooleanExtra(eq(LAUNCHED_FROM_NOTIF_BOOLEAN_EXTRA_NAME), eq(false))).thenReturn(true);

        final AppLaunchHelper uut = getUUT();
        boolean result = uut.isLaunchIntentOfNotification(intent);

        assertTrue(result);
    }

    @Test
    public void isLaunchIntentOfNotification_noFlagInBundle_returnFalse() throws Exception {
        Intent intent = mock(Intent.class);

        final AppLaunchHelper uut = getUUT();
        boolean result = uut.isLaunchIntentOfNotification(intent);

        assertFalse(result);
    }

    protected Activity getActivityMock(String activityClassName) {
        Activity activity = mock(Activity.class);
        when(activity.getPackageManager()).thenReturn(mPackageManager);
        when(activity.getPackageName()).thenReturn(APP_PACKAGE_NAME);
        when(activity.getComponentName()).thenReturn(new ComponentName(APP_PACKAGE_NAME, activityClassName));
        when(activity.getLocalClassName()).thenReturn(activityClassName);
        return activity;
    }

    private AppLaunchHelper getUUT() {
        return new AppLaunchHelper();
    }
}