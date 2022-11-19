"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsRegistry = void 0;
class EventsRegistry {
    nativeEventsReceiver;
    completionCallbackWrapper;
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
        return this.nativeEventsReceiver.registerNotificationReceivedBackground(this.completionCallbackWrapper.wrapReceivedBackgroundCallback(callback));
    }
    registerNotificationOpened(callback) {
        return this.nativeEventsReceiver.registerNotificationOpened(this.completionCallbackWrapper.wrapOpenedCallback(callback));
    }
    registerRemoteNotificationsRegistrationFailed(callback) {
        return this.nativeEventsReceiver.registerRemoteNotificationsRegistrationFailed(callback);
    }
    registerRemoteNotificationsRegistrationDenied(callback) {
        return this.nativeEventsReceiver.registerRemoteNotificationsRegistrationDenied(callback);
    }
}
exports.EventsRegistry = EventsRegistry;
