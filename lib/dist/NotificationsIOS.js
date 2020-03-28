"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
class NotificationsIOS {
    constructor(commands, eventsRegistry) {
        this.commands = commands;
        this.eventsRegistry = eventsRegistry;
        return new Proxy(this, {
            get(target, name) {
                if (react_native_1.Platform.OS === 'ios') {
                    return target[name];
                }
                else {
                    return () => { };
                }
            }
        });
    }
    /**
    * Request permissions to send remote notifications
    */
    registerRemoteNotifications() {
        return this.commands.requestPermissions();
    }
    /**
    * Unregister for all remote notifications received via Apple Push Notification service
    */
    abandonPermissions() {
        return this.commands.abandonPermissions();
    }
    /**
   * registerPushKit
   */
    registerPushKit() {
        return this.commands.registerPushKit();
    }
    /**
     * getBadgeCount
     */
    getBadgeCount() {
        return this.commands.getBadgeCount();
    }
    /**
     * setBadgeCount
     * @param count number of the new badge count
     */
    setBadgeCount(count) {
        return this.commands.setBadgeCount(count);
    }
    /**
     * cancelAllLocalNotifications
     */
    cancelAllLocalNotifications() {
        this.commands.cancelAllLocalNotifications();
    }
    /**
     * checkPermissions
     */
    checkPermissions() {
        return this.commands.checkPermissions();
    }
    /**
     * removeDeliveredNotifications
     * @param identifiers Array of notification identifiers
     */
    removeDeliveredNotifications(identifiers) {
        return this.commands.removeDeliveredNotifications(identifiers);
    }
    /**
     * getDeliveredNotifications
     */
    getDeliveredNotifications() {
        return this.commands.getDeliveredNotifications();
    }
    /**
     * Obtain the events registry instance
     */
    events() {
        return this.eventsRegistry;
    }
}
exports.NotificationsIOS = NotificationsIOS;
