package com.wix.reactnativenotifications.core;

import android.os.Bundle;

/**
 * @author amitd
 */
public class PushNotificationProps {

    private Bundle mBundle;

    public PushNotificationProps(Bundle bundle) {
        final String title = bundle.getString("title");
        final String body = bundle.getString("body");
        if (title == null || title.trim().isEmpty() || body == null || body.trim().isEmpty()) {
            throw new IllegalArgumentException("Invalid notification");
        }

        mBundle = bundle;
    }

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
