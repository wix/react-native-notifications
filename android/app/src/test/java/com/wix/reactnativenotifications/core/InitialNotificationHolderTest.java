package com.wix.reactnativenotifications.core;

import com.wix.reactnativenotifications.core.notification.PushNotificationProps;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;

import static org.junit.Assert.*;
import static org.mockito.Mockito.mock;

@RunWith(MockitoJUnitRunner.class)
public class InitialNotificationHolderTest {

    @Test
    public void initialState() throws Exception {
        final InitialNotificationHolder uut = createUUT();
        assertNull(uut.get());
    }

    @Test
    public void setsInitialNotification() throws Exception {
        PushNotificationProps props = mock(PushNotificationProps.class);
        final InitialNotificationHolder uut = createUUT();
        uut.set(props);
        assertEquals(props, uut.get());
    }

    @Test
    public void clearsInitialNotification() throws Exception {
        PushNotificationProps props = mock(PushNotificationProps.class);
        final InitialNotificationHolder uut = createUUT();
        uut.set(props);
        uut.clear();
        assertNull(uut.get());
    }

    @Test
    public void replacesInitialNotification() throws Exception {
        PushNotificationProps props1 = mock(PushNotificationProps.class);
        PushNotificationProps props2 = mock(PushNotificationProps.class);
        final InitialNotificationHolder uut = createUUT();
        uut.set(props1);
        uut.set(props2);
        assertNotEquals(props1, props2);
        assertEquals(props2, uut.get());
    }

    @Test
    public void isALazySingleton() throws Exception {
        final InitialNotificationHolder instance = InitialNotificationHolder.getInstance();
        assertNotNull(instance);
        assertEquals(instance, InitialNotificationHolder.getInstance());
    }

    private InitialNotificationHolder createUUT() {
        return new InitialNotificationHolder();
    }
}