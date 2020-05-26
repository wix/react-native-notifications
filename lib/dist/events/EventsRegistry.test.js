"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventsRegistry_1 = require("./EventsRegistry");
const NativeEventsReceiver_mock_1 = require("../adapters/NativeEventsReceiver.mock");
const Notification_1 = require("../DTO/Notification");
const CompletionCallbackWrapper_1 = require("../adapters/CompletionCallbackWrapper");
const NativeCommandsSender_mock_1 = require("../adapters/NativeCommandsSender.mock");
const react_native_1 = require("react-native");
describe('EventsRegistry', () => {
    let uut;
    const mockNativeEventsReceiver = new NativeEventsReceiver_mock_1.NativeEventsReceiver();
    const mockNativeCommandsSender = new NativeCommandsSender_mock_1.NativeCommandsSender();
    const completionCallbackWrapper = new CompletionCallbackWrapper_1.CompletionCallbackWrapper(mockNativeCommandsSender);
    beforeEach(() => {
        uut = new EventsRegistry_1.EventsRegistry(mockNativeEventsReceiver, completionCallbackWrapper);
    });
    describe('registerRemoteNotificationsReceivedForeground', () => {
        beforeEach(() => {
            react_native_1.AppState.currentState = 'active';
        });
        it('delegates to nativeEventsReceiver', () => {
            const cb = jest.fn();
            uut.registerNotificationReceivedForeground(cb);
            expect(mockNativeEventsReceiver.registerNotificationReceived).toHaveBeenCalledTimes(1);
            expect(mockNativeEventsReceiver.registerNotificationReceived).toHaveBeenCalledWith(expect.any(Function));
        });
        it('should wrap callback with completion block', () => {
            const wrappedCallback = jest.fn();
            const notification = new Notification_1.Notification({ identifier: 'identifier' });
            uut.registerNotificationReceivedForeground(wrappedCallback);
            const call = mockNativeEventsReceiver.registerNotificationReceived.mock.calls[0][0];
            call(notification);
            expect(wrappedCallback).toBeCalledWith(notification, expect.any(Function));
            expect(wrappedCallback).toBeCalledTimes(1);
        });
        it('should wrap callback with completion block', () => {
            const expectedNotification = new Notification_1.Notification({ identifier: 'identifier' });
            uut.registerNotificationReceivedForeground((notification) => {
                expect(notification).toEqual(expectedNotification);
            });
            const call = mockNativeEventsReceiver.registerNotificationReceived.mock.calls[0][0];
            call(expectedNotification);
        });
        it('should invoke finishPresentingNotification', () => {
            const notification = new Notification_1.Notification({ identifier: 'notificationId' });
            const response = { alert: true };
            uut.registerNotificationReceivedForeground((notification, completion) => {
                completion(response);
                expect(mockNativeCommandsSender.finishPresentingNotification).toBeCalledWith(notification.identifier, response);
            });
            const call = mockNativeEventsReceiver.registerNotificationReceived.mock.calls[0][0];
            call(notification);
        });
        it('should not invoke finishPresentingNotification on Android', () => {
            react_native_1.Platform.OS = 'android';
            const expectedNotification = new Notification_1.Notification({ identifier: 'notificationId' });
            const response = { alert: true };
            uut.registerNotificationReceivedForeground((notification, completion) => {
                completion(response);
                expect(expectedNotification).toEqual(notification);
                expect(mockNativeCommandsSender.finishPresentingNotification).toBeCalledTimes(0);
            });
            const call = mockNativeEventsReceiver.registerNotificationReceived.mock.calls[0][0];
            call(expectedNotification);
        });
    });
    describe('registerRemoteNotificationsReceivedBackground', () => {
        beforeEach(() => {
            react_native_1.AppState.currentState = 'background';
        });
        it('delegates to nativeEventsReceiver', () => {
            const cb = jest.fn();
            uut.registerNotificationReceivedBackground(cb);
            expect(mockNativeEventsReceiver.registerNotificationReceived).toHaveBeenCalledTimes(1);
            expect(mockNativeEventsReceiver.registerNotificationReceived).toHaveBeenCalledWith(expect.any(Function));
        });
        it('should wrap callback with completion block', () => {
            const wrappedCallback = jest.fn();
            const notification = new Notification_1.Notification({ identifier: 'identifier' });
            uut.registerNotificationReceivedBackground(wrappedCallback);
            const call = mockNativeEventsReceiver.registerNotificationReceived.mock.calls[0][0];
            call(notification);
            expect(wrappedCallback).toBeCalledWith(notification, expect.any(Function));
            expect(wrappedCallback).toBeCalledTimes(1);
        });
        it('should wrap callback with completion block', () => {
            const expectedNotification = new Notification_1.Notification({ identifier: 'identifier' });
            uut.registerNotificationReceivedBackground((notification) => {
                expect(notification).toEqual(expectedNotification);
            });
            const call = mockNativeEventsReceiver.registerNotificationReceived.mock.calls[0][0];
            call(expectedNotification);
        });
        it('should invoke finishPresentingNotification', () => {
            const notification = new Notification_1.Notification({ identifier: 'notificationId' });
            const response = { alert: true };
            uut.registerNotificationReceivedBackground((notification, completion) => {
                completion(response);
                expect(mockNativeCommandsSender.finishPresentingNotification).toBeCalledWith(notification.identifier, response);
            });
            const call = mockNativeEventsReceiver.registerNotificationReceived.mock.calls[0][0];
            call(notification);
        });
        it('should not invoke finishPresentingNotification on Android', () => {
            react_native_1.Platform.OS = 'android';
            const expectedNotification = new Notification_1.Notification({ identifier: 'notificationId' });
            const response = { alert: true };
            uut.registerNotificationReceivedBackground((notification, completion) => {
                completion(response);
                expect(expectedNotification).toEqual(notification);
                expect(mockNativeCommandsSender.finishPresentingNotification).toBeCalledTimes(0);
            });
            const call = mockNativeEventsReceiver.registerNotificationReceived.mock.calls[0][0];
            call(expectedNotification);
        });
    });
    describe('', () => {
        it('delegates to nativeEventsReceiver', () => {
            const cb = jest.fn();
            uut.registerNotificationOpened(cb);
            expect(mockNativeEventsReceiver.registerNotificationOpened).toHaveBeenCalledTimes(1);
            expect(mockNativeEventsReceiver.registerNotificationOpened).toHaveBeenCalledWith(expect.any(Function));
        });
        it('should wrap callback with completion block', () => {
            const wrappedCallback = jest.fn();
            const notification = new Notification_1.Notification({ identifier: 'identifier' });
            const response = { notification, identifier: 'responseId' };
            uut.registerNotificationOpened(wrappedCallback);
            const call = mockNativeEventsReceiver.registerNotificationOpened.mock.calls[0][0];
            call(response);
            expect(wrappedCallback).toBeCalledWith(response, expect.any(Function), undefined); //JMC: ActionResponse
            expect(wrappedCallback).toBeCalledTimes(1);
        });
        it('should wrap callback with completion block', () => {
            const notification = new Notification_1.Notification({ identifier: 'identifier' });
            const expectedResponse = { notification, identifier: 'responseId' };
            uut.registerNotificationOpened((response) => {
                expect(response).toEqual(expectedResponse);
            });
            const call = mockNativeEventsReceiver.registerNotificationOpened.mock.calls[0][0];
            call(expectedResponse);
        });
        it('calling completion should invoke finishHandlingAction', () => {
            const expectedNotification = new Notification_1.Notification({ identifier: 'notificationId' });
            uut.registerNotificationOpened((notification, completion) => {
                completion();
                expect(expectedNotification).toEqual(notification);
                expect(mockNativeCommandsSender.finishHandlingAction).toBeCalledWith(notification.identifier);
            });
            const call = mockNativeEventsReceiver.registerNotificationOpened.mock.calls[0][0];
            call(expectedNotification);
        });
        it('should not invoke finishHandlingAction on Android', () => {
            react_native_1.Platform.OS = 'android';
            const expectedNotification = new Notification_1.Notification({ identifier: 'notificationId' });
            uut.registerNotificationOpened((notification, completion) => {
                completion();
                expect(expectedNotification).toEqual(notification);
                expect(mockNativeCommandsSender.finishHandlingAction).toBeCalledTimes(0);
            });
            const call = mockNativeEventsReceiver.registerNotificationOpened.mock.calls[0][0];
            call(expectedNotification);
        });
    });
    it('delegates registerRemoteNotificationsRegistered to nativeEventsReceiver', () => {
        const cb = jest.fn();
        uut.registerRemoteNotificationsRegistered(cb);
        expect(mockNativeEventsReceiver.registerRemoteNotificationsRegistered).toHaveBeenCalledTimes(1);
        expect(mockNativeEventsReceiver.registerRemoteNotificationsRegistered).toHaveBeenCalledWith(cb);
    });
    it('delegates registerRemoteNotificationsRegistrationFailed to nativeEventsReceiver', () => {
        const cb = jest.fn();
        uut.registerRemoteNotificationsRegistrationFailed(cb);
        expect(mockNativeEventsReceiver.registerRemoteNotificationsRegistrationFailed).toHaveBeenCalledTimes(1);
        expect(mockNativeEventsReceiver.registerRemoteNotificationsRegistrationFailed).toHaveBeenCalledWith(cb);
    });
});
