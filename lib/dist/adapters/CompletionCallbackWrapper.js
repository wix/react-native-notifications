"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
class CompletionCallbackWrapper {
    constructor(nativeCommandsSender) {
        this.nativeCommandsSender = nativeCommandsSender;
    }
    wrapReceivedBackgroundCallback(callback) {
        return (notification) => {
            if (!this.applicationIsVisible()) {
                this.wrapReceivedAndInvoke(callback, notification);
            }
        };
    }
    wrapReceivedForegroundCallback(callback) {
        return (notification) => {
            if (this.applicationIsVisible()) {
                this.wrapReceivedAndInvoke(callback, notification);
            }
        };
    }
    wrapReceivedAndInvoke(callback, notification) {
        const completion = (response) => {
            if (react_native_1.Platform.OS === 'ios') {
                this.nativeCommandsSender.finishPresentingNotification(notification.identifier, response);
            }
        };
        callback(notification, completion);
    }
    wrapOpenedCallback(callback) {
        return (notification, _completion, actionResponse) => {
            const completion = () => {
                if (react_native_1.Platform.OS === 'ios') {
                    this.nativeCommandsSender.finishHandlingAction(notification.identifier);
                }
            };
            callback(notification, completion, actionResponse);
        };
    }
    applicationIsVisible() {
        return react_native_1.AppState.currentState !== 'background';
    }
}
exports.CompletionCallbackWrapper = CompletionCallbackWrapper;
