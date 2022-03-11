package com.wix.reactnativenotifications.core.notification;

import android.os.Bundle;

public class PushNotificationProps {
    public static final int TYPE_STACK = -1000;

    protected Bundle mBundle;

    public PushNotificationProps() {
        mBundle = new Bundle();
    }

    public PushNotificationProps(String title, String body, String sound, String group, int badge) {
        mBundle = new Bundle();
        mBundle.putString("title", title);
        mBundle.putString("body", body );
        mBundle.putString("sound", sound);
        mBundle.putString("group", group);
        mBundle.putInt("badge", badge);
    }

    public PushNotificationProps(Bundle bundle) {
        mBundle = bundle;
    }

    public int getBadge() {
        if (mBundle.containsKey("badge")) {
            return Integer.parseInt(mBundle.getString("badge"));
        }
        return -1;
    }

    public String getGroup() { return mBundle.getString("group"); }

    public String getSound() { return mBundle.getString("sound"); }

    public String getUri() {
        return mBundle.getString("uri");
    }
    
    public String getTitle() {
        return getBundleStringFirstNotNull("gcm.notification.title", "title");
    }

    public String getBody() {
        return getBundleStringFirstNotNull("gcm.notification.body", "body");
    }

    public String getChannelId() {
        return getBundleStringFirstNotNull("gcm.notification.android_channel_id", "android_channel_id");
    }

    public String getBigPicture() {
        return mBundle.getString("bigPicture");
    }

    public String getLargeIcon() {
        return mBundle.getString("largeIcon");
    }

    public boolean isVisible() {
        String title = getTitle();
        String sound = getSound();
        String body = getBody();
        return  getBadge() >= 0 ||
                (title != null && !title.isEmpty()) ||
                (sound != null && !sound.isEmpty()) ||
                (body != null && !body.isEmpty());
    }

    public Bundle asBundle() {
        return (Bundle) mBundle.clone();
    }

    public boolean isFirebaseBackgroundPayload() {
        return mBundle.containsKey("google.message_id");
    }

    public boolean isDataOnlyPushNotification() {
        return getTitle() == null && getBody() == null;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder(1024);
        for (String key : mBundle.keySet()) {
            sb.append(key).append("=").append(mBundle.get(key)).append(", ");
        }
        return sb.toString();
    }

    protected PushNotificationProps copy() {
        return new PushNotificationProps((Bundle) mBundle.clone());
    }

    private String getBundleStringFirstNotNull(String key1, String key2) {
        String result = mBundle.getString(key1);
        return result == null ? mBundle.getString(key2) : result;
    }
}
