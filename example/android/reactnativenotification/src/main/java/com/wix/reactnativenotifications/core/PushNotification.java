package com.wix.reactnativenotifications.core;

import android.app.Activity;
import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import static com.wix.reactnativenotifications.Defs.LOGTAG;
import static com.wix.reactnativenotifications.Defs.NOTIFICATION_OPENED_EVENT_NAME;
import static com.wix.reactnativenotifications.Defs.NOTIFICATION_RECEIVED_EVENT_NAME;

public class PushNotification {

    public static class InvalidNotificationException extends Exception {
        public InvalidNotificationException(String detailMessage) {
            super(detailMessage);
        }
    }

    private final Context mAppContext;
    private PushNotificationProps mNotificationProps;

    public PushNotification(Context context, Bundle bundle) {
        mAppContext = context.getApplicationContext();
        mNotificationProps = new PushNotificationProps(bundle);
    }

    public void onReceived() throws InvalidNotificationException {
        postNotification();
        notifyReceivedToJS();
    }

    public void onOpened(Activity hostActivity) {
        digestNotification(hostActivity);
    }

    public PushNotificationProps asProps() {
        return mNotificationProps.copy();
    }

    protected void postNotification() {
        final PendingIntent pendingIntent = getCTAPendingIntent();
        final Notification notification = buildNotification(pendingIntent);
        postNotification((int) System.currentTimeMillis(), notification);
    }

    protected void digestNotification(Activity activity) {
        final ReactContext reactContext = getRunningReactContext();
        if (reactContext != null) {
            launchOrResumeApp(activity);
            notifyOpenedToJS(reactContext);
        } else {
            InitialNotification.set(mNotificationProps);
            launchOrResumeApp(activity);
        }
    }

    protected PendingIntent getCTAPendingIntent() {
        // Note: we launch the proxy activity, assuming it'll take it from there.
        final Intent cta = new Intent(mAppContext, ProxyActivity.class);
        return NotificationIntentAdapter.createPendingNotificationIntent(mAppContext, cta, mNotificationProps);
    }

    protected Notification buildNotification(PendingIntent intent) {
        final Notification.Builder notificationBuilder = new Notification.Builder(mAppContext)
                .setContentTitle(mNotificationProps.getTitle())
                .setContentText(mNotificationProps.getBody())
                .setSmallIcon(mAppContext.getApplicationInfo().icon)
                .setContentIntent(intent)
                .setDefaults(Notification.DEFAULT_ALL)
                .setAutoCancel(true);

        return notificationBuilder.build();
    }

    protected void postNotification(int id, Notification notification) {
        final NotificationManager notificationManager = (NotificationManager) mAppContext.getSystemService(Context.NOTIFICATION_SERVICE);
        notificationManager.notify(id, notification);
    }

    protected ReactContext getRunningReactContext() {
        final ReactNativeHost rnHost = ((ReactApplication) mAppContext).getReactNativeHost();
        if (!rnHost.hasInstance()) {
            return null;
        }

        final ReactInstanceManager instanceManager = ((ReactApplication) mAppContext).getReactNativeHost().getReactInstanceManager();
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

    protected void launchOrResumeApp(Activity activity) {
        // The desired behavior upon notification opening is as follows:
        // - If app is in foreground (and possibly has several activities in stack), simply keep it as-is in foreground.
        // - If app is in background, bring it to foreground as-is (activity stack untampered).
        //   A distinction is made in this case such that if app went to back due to *back-button*, is should be recreated.
        // - If app is dead, launch it through the main activity (as Android launchers do).
        // THIS IS EXACTLY THE SAME AS ANDROID LAUNCHERS WORK. So, we use the same configuration (action, categories and
        // flags) as they do.
        final Intent helperIntent = mAppContext.getPackageManager().getLaunchIntentForPackage(mAppContext.getPackageName());
        try {
            final Intent intent = Intent.makeMainActivity(new ComponentName(mAppContext, Class.forName(helperIntent.getComponent().getClassName())));
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED);
            activity.startActivity(intent);
        } catch (ClassNotFoundException e) {
            Log.e(LOGTAG, "Failed to launch/resume app", e);
        }
    }

}
