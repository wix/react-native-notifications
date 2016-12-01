package com.wix.reactnativenotifications.core;

import android.os.Bundle;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class JsIOHelperTest {

    @Mock DeviceEventManagerModule.RCTDeviceEventEmitter mRCTDeviceEventEmitter;
    @Mock ReactContext mReactContext;

    @Before
    public void setup() throws Exception {
        when(mReactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)).thenReturn(mRCTDeviceEventEmitter);
    }

    @Test
    public void sendEventToJS_hasReactContext_emitsEventToJs() throws Exception {
        WritableMap data = mock(WritableMap.class);

        final JsIOHelper uut = createUUT();
        boolean result = uut.sendEventToJS("my-event", data, mReactContext);

        assertTrue(result);
        verify(mRCTDeviceEventEmitter).emit("my-event", data);
    }

    @Test
    public void sendEventToJS_noReactContext_returnsFalse() throws Exception {
        WritableMap data = mock(WritableMap.class);

        final JsIOHelper uut = createUUT();
        boolean result = uut.sendEventToJS("my-event", data, null);

        assertFalse(result);
        verify(mRCTDeviceEventEmitter, never()).emit(anyString(), any(WritableMap.class));
    }

    private JsIOHelper createUUT() {
        return new JsIOHelper();
    }
}
