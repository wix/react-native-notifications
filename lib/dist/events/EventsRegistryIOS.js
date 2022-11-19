"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsRegistryIOS = void 0;
class EventsRegistryIOS {
    nativeEventsReceiver;
    completionCallbackWrapper;
    constructor(nativeEventsReceiver, completionCallbackWrapper) {
        this.nativeEventsReceiver = nativeEventsReceiver;
        this.completionCallbackWrapper = completionCallbackWrapper;
    }
    registerPushKitRegistered(callback) {
        return this.nativeEventsReceiver.registerPushKitRegistered(callback);
    }
    registerPushKitNotificationReceived(callback) {
        return this.nativeEventsReceiver.registerPushKitNotificationReceived(this.completionCallbackWrapper.wrapOpenedCallback(callback));
    }
    appNotificationSettingsLinked(callback) {
        return this.nativeEventsReceiver.appNotificationSettingsLinked(callback);
    }
}
exports.EventsRegistryIOS = EventsRegistryIOS;
