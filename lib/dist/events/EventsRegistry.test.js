"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const Notification_1 = require("../DTO/Notification");
const CompletionCallbackWrapper_1 = require("../adapters/CompletionCallbackWrapper");
const NativeCommandsSender_1 = require("../adapters/NativeCommandsSender");
const NativeEventsReceiver_1 = require("../adapters/NativeEventsReceiver");
const NotificationCompletion_1 = require("../interfaces/NotificationCompletion");
const EventsRegistry_1 = require("./EventsRegistry");
jest.mock('../adapters/NativeCommandsSender');
jest.mock('../adapters/NativeEventsReceiver');
describe('EventsRegistry', () => {
    let uut;
    const mockNativeEventsReceiver = new NativeEventsReceiver_1.NativeEventsReceiver();
    const mockNativeCommandsSender = new NativeCommandsSender_1.NativeCommandsSender();
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
            expect(mockNativeEventsReceiver.registerNotificationReceivedBackground).toHaveBeenCalledTimes(1);
            expect(mockNativeEventsReceiver.registerNotificationReceivedBackground).toHaveBeenCalledWith(expect.any(Function));
        });
        it('should wrap callback with completion block', () => {
            const wrappedCallback = jest.fn();
            const notification = new Notification_1.Notification({ identifier: 'identifier' });
            uut.registerNotificationReceivedBackground(wrappedCallback);
            const call = mockNativeEventsReceiver.registerNotificationReceivedBackground.mock.calls[0][0];
            call(notification);
            expect(wrappedCallback).toBeCalledWith(notification, expect.any(Function));
            expect(wrappedCallback).toBeCalledTimes(1);
        });
        it('should wrap callback with completion block', () => {
            const expectedNotification = new Notification_1.Notification({ identifier: 'identifier' });
            uut.registerNotificationReceivedBackground((notification) => {
                expect(notification).toEqual(expectedNotification);
            });
            const call = mockNativeEventsReceiver.registerNotificationReceivedBackground.mock.calls[0][0];
            call(expectedNotification);
        });
        it('should invoke finishHandlingBackgroundAction', () => {
            const notification = new Notification_1.Notification({ identifier: 'notificationId' });
            const response = NotificationCompletion_1.NotificationBackgroundFetchResult.NO_DATA;
            uut.registerNotificationReceivedBackground((notification, completion) => {
                completion(response);
                expect(mockNativeCommandsSender.finishHandlingBackgroundAction).toBeCalledWith(notification.identifier, response);
            });
            const call = mockNativeEventsReceiver.registerNotificationReceivedBackground.mock.calls[0][0];
            call(notification);
        });
        it('should not invoke finishHandlingBackgroundAction on Android', () => {
            react_native_1.Platform.OS = 'android';
            const expectedNotification = new Notification_1.Notification({ identifier: 'notificationId' });
            const response = NotificationCompletion_1.NotificationBackgroundFetchResult.NO_DATA;
            uut.registerNotificationReceivedBackground((notification, completion) => {
                completion(response);
                expect(expectedNotification).toEqual(notification);
                expect(mockNativeCommandsSender.finishHandlingBackgroundAction).toBeCalledTimes(0);
            });
            const call = mockNativeEventsReceiver.registerNotificationReceivedBackground.mock.calls[0][0];
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
            const response = {
                notification,
                identifier: 'responseId',
                action: { identifier: 'actionIdentifier', text: 'userText' },
            };
            uut.registerNotificationOpened(wrappedCallback);
            const call = mockNativeEventsReceiver.registerNotificationOpened.mock.calls[0][0];
            call(response.notification, response.action);
            expect(wrappedCallback).toBeCalledWith(response.notification, expect.any(Function), response.action);
            expect(wrappedCallback).toBeCalledTimes(1);
        });
        it('should wrap callback with completion block', () => {
            const notification = new Notification_1.Notification({ identifier: 'identifier' });
            uut.registerNotificationOpened((response) => {
                expect(response).toEqual(notification);
            });
            const call = mockNativeEventsReceiver.registerNotificationOpened.mock.calls[0][0];
            call(notification);
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
