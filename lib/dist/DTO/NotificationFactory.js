"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Notification_1 = require("./Notification");
const NotificationIOS_1 = require("./NotificationIOS");
const NotificationAndroid_1 = require("./NotificationAndroid");
const react_native_1 = require("react-native");
class NotificationFactory {
    fromPayload(payload) {
        if (react_native_1.Platform.OS === 'ios') {
            return payload.aps ? new NotificationIOS_1.NotificationIOS(payload) : new Notification_1.Notification(payload);
        }
        else {
            return new NotificationAndroid_1.NotificationAndroid(payload);
        }
    }
}
exports.NotificationFactory = NotificationFactory;
