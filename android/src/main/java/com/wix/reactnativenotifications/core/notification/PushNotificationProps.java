package com.wix.reactnativenotifications.core.notification;

import android.os.Bundle;

public class PushNotificationProps {

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

    public int getBadge() { return mBundle.getInt("badge"); }

    public String getGroup() { return mBundle.getString("group"); }

    public String getSound() { return mBundle.getString("sound"); }

    public String getTitle() {
        return mBundle.getString("title");
    }

    public String getBody() {
        return mBundle.getString("body");
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
