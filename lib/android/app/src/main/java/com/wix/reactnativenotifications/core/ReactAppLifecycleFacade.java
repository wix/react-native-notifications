package com.wix.reactnativenotifications.core;

import android.util.Log;

import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WindowFocusChangeListener;
import com.wix.reactnativenotifications.BuildConfig;

import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;

import static com.wix.reactnativenotifications.Defs.LOGTAG;

public class ReactAppLifecycleFacade implements AppLifecycleFacade {

    private ReactContext mReactContext;
    private boolean mIsVisible;
    private boolean mIsDestroyed;
    private Set<AppVisibilityListener> mListeners = new CopyOnWriteArraySet<>();

    public void init(ReactContext reactContext) {
        mReactContext = reactContext;
        reactContext.addWindowFocusChangeListener(new WindowFocusChangeListener() {
            @Override
            public void onWindowFocusChange(boolean hasFocus) {
                if(BuildConfig.DEBUG) Log.d(LOGTAG, "onWindowFocusChange");
                if (hasFocus) {
                    switchToVisible();
                }
            }
        });
        reactContext.addLifecycleEventListener(new LifecycleEventListener() {
            @Override
            public void onHostResume() {
                if(BuildConfig.DEBUG) Log.d(LOGTAG, "onHostResume");
            }

            @Override
            public void onHostPause() {
                if(BuildConfig.DEBUG) Log.d(LOGTAG, "onHostPause");
                switchToInvisible();
            }

            @Override
            public void onHostDestroy() {
                if(BuildConfig.DEBUG) Log.d(LOGTAG, "onHostDestroy");
                switchToInvisible();
            }
        });
    }

    @Override
    public synchronized boolean isReactInitialized() {
        if (mReactContext == null) {
            return false;
        }

        try {
            return mReactContext.hasActiveCatalystInstance();
        } catch (Exception e) {
            return mReactContext.hasActiveReactInstance();
        }
    }

    @Override
    public ReactContext getRunningReactContext() {
        ReactContext reactContext = mReactContext;
        if (reactContext == null) {
            return null;
        }

        return mReactContext;
    }

    @Override
    public boolean isAppVisible() {
        return mIsVisible;
    }

    @Override
    public boolean isAppDestroyed() {
        return mIsDestroyed;
    }

    @Override
    public void addVisibilityListener(AppVisibilityListener listener) {
        mListeners.add(listener);
    }

    @Override
    public void removeVisibilityListener(AppVisibilityListener listener) {
        mListeners.remove(listener);
    }

    private synchronized void switchToVisible() {
        if (!mIsVisible) {
            if(BuildConfig.DEBUG) Log.d(LOGTAG, "App is now visible");
            mIsVisible = true;
            for (AppVisibilityListener listener : mListeners) {
                listener.onAppVisible();
            }
        }
    }

    private synchronized void switchToInvisible() {
        if (mIsVisible) {
            if(BuildConfig.DEBUG) Log.d(LOGTAG, "App is now not visible");
            mIsVisible = false;
            for (AppVisibilityListener listener : mListeners) {
                listener.onAppNotVisible();
            }
        }
    }

    private synchronized void switchToDestroyed() {
        switchToInvisible();
        if (!mIsDestroyed) {
            if(BuildConfig.DEBUG) Log.d(LOGTAG, "App is now destroyed");
            mIsDestroyed = true;
        }
    }
}
