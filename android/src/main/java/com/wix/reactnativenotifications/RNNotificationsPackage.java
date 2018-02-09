package com.wix.reactnativenotifications;

import android.app.Application;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class RNNotificationsPackage implements ReactPackage {

    private final Application mApplication;
    private final boolean mClearNotificationsOnInit;
    private final boolean mClearNotificationsOnResume;

    public RNNotificationsPackage(Application application) {
        mApplication = application;
        mClearNotificationsOnInit = true;
        mClearNotificationsOnResume = true;
    }

    public RNNotificationsPackage(Application application, boolean clearNotificationsOnInit) {
        mApplication = application;
        mClearNotificationsOnInit = clearNotificationsOnInit;
        mClearNotificationsOnResume = true;
    }

    public RNNotificationsPackage(Application application, boolean clearNotificationsOnInit, boolean clearNotificationsOnResume) {
        mApplication = application;
        mClearNotificationsOnInit = clearNotificationsOnInit;
        mClearNotificationsOnResume = clearNotificationsOnResume;
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Arrays.<NativeModule>asList(new RNNotificationsModule(mApplication, reactContext, mClearNotificationsOnInit, mClearNotificationsOnResume));
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
