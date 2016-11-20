package com.wix.reactnativenotifications.core;

public interface AppLifecycleFacade {

    interface AppVisibilityListener {
        void onAppVisible();
        void onAppNotVisible();
    }

    boolean isReactInitialized();
    boolean isAppVisible();
    void addVisibilityListener(AppVisibilityListener listener);
    void removeVisibilityListener(AppVisibilityListener listener);
}
