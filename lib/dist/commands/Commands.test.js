"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_mockito_1 = require("ts-mockito");
const Commands_1 = require("./Commands");
const NativeCommandsSender_1 = require("../adapters/NativeCommandsSender");
const Notification_1 = require("../DTO/Notification");
const UniqueIdProvider_1 = require("../adapters/UniqueIdProvider");
const NotificationFactory_1 = require("../DTO/NotificationFactory");
const NotificationAndroid_1 = require("../DTO/NotificationAndroid");
const react_native_1 = require("react-native");
const NotificationIOS_1 = require("../DTO/NotificationIOS");
describe('Commands', () => {
    let uut;
    let mockedNativeCommandsSender;
    let mockedUniqueIdProvider;
    let notificationFactory;
    beforeEach(() => {
        notificationFactory = new NotificationFactory_1.NotificationFactory();
        mockedNativeCommandsSender = ts_mockito_1.mock(NativeCommandsSender_1.NativeCommandsSender);
        mockedUniqueIdProvider = ts_mockito_1.mock(UniqueIdProvider_1.UniqueIdProvider);
        ts_mockito_1.when(mockedUniqueIdProvider.generate()).thenCall(() => 12);
        uut = new Commands_1.Commands(ts_mockito_1.instance(mockedNativeCommandsSender), ts_mockito_1.instance(mockedUniqueIdProvider), notificationFactory);
    });
    describe('getInitialNotification', () => {
        it('sends to native', () => {
            uut.getInitialNotification();
            ts_mockito_1.verify(mockedNativeCommandsSender.getInitialNotification()).called();
        });
        it('Android - returns a promise with the initial notification', async () => {
            react_native_1.Platform.OS = 'android';
            const expectedNotification = new NotificationAndroid_1.NotificationAndroid({ 'google.message_id': 'id' });
            ts_mockito_1.when(mockedNativeCommandsSender.getInitialNotification()).thenResolve({ 'google.message_id': 'id' });
            const result = await uut.getInitialNotification();
            expect(result).toEqual(expectedNotification);
        });
        it('Should return undefined initial notification', async () => {
            react_native_1.Platform.OS = 'android';
            ts_mockito_1.when(mockedNativeCommandsSender.getInitialNotification()).thenResolve();
            const result = await uut.getInitialNotification();
            expect(result).toEqual(undefined);
        });
        it('iOS - returns a promise with the initial notification', async () => {
            react_native_1.Platform.OS = 'ios';
            const expectedNotification = new NotificationIOS_1.NotificationIOS({ identifier: 'id' });
            ts_mockito_1.when(mockedNativeCommandsSender.getInitialNotification()).thenResolve({ identifier: 'id' });
            const result = await uut.getInitialNotification();
            expect(result).toEqual(expectedNotification);
        });
    });
    describe('requestPermissions', () => {
        it('sends to native', () => {
            uut.requestPermissions();
            ts_mockito_1.verify(mockedNativeCommandsSender.requestPermissions()).called();
        });
    });
    describe('registerPushKit', () => {
        it('sends to native', () => {
            uut.registerPushKit();
            ts_mockito_1.verify(mockedNativeCommandsSender.registerPushKit()).called();
        });
    });
    describe('setCategories', () => {
        it('sends to native', () => {
            const emptyCategoriesArray = [];
            uut.setCategories(emptyCategoriesArray);
            ts_mockito_1.verify(mockedNativeCommandsSender.setCategories(emptyCategoriesArray)).called();
        });
        it('sends to native with categories', () => {
            const category = { identifier: 'id', actions: [] };
            const categoriesArray = [category];
            uut.setCategories(categoriesArray);
            ts_mockito_1.verify(mockedNativeCommandsSender.setCategories(categoriesArray)).called();
        });
    });
    describe('abandonPermissions', () => {
        it('sends to native', () => {
            uut.abandonPermissions();
            ts_mockito_1.verify(mockedNativeCommandsSender.abandonPermissions()).called();
        });
    });
    describe('postLocalNotification', () => {
        it('sends to native', () => {
            const notification = new Notification_1.Notification({ identifier: 'id' });
            uut.postLocalNotification(notification);
            ts_mockito_1.verify(mockedNativeCommandsSender.postLocalNotification(notification, ts_mockito_1.anyNumber())).called();
        });
        it('generates unique identifier', () => {
            const notification = new Notification_1.Notification({ identifier: 'id' });
            uut.postLocalNotification(notification);
            ts_mockito_1.verify(mockedNativeCommandsSender.postLocalNotification(notification, ts_mockito_1.anyNumber())).called();
        });
        it('use passed notification id', () => {
            const notification = new Notification_1.Notification({ identifier: 'id' });
            const passedId = 2;
            uut.postLocalNotification(notification, passedId);
            ts_mockito_1.verify(mockedNativeCommandsSender.postLocalNotification(notification, passedId)).called();
        });
    });
    describe('getBadgeCount', () => {
        it('sends to native', () => {
            uut.getBadgeCount();
            ts_mockito_1.verify(mockedNativeCommandsSender.getBadgeCount()).called();
        });
    });
    describe('setBadgeCount', () => {
        it('sends to native', () => {
            uut.setBadgeCount(10);
            ts_mockito_1.verify(mockedNativeCommandsSender.setBadgeCount(10)).called();
        });
    });
    describe('cancelLocalNotification', () => {
        it('sends to native', () => {
            uut.cancelLocalNotification("notificationId");
            ts_mockito_1.verify(mockedNativeCommandsSender.cancelLocalNotification("notificationId")).called();
        });
    });
    describe('cancelAllLocalNotifications', () => {
        it('sends to native', () => {
            uut.cancelAllLocalNotifications();
            ts_mockito_1.verify(mockedNativeCommandsSender.cancelAllLocalNotifications()).called();
        });
    });
    describe('isRegisteredForRemoteNotifications', () => {
        it('sends to native', () => {
            uut.isRegisteredForRemoteNotifications();
            ts_mockito_1.verify(mockedNativeCommandsSender.isRegisteredForRemoteNotifications()).called();
        });
        it('return positive response from native', async () => {
            ts_mockito_1.when(mockedNativeCommandsSender.isRegisteredForRemoteNotifications()).thenResolve(true);
            const isRegistered = await uut.isRegisteredForRemoteNotifications();
            ts_mockito_1.verify(mockedNativeCommandsSender.isRegisteredForRemoteNotifications()).called();
            expect(isRegistered).toEqual(true);
        });
        it('return negative response from native', async () => {
            ts_mockito_1.when(mockedNativeCommandsSender.isRegisteredForRemoteNotifications()).thenResolve(false);
            const isRegistered = await uut.isRegisteredForRemoteNotifications();
            expect(isRegistered).toEqual(false);
        });
    });
    describe('checkPermissions', () => {
        it('sends to native', () => {
            uut.checkPermissions();
            ts_mockito_1.verify(mockedNativeCommandsSender.checkPermissions()).called();
        });
        it('return negative response from native', async () => {
            const expectedPermissions = { badge: false, alert: true, sound: false };
            ts_mockito_1.when(mockedNativeCommandsSender.checkPermissions()).thenResolve(expectedPermissions);
            const permissions = await uut.checkPermissions();
            expect(permissions).toEqual(expectedPermissions);
        });
    });
    describe('removeAllDeliveredNotifications', () => {
        it('sends to native', () => {
            uut.removeAllDeliveredNotifications();
            ts_mockito_1.verify(mockedNativeCommandsSender.removeAllDeliveredNotifications()).called();
        });
    });
    describe('removeDeliveredNotifications', () => {
        it('sends to native', () => {
            const identifiers = ["id1", "id2"];
            uut.removeDeliveredNotifications(identifiers);
            ts_mockito_1.verify(mockedNativeCommandsSender.removeDeliveredNotifications(identifiers)).called();
        });
    });
    describe('getDeliveredNotifications', () => {
        it('sends to native', () => {
            uut.getDeliveredNotifications();
            ts_mockito_1.verify(mockedNativeCommandsSender.getDeliveredNotifications()).called();
        });
    });
    describe('refreshToken', () => {
        it('sends to native', () => {
            uut.refreshToken();
            ts_mockito_1.verify(mockedNativeCommandsSender.refreshToken()).called();
        });
    });
});
