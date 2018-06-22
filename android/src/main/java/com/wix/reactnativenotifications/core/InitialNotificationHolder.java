package com.wix.reactnativenotifications.core;

import java.util.List;
import java.util.ArrayList;

import android.support.annotation.Nullable;

import com.wix.reactnativenotifications.core.notification.PushNotificationProps;

public class InitialNotificationHolder {

    private static InitialNotificationHolder sInstance;

    private List<PushNotificationProps> mNotificationArray = new ArrayList<PushNotificationProps>();

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
        mNotificationArray.add(pushNotificationProps);
    }

    public void clear() {
        mNotificationArray.clear();
    }

    @Nullable
    public List<PushNotificationProps> get() {
        return mNotificationArray;
    }
}
