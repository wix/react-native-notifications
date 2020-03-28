"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventsRegistry {
    constructor(nativeEventsReceiver, completionCallbackWrapper) {
        this.nativeEventsReceiver = nativeEventsReceiver;
        this.completionCallbackWrapper = completionCallbackWrapper;
    }
    registerRemoteNotificationsRegistered(callback) {
        return this.nativeEventsReceiver.registerRemoteNotificationsRegistered(callback);
    }
    registerNotificationReceivedForeground(callback) {
        return this.nativeEventsReceiver.registerNotificationReceived(this.completionCallbackWrapper.wrapReceivedForegroundCallback(callback));
    }
    registerNotificationReceivedBackground(callback) {
        return this.nativeEventsReceiver.registerNotificationReceived(this.completionCallbackWrapper.wrapReceivedBackgroundCallback(callback));
    }
    registerNotificationOpened(callback) {
        return this.nativeEventsReceiver.registerNotificationOpened(this.completionCallbackWrapper.wrapOpenedCallback(callback));
    }
    registerRemoteNotificationsRegistrationFailed(callback) {
        return this.nativeEventsReceiver.registerRemoteNotificationsRegistrationFailed(callback);
    }
}
exports.EventsRegistry = EventsRegistry;
