"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativeEventsReceiver = void 0;
const react_native_1 = require("react-native");
const NotificationActionResponse_1 = require("../interfaces/NotificationActionResponse");
const NotificationFactory_1 = require("../DTO/NotificationFactory");
class NativeEventsReceiver {
    notificationFactory;
    emitter;
    constructor(notificationFactory = new NotificationFactory_1.NotificationFactory()) {
        this.notificationFactory = notificationFactory;
        this.emitter = new react_native_1.NativeEventEmitter(react_native_1.NativeModules.RNEventEmitter);
    }
    registerRemoteNotificationsRegistered(callback) {
        return this.emitter.addListener('remoteNotificationsRegistered', callback);
    }
    appNotificationSettingsLinked(callback) {
        return this.emitter.addListener('appNotificationSettingsLinked', callback);
    }
    registerPushKitRegistered(callback) {
        return this.emitter.addListener('pushKitRegistered', callback);
    }
    registerNotificationReceived(callback) {
        return this.emitter.addListener('notificationReceived', (payload) => {
            callback(this.notificationFactory.fromPayload(payload));
        });
    }
    registerNotificationReceivedBackground(callback) {
        return this.emitter.addListener('notificationReceivedBackground', (payload) => {
            callback(this.notificationFactory.fromPayload(payload));
        });
    }
    registerPushKitNotificationReceived(callback) {
        return this.emitter.addListener('pushKitNotificationReceived', callback);
    }
    registerNotificationOpened(callback) {
        return this.emitter.addListener('notificationOpened', (response) => {
            const action = response.action ? new NotificationActionResponse_1.NotificationActionResponse(response.action) : undefined;
            callback(this.notificationFactory.fromPayload(response.notification), action);
        });
    }
    registerRemoteNotificationsRegistrationFailed(callback) {
        return this.emitter.addListener('remoteNotificationsRegistrationFailed', callback);
    }
    registerRemoteNotificationsRegistrationDenied(callback) {
        return this.emitter.addListener('remoteNotificationsRegistrationDenied', callback);
    }
}
exports.NativeEventsReceiver = NativeEventsReceiver;
