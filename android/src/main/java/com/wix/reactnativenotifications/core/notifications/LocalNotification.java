package com.wix.reactnativenotifications.core.notifications;

import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.Build;
import android.util.Log;

import com.facebook.react.bridge.ReactContext;
import com.wix.reactnativenotifications.core.AppLaunchHelper;
import com.wix.reactnativenotifications.core.AppLifecycleFacade;
import com.wix.reactnativenotifications.core.AppLifecycleFacade.AppVisibilityListener;
import com.wix.reactnativenotifications.core.AppLifecycleFacadeHolder;
import com.wix.reactnativenotifications.core.InitialNotificationHolder;
import com.wix.reactnativenotifications.core.JsIOHelper;
import com.wix.reactnativenotifications.core.NotificationIntentAdapter;
import com.wix.reactnativenotifications.core.ProxyService;

import static com.wix.reactnativenotifications.Defs.LOGTAG;
import static com.wix.reactnativenotifications.Defs.NOTIFICATION_OPENED_EVENT_NAME;

public class LocalNotification implements ILocalNotification {

    private final Context mContext;
    private final NotificationProps mNotificationProps;
    private final AppLifecycleFacade mAppLifecycleFacade;
    private final AppLaunchHelper mAppLaunchHelper;
    private final JsIOHelper mJsIOHelper;
    private final AppVisibilityListener mAppVisibilityListener = new AppVisibilityListener() {

        @Override
        public void onAppVisible() {
            mAppLifecycleFacade.removeVisibilityListener(this);
            dispatchImmediately();
        }

        @Override
        public void onAppNotVisible() {
        }
    };

    public static ILocalNotification get(Context context, NotificationProps localNotificationProps) {
        final AppLifecycleFacade appLifecycleFacade = AppLifecycleFacadeHolder.get();
        final AppLaunchHelper appLaunchHelper = new AppLaunchHelper();
        final Context appContext = context.getApplicationContext();

        if (appContext instanceof INotificationsApplication) {
            return ((INotificationsApplication) appContext).getLocalNotification(context, localNotificationProps, AppLifecycleFacadeHolder.get(), new AppLaunchHelper());
        }

        return new LocalNotification(context, localNotificationProps, appLifecycleFacade, appLaunchHelper);
    }

    protected LocalNotification(Context context, NotificationProps localNotificationProps, AppLifecycleFacade appLifecycleFacade, AppLaunchHelper appLaunchHelper, JsIOHelper jsIOHelper) {
        mContext = context;
        mNotificationProps = localNotificationProps;
        mAppLifecycleFacade = appLifecycleFacade;
        mAppLaunchHelper = appLaunchHelper;
        mJsIOHelper = jsIOHelper;
    }

    protected LocalNotification(Context context, NotificationProps localNotificationProps, AppLifecycleFacade appLifecycleFacade, AppLaunchHelper appLaunchHelper) {
        this(context, localNotificationProps, appLifecycleFacade, appLaunchHelper, new JsIOHelper(context));
    }

    @Override
    public int post(Integer notificationId) {
        final PendingIntent pendingIntent = getCTAPendingIntent();
        final int id = notificationId != null ? notificationId : createNotificationId();
        postNotification(id, getNotificationBuilder(pendingIntent).build());
        return id;
    }

    @Override
    public void onOpened() {
        digestNotification();
    }

    protected void digestNotification() {
        if (!mAppLifecycleFacade.isReactInitialized()) {
            setAsInitialNotification();
            launchOrResumeApp();
            return;
        }

        final ReactContext reactContext = mAppLifecycleFacade.getRunningReactContext();
        if (reactContext.getCurrentActivity() == null) {
            setAsInitialNotification();
        }

        if (mAppLifecycleFacade.isAppVisible()) {
            dispatchImmediately();
        } else {
            dispatchUponVisibility();
        }
    }

    protected void setAsInitialNotification() {
        InitialNotificationHolder.getInstance().set(mNotificationProps);
    }

    protected void dispatchImmediately() {
        sendOpenedEvent();
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

    protected Notification.Builder getNotificationBuilder(PendingIntent intent) {
        final Integer icon = mNotificationProps.getIcon();
        final Integer color = mNotificationProps.getColor();

        final Notification.Builder builder = new Notification.Builder(mContext)
                .setContentTitle(mNotificationProps.getTitle())
                .setContentText(mNotificationProps.getBody())
                .setSmallIcon(icon != null ? icon : mContext.getApplicationContext().getApplicationInfo().icon)
                .setSound(mNotificationProps.getSound())
                .setContentIntent(intent)
                .setDefaults(Notification.DEFAULT_ALL)
                .setAutoCancel(true);

        if (color != null && Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            builder.setColor(color);
        }

        return builder;
    }

    protected void postNotification(int id, Notification notification) {
        final NotificationManager notificationManager = (NotificationManager) mContext.getSystemService(Context.NOTIFICATION_SERVICE);
        notificationManager.notify(mNotificationProps.getTag(), id, notification);
    }

    protected int createNotificationId() {
        return mNotificationProps.getTag() != null ? 0 : (int) System.nanoTime();
    }

    protected void launchOrResumeApp() {
        final Intent intent = mAppLaunchHelper.getLaunchIntent(mContext);
        mContext.startActivity(intent);
    }

    private void sendOpenedEvent() {
        mJsIOHelper.sendEventToJS(NOTIFICATION_OPENED_EVENT_NAME, mNotificationProps.asBundle());
    }
}
