package com.wix.reactnativenotifications.core;

import android.os.Bundle;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class JsIOHelper {
    public boolean sendEventToJS(String eventName, Bundle data, ReactContext reactContext) {
        if (reactContext != null) {
            sendEventToJS(eventName, Arguments.fromBundle(data), reactContext);
            return true;
        }
        return false;
    }

    public boolean sendEventToJS(String eventName, WritableMap data, ReactContext reactContext) {
        if (reactContext != null) {
            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, data);
            return true;
        }
        return false;
    }
}
