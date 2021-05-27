package com.wix.reactnativenotifications.core.notification;

import java.util.ArrayList;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.service.notification.StatusBarNotification;
import android.os.Debug;
import android.util.Log;

import com.wix.reactnativenotifications.helpers.ApplicationBadgeHelper;
import com.facebook.react.bridge.ReactContext;
import com.wix.reactnativenotifications.core.AppLaunchHelper;
import com.wix.reactnativenotifications.core.AppLifecycleFacade;
import com.wix.reactnativenotifications.core.AppLifecycleFacade.AppVisibilityListener;
import com.wix.reactnativenotifications.core.AppLifecycleFacadeHolder;
import com.wix.reactnativenotifications.core.InitialNotificationHolder;
import com.wix.reactnativenotifications.core.JsIOHelper;
import com.wix.reactnativenotifications.core.NotificationIntentAdapter;
import com.wix.reactnativenotifications.core.ProxyService;
import com.wix.reactnativenotifications.core.BitmapLoader;

import static com.wix.reactnativenotifications.Defs.LOGTAG;
import static com.wix.reactnativenotifications.Defs.NOTIFICATION_OPENED_EVENT_NAME;
import static com.wix.reactnativenotifications.Defs.NOTIFICATION_RECEIVED_EVENT_NAME;
import static com.wix.reactnativenotifications.Defs.NOTIFICATION_RECEIVED_FOREGROUND_EVENT_NAME;

import android.util.Log;

public class PushNotification implements IPushNotification {

    final protected BitmapLoader mImageLoader;
    final protected Bundle mBundle;
    final protected Context mContext;
    final protected AppLifecycleFacade mAppLifecycleFacade;
    final protected AppLaunchHelper mAppLaunchHelper;
    final protected JsIOHelper mJsIOHelper;
    final protected PushNotificationProps mNotificationProps;
    final protected AppVisibilityListener mAppVisibilityListener = new AppVisibilityListener() {
        @Override
        public void onAppVisible() {
            mAppLifecycleFacade.removeVisibilityListener(this);
            dispatchImmediately();
        }

        @Override
        public void onAppNotVisible() {
        }
    };

    public static IPushNotification get(Context context, Bundle bundle) {
        Context appContext = context.getApplicationContext();
        if (appContext instanceof INotificationsApplication) {
            return ((INotificationsApplication) appContext).getPushNotification(context, bundle, AppLifecycleFacadeHolder.get(), new AppLaunchHelper());
        }
        return new PushNotification(context, bundle, AppLifecycleFacadeHolder.get(), new AppLaunchHelper(), new JsIOHelper(), new BitmapLoader(appContext));
    }

    protected PushNotification(Context context, Bundle bundle, AppLifecycleFacade appLifecycleFacade, AppLaunchHelper appLaunchHelper, JsIOHelper JsIOHelper, BitmapLoader imageLoader) {
        mContext = context;
        mBundle = bundle;
        mAppLifecycleFacade = appLifecycleFacade;
        mAppLaunchHelper = appLaunchHelper;
        mJsIOHelper = JsIOHelper;
        mNotificationProps = createProps(bundle);
        mImageLoader = imageLoader;
    }

    @Override
    public void onReceived() throws InvalidNotificationException {
        if (!mAppLifecycleFacade.isAppVisible() && mNotificationProps.isVisible()) {
            postNotification(null);
        }
        notifyReceivedToJS();
        if (mAppLifecycleFacade.isAppVisible()) {
            notifiyReceivedForegroundNotificationToJS();
        }
    }

    @Override
    public void onOpened() {
        digestNotification();
        clearAllNotifications();
    }

    @Override
    public int onPostRequest(Integer notificationId) {
        return postNotification(notificationId);
    }

    @Override
    public PushNotificationProps asProps() {
        return mNotificationProps.copy();
    }

    protected int postNotification(Integer notificationId) {
        Log.d(LOGTAG, "Posting notification...");

        final PendingIntent pendingIntent = getCTAPendingIntent();
        //final Notification notification = buildNotification(pendingIntent);
        int id = notificationId != null ? notificationId : 0;

        int badge = mNotificationProps.getBadge();
        if (badge >= 0) {
            ApplicationBadgeHelper.INSTANCE.setApplicationIconBadgeNumber(mContext, badge);
        }

        setLargeIconThenPostNotification(id, getNotificationBuilder(pendingIntent));
        return id;
    }

    protected void postNotification(int id, Notification notification) {
        final NotificationManager notificationManager = (NotificationManager) mContext.getSystemService(Context.NOTIFICATION_SERVICE);

        notificationManager.notify(mNotificationProps.getTag(), id, notification);
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

    protected PushNotificationProps createProps(Bundle bundle) {
        return new PushNotificationProps(bundle);
    }

    protected void setAsInitialNotification() {
        InitialNotificationHolder.getInstance().set(mNotificationProps);
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
        return getNotificationBuilder(intent).build();
    }

    protected void setLargeIconThenPostNotification(final int notificationId, final Notification.Builder notificationBuilder) {
        final String icon = mNotificationProps.getLargeIcon();

        if (icon != null && (icon.startsWith("http://") || icon.startsWith("https://") || icon.startsWith("file://"))) {
            mImageLoader.loadUri(Uri.parse(icon), new BitmapLoader.OnBitmapLoadedCallback() {
                @Override
                public void onBitmapLoaded(Bitmap bitmap) {
                    notificationBuilder.setLargeIcon(bitmap);
                    setBigPictureThenPostNotification(notificationId, notificationBuilder);
                }
            });
        } else {
            if (icon != null) {
                final int id = mContext.getResources().getIdentifier(icon, "drawable", mContext.getPackageName());
                final Bitmap bitmap = id != 0 ? BitmapFactory.decodeResource(mContext.getResources(), id) : null;

                if (bitmap != null) {
                    notificationBuilder.setLargeIcon(bitmap);
                }
            }

            setBigPictureThenPostNotification(notificationId, notificationBuilder);
        }
    }

    protected void setBigPictureThenPostNotification(final int notificationId, final Notification.Builder notificationBuilder) {
        final String bigPicture = mNotificationProps.getBigPicture();

        if (bigPicture != null && (bigPicture.startsWith("http://") || bigPicture.startsWith("https://") || bigPicture.startsWith("file://"))) {
            mImageLoader.loadUri(Uri.parse(bigPicture), new BitmapLoader.OnBitmapLoadedCallback() {
                @Override
                public void onBitmapLoaded(Bitmap bitmap) {
                    notificationBuilder.setStyle(new Notification.BigPictureStyle().bigPicture(bitmap).setSummaryText(mNotificationProps.getBody()));
                    postNotification(notificationId, notificationBuilder.build());
                }
            });
        } else {
            postNotification(notificationId, notificationBuilder.build());
        }
    }

    protected Notification.Builder getNotificationBuilder(PendingIntent intent) {
        Resources res = mContext.getResources();
        String packageName = mContext.getPackageName();

        Uri soundUri = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);
        String soundName = mNotificationProps.getSound();

        if (soundName != null) {
            if (!"default".equalsIgnoreCase(soundName)) {
                // sound name can be full filename, or just the resource name.
                // So the strings 'my_sound.mp3' AND 'my_sound' are accepted
                // The reason is to make the iOS and android javascript interfaces compatible
                int resId;
                if (res.getIdentifier(soundName, "raw", packageName) != 0) {
                    resId = res.getIdentifier(soundName, "raw", packageName);
                } else {
                    resId = res.getIdentifier(soundName.substring(0, soundName.lastIndexOf('.')), "raw", packageName);
                }

                soundUri = Uri.parse("android.resource://" + packageName + "/" + resId);
            }
        }


        int smallIconResId = getSmallIconResId();

        String title = mNotificationProps.getTitle();
        if (title == null) {
            ApplicationInfo appInfo = mContext.getApplicationInfo();
            title = mContext.getPackageManager().getApplicationLabel(appInfo).toString();
        }


        Notification.Builder notificationBuilder = new Notification.Builder(mContext)
            .setContentTitle(title)
            .setContentText(mNotificationProps.getBody())
            .setPriority(Notification.PRIORITY_HIGH)
            .setContentIntent(intent)
            .setSmallIcon(smallIconResId)
            .setSound(soundUri)
            .setDefaults(Notification.DEFAULT_ALL)
            .setAutoCancel(true);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            String CHANNEL_ID = "channel_01";
            String CHANNEL_NAME = "Channel Name";
            NotificationChannel channel = new NotificationChannel(CHANNEL_ID,
                                                                  CHANNEL_NAME,
                                                                  NotificationManager.IMPORTANCE_DEFAULT);
            final NotificationManager notificationManager = (NotificationManager) mContext.getSystemService(Context.NOTIFICATION_SERVICE);
            notificationManager.createNotificationChannel(channel);
            notificationBuilder.setChannelId(CHANNEL_ID);
        }

        return notificationBuilder;
    }

    private int getSmallIconResId()
    {
        int smallIconResId;
        Resources res = mContext.getResources();
        String packageName = mContext.getPackageName();

        String smallIcon = mBundle.getString("smallIcon");

        if (smallIcon != null) {
            smallIconResId = res.getIdentifier(smallIcon, "mipmap", packageName);
        } else {
            smallIconResId = res.getIdentifier("@drawable/ic_stat_name", "mipmap", packageName);
        }

        if (smallIconResId == 0) {
            smallIconResId = res.getIdentifier("ic_launcher", "mipmap", packageName);

            if (smallIconResId == 0) {
                smallIconResId = android.R.drawable.ic_dialog_info;
            }
        }

        return smallIconResId;
    }

    protected void clearAllNotifications() {
        final NotificationManager notificationManager = (NotificationManager) mContext.getSystemService(Context.NOTIFICATION_SERVICE);
        notificationManager.cancelAll();
    }

    protected int createNotificationId() {
        return (int) System.nanoTime();
    }

    private void notifyReceivedToJS() {
        mJsIOHelper.sendEventToJS(NOTIFICATION_RECEIVED_EVENT_NAME, mNotificationProps.asBundle(), mAppLifecycleFacade.getRunningReactContext());
    }

    private void notifiyReceivedForegroundNotificationToJS() {
        mJsIOHelper.sendEventToJS(NOTIFICATION_RECEIVED_FOREGROUND_EVENT_NAME, mNotificationProps.asBundle(), mAppLifecycleFacade.getRunningReactContext());
    }

    private void notifyOpenedToJS() {
        mJsIOHelper.sendEventToJS(NOTIFICATION_OPENED_EVENT_NAME, mNotificationProps.asBundle(), mAppLifecycleFacade.getRunningReactContext());
    }

    protected void launchOrResumeApp() {
        final Intent intent = mAppLaunchHelper.getLaunchIntent(mContext);
        mContext.startActivity(intent);
    }
}
