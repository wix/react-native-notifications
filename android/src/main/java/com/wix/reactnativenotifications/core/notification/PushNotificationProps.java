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
        mBundle.putString("body", body);
        mBundle.putString("sound", sound);
        mBundle.putString("group", group);
        mBundle.putInt("badge", badge);
    }

    public PushNotificationProps(Bundle bundle) {
        mBundle = bundle;
    }

    public int getBadge() {
        if (mBundle.containsKey("badge")) {
            return mBundle.getInt("badge");
        }
        return -1;
    }

    public String getGroup() { return mBundle.getString("group"); }

    public String getSound() { return mBundle.getString("sound"); }

    public String getTitle() { return mBundle.getString("title"); }

    public String getUri() {
        return mBundle.getString("uri");
    }

    public String getBody() {
        return mBundle.getString("body");
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
}
