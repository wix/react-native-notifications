"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Commands {
    constructor(nativeCommandsSender, uniqueIdProvider, notificationFactory) {
        this.nativeCommandsSender = nativeCommandsSender;
        this.uniqueIdProvider = uniqueIdProvider;
        this.notificationFactory = notificationFactory;
    }
    postLocalNotification(notification, id) {
        const notificationId = id ? id : this.uniqueIdProvider.generate();
        const result = this.nativeCommandsSender.postLocalNotification(notification, notificationId);
        return result;
    }
    async getInitialNotification() {
        return this.nativeCommandsSender.getInitialNotification().then((payload) => {
            if (payload) {
                return this.notificationFactory.fromPayload(payload);
            }
            return undefined;
        });
    }
    requestPermissions() {
        const result = this.nativeCommandsSender.requestPermissions();
        return result;
    }
    abandonPermissions() {
        const result = this.nativeCommandsSender.abandonPermissions();
        return result;
    }
    registerPushKit() {
        this.nativeCommandsSender.registerPushKit();
    }
    setCategories(categories) {
        this.nativeCommandsSender.setCategories(categories);
    }
    getBadgeCount() {
        return this.nativeCommandsSender.getBadgeCount();
    }
    setBadgeCount(count) {
        this.nativeCommandsSender.setBadgeCount(count);
    }
    cancelLocalNotification(notificationId) {
        this.nativeCommandsSender.cancelLocalNotification(notificationId);
    }
    cancelAllLocalNotifications() {
        this.nativeCommandsSender.cancelAllLocalNotifications();
    }
    isRegisteredForRemoteNotifications() {
        return this.nativeCommandsSender.isRegisteredForRemoteNotifications();
    }
    checkPermissions() {
        return this.nativeCommandsSender.checkPermissions();
    }
    removeAllDeliveredNotifications() {
        this.nativeCommandsSender.removeAllDeliveredNotifications();
    }
    removeDeliveredNotifications(identifiers) {
        return this.nativeCommandsSender.removeDeliveredNotifications(identifiers);
    }
    getDeliveredNotifications() {
        return this.nativeCommandsSender.getDeliveredNotifications();
    }
    refreshToken() {
        this.nativeCommandsSender.refreshToken();
    }
}
exports.Commands = Commands;
