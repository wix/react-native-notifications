"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
class NativeCommandsSender {
    constructor() {
        this.nativeCommandsModule = react_native_1.NativeModules.RNBridgeModule;
    }
    postLocalNotification(notification, id) {
        return this.nativeCommandsModule.postLocalNotification(notification, id);
    }
    getInitialNotification() {
        return this.nativeCommandsModule.getInitialNotification();
    }
    requestPermissions() {
        return this.nativeCommandsModule.requestPermissions();
    }
    abandonPermissions() {
        return this.nativeCommandsModule.abandonPermissions();
    }
    refreshToken() {
        this.nativeCommandsModule.refreshToken();
    }
    registerPushKit() {
        return this.nativeCommandsModule.registerPushKit();
    }
    setCategories(categories) {
        this.nativeCommandsModule.setCategories(categories);
    }
    getBadgeCount() {
        return this.nativeCommandsModule.getBadgeCount();
    }
    setBadgeCount(count) {
        this.nativeCommandsModule.setBadgeCount(count);
    }
    cancelLocalNotification(notificationId) {
        this.nativeCommandsModule.cancelLocalNotification(notificationId);
    }
    cancelAllLocalNotifications() {
        this.nativeCommandsModule.cancelAllLocalNotifications();
    }
    isRegisteredForRemoteNotifications() {
        return this.nativeCommandsModule.isRegisteredForRemoteNotifications();
    }
    checkPermissions() {
        return this.nativeCommandsModule.checkPermissions();
    }
    removeAllDeliveredNotifications() {
        return this.nativeCommandsModule.removeAllDeliveredNotifications();
    }
    removeDeliveredNotifications(identifiers) {
        return this.nativeCommandsModule.removeDeliveredNotifications(identifiers);
    }
    getDeliveredNotifications() {
        return this.nativeCommandsModule.getDeliveredNotifications();
    }
    finishPresentingNotification(notificationId, notificationCompletion) {
        this.nativeCommandsModule.finishPresentingNotification(notificationId, notificationCompletion);
    }
    finishHandlingAction(notificationId) {
        this.nativeCommandsModule.finishHandlingAction(notificationId);
    }
    setNotificationChannel(notificationChannel) {
        this.nativeCommandsModule.setNotificationChannel(notificationChannel);
    }
}
exports.NativeCommandsSender = NativeCommandsSender;
