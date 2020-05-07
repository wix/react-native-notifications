"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const NotificationActionResponse_1 = require("../interfaces/NotificationActionResponse");
class NativeEventsReceiver {
    constructor(notificationFactory) {
        this.notificationFactory = notificationFactory;
        this.emitter = new react_native_1.NativeEventEmitter(react_native_1.NativeModules.RNEventEmitter);
    }
    registerRemoteNotificationsRegistered(callback) {
        return this.emitter.addListener('remoteNotificationsRegistered', callback);
    }
    registerPushKitRegistered(callback) {
        return this.emitter.addListener('pushKitRegistered', callback);
    }
    registerNotificationReceived(callback) {
        return this.emitter.addListener('notificationReceived', (payload) => {
            callback(this.notificationFactory.fromPayload(payload));
        });
    }
    registerPushKitNotificationReceived(callback) {
        return this.emitter.addListener('pushKitNotificationReceived', callback);
    }
    registerNotificationOpened(callback) {
        return this.emitter.addListener('notificationOpened', (response, completion) => {
            const action = response.action ? new NotificationActionResponse_1.NotificationActionResponse(response.action) : undefined;
            callback(this.notificationFactory.fromPayload(response.notification), completion, action);
        });
    }
    registerRemoteNotificationsRegistrationFailed(callback) {
        return this.emitter.addListener('remoteNotificationsRegistrationFailed', callback);
    }
}
exports.NativeEventsReceiver = NativeEventsReceiver;
