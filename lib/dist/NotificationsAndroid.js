"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsAndroid = void 0;
const react_native_1 = require("react-native");
class NotificationsAndroid {
    commands;
    constructor(commands) {
        this.commands = commands;
        return new Proxy(this, {
            get(target, name) {
                if (react_native_1.Platform.OS === 'android') {
                    return target[name];
                }
                else {
                    return () => { };
                }
            }
        });
    }
    /**
    * Refresh FCM token
    */
    registerRemoteNotifications() {
        this.commands.refreshToken();
    }
    /**
     * setNotificationChannel
     */
    setNotificationChannel(notificationChannel) {
        return this.commands.setNotificationChannel(notificationChannel);
    }
}
exports.NotificationsAndroid = NotificationsAndroid;
