package com.wix.reactnativenotifications.core;

import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;

import android.support.annotation.Nullable;

import com.wix.reactnativenotifications.core.notification.PushNotificationProps;

public class InitialNotificationHolder {

    private static InitialNotificationHolder sInstance;

    private HashMap<String,PushNotificationProps> mNotifications = new HashMap<String,PushNotificationProps>();

    public static void setInstance(InitialNotificationHolder instance) {
        sInstance = instance;
    }

    /*package*/ InitialNotificationHolder() {
    }

    public static InitialNotificationHolder getInstance() {
        if (sInstance == null) {
            sInstance = new InitialNotificationHolder();
        }
        return sInstance;
    }

    public void set(PushNotificationProps pushNotificationProps) {
        mNotifications.put(pushNotificationProps.toString(),pushNotificationProps);
    }

    public void clear() {
        mNotifications.clear();
    }

    @Nullable
    public List<PushNotificationProps> get() {
        return new ArrayList<PushNotificationProps>(mNotifications.values());
    }
}
