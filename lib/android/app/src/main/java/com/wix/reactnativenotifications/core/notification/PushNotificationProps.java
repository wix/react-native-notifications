package com.wix.reactnativenotifications.core.notification;

import android.os.Bundle;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

public class PushNotificationProps {

    protected Bundle mBundle;

    public PushNotificationProps(Bundle bundle) {
        mBundle = bundle;
    }

    public String getTitle() {
        return getBundleStringFirstNotNull("gcm.notification.title", "title");
    }

    public String getImageUrl() {
        return bundleToMap((Bundle) mBundle.get("data")).get("image");
    }

    public static Map<String, String> bundleToMap(Bundle extras) {
        Map<String, String> map = new HashMap<>();
        Set<String> ks = extras.keySet();
        Iterator<String> iterator = ks.iterator();
        while (iterator.hasNext()) {
            String key = iterator.next();
            map.put(key, extras.getString(key));
        }
        return map;
    }

    public String getBody() {
        return getBundleStringFirstNotNull("gcm.notification.body", "body");
    }

    public Bundle asBundle() {
        return (Bundle) mBundle.clone();
    }

    public boolean isFirebaseBackgroundPayload() {
        return mBundle.containsKey("google.message_id");
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
