"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompletionCallbackWrapper = void 0;
const react_native_1 = require("react-native");
class CompletionCallbackWrapper {
    nativeCommandsSender;
    constructor(nativeCommandsSender) {
        this.nativeCommandsSender = nativeCommandsSender;
    }
    wrapReceivedBackgroundCallback(callback) {
        return (notification) => {
            this.wrapReceivedAndInvoke(callback, notification, true);
        };
    }
    wrapReceivedForegroundCallback(callback) {
        return (notification) => {
            this.wrapReceivedAndInvoke(callback, notification, false);
        };
    }
    wrapReceivedAndInvoke(callback, notification, background) {
        const completion = (response) => {
            if (react_native_1.Platform.OS === 'ios') {
                const identifier = notification.identifier;
                if (background) {
                    this.nativeCommandsSender.finishHandlingBackgroundAction(identifier, response);
                }
                else {
                    this.nativeCommandsSender.finishPresentingNotification(identifier, response);
                }
            }
        };
        callback(notification, completion);
    }
    wrapOpenedCallback(callback) {
        return (notification, actionResponse) => {
            const completion = () => {
                if (react_native_1.Platform.OS === 'ios') {
                    this.nativeCommandsSender.finishHandlingAction(notification.identifier);
                }
            };
            callback(notification, completion, actionResponse);
        };
    }
}
exports.CompletionCallbackWrapper = CompletionCallbackWrapper;
