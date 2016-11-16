package com.wix.reactnativenotifications.core;

import android.util.Log;

import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactContext;

import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;

import static com.wix.reactnativenotifications.Defs.LOGTAG;

public class ReactAppLifecycleFacade implements AppLifecycleFacade {

    private static ReactAppLifecycleFacade sInstance = new ReactAppLifecycleFacade();

    private ReactContext mReactContext;
    private boolean mIsVisible;
    private Set<AppVisibilityListener> mListeners = new CopyOnWriteArraySet<>();

    public static ReactAppLifecycleFacade get() {
        return sInstance;
    }

    public synchronized void onAppInit(ReactContext reactContext) {
        mReactContext = reactContext;
        mIsVisible = false;

        reactContext.addLifecycleEventListener(new LifecycleEventListener() {
            @Override
            public void onHostResume() {
                Log.d(LOGTAG, "onHostResume");
                switchToVisible();
            }

            @Override
            public void onHostPause() {
                switchToInvisible();
            }

            @Override
            public void onHostDestroy() {
                switchToInvisible();
                Log.d(LOGTAG, "onHostDestroy");
                mReactContext.removeLifecycleEventListener(this);
                mReactContext = null;
            }
        });
    }

    @Override
    public synchronized boolean isReactInitialized() {
        if (mReactContext == null) {
            return false;
        }

        return mReactContext.hasActiveCatalystInstance();
    }

    @Override
    public boolean isAppVisible() {
        return mIsVisible;
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
            Log.d(LOGTAG, "App is now visible");
            mIsVisible = true;
            for (AppVisibilityListener listener : mListeners) {
                listener.onAppVisible();
            }
        }
    }

    private synchronized void switchToInvisible() {
        if (mIsVisible) {
            Log.d(LOGTAG, "App is now not visible");
            mIsVisible = false;
            for (AppVisibilityListener listener : mListeners) {
                listener.onAppNotVisible();
            }
        }
    }
}
