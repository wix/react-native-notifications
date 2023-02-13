package com.wix.reactnativenotifications;

import android.app.Activity;
import android.app.Application;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.google.firebase.FirebaseApp;
import com.wix.reactnativenotifications.core.AppLifecycleFacade;
import com.wix.reactnativenotifications.core.AppLifecycleFacadeHolder;
import com.wix.reactnativenotifications.core.InitialNotificationHolder;
import com.wix.reactnativenotifications.core.NotificationIntentAdapter;
import com.wix.reactnativenotifications.core.notification.IPushNotification;
import com.wix.reactnativenotifications.core.notification.PushNotification;
import com.wix.reactnativenotifications.core.notificationdrawer.IPushNotificationsDrawer;
import com.wix.reactnativenotifications.core.notificationdrawer.PushNotificationsDrawer;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class RNNotificationsPackage implements ReactPackage, AppLifecycleFacade.AppVisibilityListener, Application.ActivityLifecycleCallbacks {

    private final Application mApplication;

    public RNNotificationsPackage(Application application) {
        mApplication = application;
        FirebaseApp.initializeApp(application.getApplicationContext());

        AppLifecycleFacadeHolder.get().addVisibilityListener(this);
        application.registerActivityLifecycleCallbacks(this);
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Arrays.<NativeModule>asList(new RNNotificationsModule(mApplication, reactContext));
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    public void onAppVisible() {
        final IPushNotificationsDrawer notificationsDrawer = PushNotificationsDrawer.get(mApplication.getApplicationContext());
        notificationsDrawer.onAppVisible();
    }

    @Override
    public void onAppNotVisible() {
    }

    @Override
    public void onActivityCreated(Activity activity, Bundle savedInstanceState) {
        final IPushNotificationsDrawer notificationsDrawer = PushNotificationsDrawer.get(mApplication.getApplicationContext());
        notificationsDrawer.onNewActivity(activity);

        callOnOpenedIfNeed(activity);
    }

    @Override
    public void onActivityStarted(Activity activity) {
        if (InitialNotificationHolder.getInstance().get() == null) {
            callOnOpenedIfNeed(activity);
        }
    }

    @Override
    public void onActivityResumed(Activity activity) {
    }

    @Override
    public void onActivityPaused(Activity activity) {
    }

    @Override
    public void onActivityStopped(Activity activity) {
    }

    @Override
    public void onActivitySaveInstanceState(Activity activity, Bundle outState) {
    }

    @Override
    public void onActivityDestroyed(Activity activity) {
    }

    private void callOnOpenedIfNeed(Activity activity) {
        Intent intent = activity.getIntent();
        if (NotificationIntentAdapter.canHandleIntent(intent)) {
            Context appContext = mApplication.getApplicationContext();
            Bundle notificationData = intent.getExtras();
            final IPushNotification pushNotification = PushNotification.get(appContext, notificationData);
            if (pushNotification != null) {
                pushNotification.onOpened();
            }
        }
    }
}
