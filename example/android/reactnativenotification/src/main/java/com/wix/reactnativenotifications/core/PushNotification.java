package com.wix.reactnativenotifications.core;

import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.wix.reactnativenotifications.core.AppLifecycleFacade.AppVisibilityListener;

import static com.wix.reactnativenotifications.Defs.NOTIFICATION_OPENED_EVENT_NAME;
import static com.wix.reactnativenotifications.Defs.NOTIFICATION_RECEIVED_EVENT_NAME;

public class PushNotification implements IPushNotification {

    final private Context mContext;
    final private AppLifecycleFacade mAppLifecycleFacade;
    final private PushNotificationProps mNotificationProps;
    final private AppVisibilityListener mAppVisibilityListener = new AppVisibilityListener() {
        @Override
        public void onAppVisible() {
            mAppLifecycleFacade.removeVisibilityListener(this);
            dispatchImmediately();
        }

        @Override
        public void onAppNotVisible() {}
    };

    protected PushNotification(Context context, Bundle bundle, AppLifecycleFacade appLifecycleFacade) {
        mContext = context;
        mAppLifecycleFacade = appLifecycleFacade;
        mNotificationProps = new PushNotificationProps(bundle);
    }

    public static IPushNotification get(Context context, Bundle bundle, AppLifecycleFacade facade) {
        Context appContext = context.getApplicationContext();
        if (appContext instanceof INotificationsApplication) {
            return ((INotificationsApplication) appContext).getPushNotification(context, bundle, facade);
        }
        return new PushNotification(context, bundle, facade);
    }

    @Override
    public void onReceived() throws InvalidNotificationException {
        postNotification();
        notifyReceivedToJS();
    }

    @Override
    public void onOpened() {
        digestNotification();
        PushNotificationsDrawer.get(mContext).onNotificationOpened();
    }

    @Override
    public PushNotificationProps asProps() {
        return mNotificationProps.copy();
    }

    protected void postNotification() {
        final PendingIntent pendingIntent = getCTAPendingIntent();
        final Notification notification = buildNotification(pendingIntent);
        postNotification((int) System.currentTimeMillis(), notification);
    }

    protected void digestNotification() {
        if (!mAppLifecycleFacade.isReactInitialized()) {
            setAsInitialNotification();
            launchOrResumeApp();
            return;
        }

        if (mAppLifecycleFacade.isAppVisible()) {
            dispatchImmediately();
        } else {
            dispatchUponVisibility();
        }
    }

    protected void setAsInitialNotification() {
        InitialNotification.set(mNotificationProps);
    }

    protected void dispatchImmediately() {
        notifyOpenedToJS();
    }

    protected void dispatchUponVisibility() {
        mAppLifecycleFacade.addVisibilityListener(getIntermediateAppVisibilityListener());

        // Make the app visible so that we'll dispatch the notification opening when visibility changes to 'true' (see
        // above listener registration).
        launchOrResumeApp();
    }

    protected AppVisibilityListener getIntermediateAppVisibilityListener() {
        return mAppVisibilityListener;
    }

    protected PendingIntent getCTAPendingIntent() {
        final Intent cta = new Intent(mContext, ProxyService.class);
        return NotificationIntentAdapter.createPendingNotificationIntent(mContext, cta, mNotificationProps);
    }

    protected Notification buildNotification(PendingIntent intent) {
        final Notification.Builder notificationBuilder = new Notification.Builder(mContext)
                .setContentTitle(mNotificationProps.getTitle())
                .setContentText(mNotificationProps.getBody())
                .setSmallIcon(mContext.getApplicationInfo().icon)
                .setContentIntent(intent)
                .setDefaults(Notification.DEFAULT_ALL)
                .setAutoCancel(true);

        return notificationBuilder.build();
    }

    protected void postNotification(int id, Notification notification) {
        final NotificationManager notificationManager = (NotificationManager) mContext.getSystemService(Context.NOTIFICATION_SERVICE);
        notificationManager.notify(id, notification);
    }

    protected ReactContext getRunningReactContext() {
        final ReactNativeHost rnHost = ((ReactApplication) mContext.getApplicationContext()).getReactNativeHost();
        if (!rnHost.hasInstance()) {
            return null;
        }

        final ReactInstanceManager instanceManager = rnHost.getReactInstanceManager();
        final ReactContext reactContext = instanceManager.getCurrentReactContext();
        if (reactContext == null || !reactContext.hasActiveCatalystInstance()) {
            return null;
        }

        return reactContext;
    }

    private void notifyReceivedToJS() {
        notifyJS(NOTIFICATION_RECEIVED_EVENT_NAME, null);
    }

    private void notifyOpenedToJS() {
        notifyOpenedToJS(null);
    }

    private void notifyOpenedToJS(ReactContext reactContext) {
        notifyJS(NOTIFICATION_OPENED_EVENT_NAME, reactContext);
    }

    private void notifyJS(String eventName, ReactContext reactContext) {
        if (reactContext == null) {
            reactContext = getRunningReactContext();
        }

        if (reactContext != null) {
            final WritableMap notificationAsMap = Arguments.fromBundle(mNotificationProps.asBundle());
            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, notificationAsMap);
        }
    }

    protected void launchOrResumeApp() {
        final Intent intent = AppLaunchHelper.getLaunchIntent(mContext);
        mContext.startActivity(intent);
    }
}
