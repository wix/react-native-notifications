package com.wix.reactnativenotifications.core.notifications;

import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.support.annotation.Nullable;

import com.google.firebase.messaging.RemoteMessage;

import java.util.Map;

public class NotificationProps {

    // Local & remote (Firebase) support

    private static final String TITLE = "title";
    private static final String BODY = "body";
    private static final String ICON = "icon";
    private static final String SOUND = "sound";
    private static final String TAG = "tag";
    private static final String COLOR = "color";

    private static final String DATA = "data";

    // Local-only support

    private static final String LARGE_ICON = "largeIcon"; // Drawable name or URL
    private static final String LIGHTS_COLOR = "lightsColor";
    private static final String LIGHTS_ON_MS = "lightsOnMs";
    private static final String LIGHTS_OFF_MS = "lightsOffMs";

    public static NotificationProps fromRemoteMessage(Context context, RemoteMessage remoteMessage) {
        final Bundle properties = new Bundle();
        final RemoteMessage.Notification notification = remoteMessage.getNotification();

        if (notification != null) {
            properties.putString(TITLE, notification.getTitle());
            properties.putString(BODY, notification.getBody());
            properties.putString(ICON, notification.getIcon());
            properties.putString(SOUND, notification.getSound());
            properties.putString(TAG, notification.getTag());
            properties.putString(COLOR, notification.getColor());
        }

        final Map<String, String> data = remoteMessage.getData();

        if (data != null) {
            final Bundle dataBundle = new Bundle();

            for (final Map.Entry<String, String> entry : data.entrySet()) {
                dataBundle.putString(entry.getKey(), entry.getValue());
            }

            properties.putBundle(DATA, dataBundle);
        }

        return new NotificationProps(context, properties);
    }

    public static NotificationProps fromBundle(Context context, Bundle bundle) {
        return new NotificationProps(context, new Bundle(bundle));
    }

    public static NotificationProps fromBackgroundPushNotificationIntent(Context context, Intent intent) {
        // The types of values in the extras are not guaranteed. Rather than mess around inspecting
        // Object types, we'll just copy extras twice and remove via whitelists/blacklists.

        final Bundle properties = new Bundle(intent.getExtras());
        final Bundle data = new Bundle(intent.getExtras());

        for (final String key : intent.getExtras().keySet()) {
            if (key.equals(IntentExtras.FCM_COLLAPSE_KEY) || key.equals(IntentExtras.FCM_FROM) || key.startsWith(IntentExtras.FCM_PREFIX)) {
                data.remove(key);
            } else {
                properties.remove(key);
            }
        }

        properties.putBundle(DATA, data);

        return new NotificationProps(context, properties);
    }

    private Context mContext;
    private Bundle mProperties;

    protected NotificationProps(Context context, Bundle properties) {
        mContext = context;
        mProperties = properties;
    }

    @Nullable
    public String getTitle() {
        return mProperties.getString(TITLE);
    }

    @Nullable
    public String getBody() {
        return mProperties.getString(BODY);
    }

    @Nullable
    public Integer getIcon() {
        return drawableIdFromString(mProperties.getString(ICON));
    }

    @Nullable
    public Uri getSound() {
        return rawResourceUriFromString(mProperties.getString(SOUND));
    }

    @Nullable
    public String getTag() {
        return mProperties.getString(TAG);
    }

    @Nullable
    public Integer getColor() {
        return colorFromString(mProperties.getString(COLOR));
    }

    @Nullable
    public String getLargeIcon() {
        return mProperties.getString(LARGE_ICON);
    }

    @Nullable
    public Integer getLightsColor() {
        return colorFromString(mProperties.getString(LIGHTS_COLOR));
    }

    @Nullable
    public Integer getLightsOnMs() {
        return getInteger(LIGHTS_ON_MS);
    }

    @Nullable
    public Integer getLightsOffMs() {
        return getInteger(LIGHTS_OFF_MS);
    }

    @Nullable
    public Bundle getData() {
        return mProperties.getBundle(DATA);
    }

    public Bundle asBundle() {
        return new Bundle(mProperties);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder(1024);
        for (String key : mProperties.keySet()) {
            sb.append(key).append("=").append(mProperties.get(key)).append(", ");
        }
        return sb.toString();
    }

    @Nullable
    private Integer getInteger(String key) {
        final Object object = mProperties.get(key);

        if (object instanceof Number) {
            return ((Number) object).intValue();
        }

        return integerFromString(mProperties.getString(key));
    }

    @Nullable
    private Integer integerFromString(String string) {
        if (string != null) {
            try {
                return Integer.parseInt(string);
            } catch (NumberFormatException e) {
                // Move on
            }
        }

        return null;
    }

    @Nullable
    private Integer colorFromString(String string) {
        if (string != null) {
            try {
                return Color.parseColor(string);
            } catch (IllegalArgumentException e) {
                // Move on
            }
        }

        return null;
    }

    @Nullable
    private Integer drawableIdFromString(String string) {
        if (string != null) {
            int id = mContext.getResources().getIdentifier(string, "drawable", mContext.getPackageName());

            if (id != 0) {
                return id;
            }
        }

        return null;
    }

    @Nullable
    private Uri rawResourceUriFromString(String string) {
        return string != null ? Uri.parse("android.resource://" + mContext.getPackageName() + "/raw/" + string) : null;
    }
}
