"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotificationIOS_1 = require("./NotificationIOS");
const NotificationAndroid_1 = require("./NotificationAndroid");
const react_native_1 = require("react-native");
class NotificationFactory {
    fromPayload(payload) {
        if (react_native_1.Platform.OS === 'ios') {
            return new NotificationIOS_1.NotificationIOS(payload);
        }
        else {
            return new NotificationAndroid_1.NotificationAndroid(payload);
        }
    }
}
exports.NotificationFactory = NotificationFactory;
