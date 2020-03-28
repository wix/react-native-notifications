"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventsRegistryIOS {
    constructor(nativeEventsReceiver) {
        this.nativeEventsReceiver = nativeEventsReceiver;
    }
    registerPushKitRegistered(callback) {
        return this.nativeEventsReceiver.registerPushKitRegistered(callback);
    }
    registerPushKitNotificationReceived(callback) {
        return this.nativeEventsReceiver.registerPushKitNotificationReceived(callback);
    }
}
exports.EventsRegistryIOS = EventsRegistryIOS;
