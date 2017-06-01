package com.wix.reactnativenotifications.core;

import android.content.Context;
import android.os.Bundle;

import com.facebook.react.ReactApplication;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class JsIOHelper {

    private final Context mContext;

    public JsIOHelper(Context context) {
        mContext = context;
    }

    public boolean sendEventToJS(String eventName, Bundle bundle) {
        return sendEventToJS(eventName, Arguments.fromBundle(bundle));
    }

    public boolean sendEventToJS(String eventName, String string) {
        return sendEventToJS(eventName, (Object) string);
    }

    boolean sendEventToJS(String eventName, Object object) {
        final ReactContext reactContext = ((ReactApplication) mContext.getApplicationContext()).getReactNativeHost().getReactInstanceManager().getCurrentReactContext();

        if (reactContext != null && reactContext.hasActiveCatalystInstance()) {
            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, object);
            return true;
        }

        return false;
    }
}
