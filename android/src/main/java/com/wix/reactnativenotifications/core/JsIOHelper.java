package com.wix.reactnativenotifications.core;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.LinkedList;

public class JsIOHelper {

    private static final LinkedList<Event> sBackgroundQueue = new LinkedList<Event>();
    private static boolean sJsIsReady = false;

    private final Context mContext;
    private final Handler mHandler = new Handler(Looper.getMainLooper());

    public JsIOHelper(Context context) {
        mContext = context;
    }

    public void sendEventToJS(String name, Bundle bundle) {
        final Event event = new Event(name, Arguments.fromBundle(bundle));
        postEvent(event);
    }

    public void sendEventToJS(String name, String string) {
        final Event event = new Event(name, string);
        postEvent(event);
    }

    public void consumeBackgroundQueue() {
        synchronized (JsIOHelper.class) {
            sJsIsReady = true;

            while (!sBackgroundQueue.isEmpty()) {
                emitEvent(sBackgroundQueue.pop());
            }
        }
    }

    private void postEvent(final Event event) {
        if (Looper.getMainLooper() == Looper.myLooper()) {
            emitEvent(event);
        } else {
            mHandler.post(new Runnable() {
                @Override
                public void run() {
                    emitEvent(event);
                }
            });
        }
    }

    private void emitEvent(Event event) {
        final ReactInstanceManager reactInstanceManager = ((ReactApplication) mContext.getApplicationContext()).getReactNativeHost().getReactInstanceManager();
        final ReactContext reactContext = reactInstanceManager.getCurrentReactContext();

        synchronized (JsIOHelper.class) {
            if (sJsIsReady && reactContext != null && reactContext.hasActiveCatalystInstance()) {
                reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(event.name, event.object);
            } else {
                sBackgroundQueue.push(event);

                if (reactContext == null && !reactInstanceManager.hasStartedCreatingInitialContext()) {
                    reactInstanceManager.createReactContextInBackground();
                }
            }
        }
    }

    private static final class Event {
        final String name;
        final Object object;

        Event(String name, Object object) {
            this.name = name;
            this.object = object;
        }
    }
}
