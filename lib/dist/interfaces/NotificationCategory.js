"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationAction = exports.NotificationCategory = void 0;
class NotificationCategory {
    identifier;
    actions;
    constructor(identifier, actions) {
        this.identifier = identifier;
        this.actions = actions;
    }
}
exports.NotificationCategory = NotificationCategory;
class NotificationAction {
    identifier;
    activationMode;
    title;
    authenticationRequired;
    textInput;
    constructor(identifier, activationMode, title, authenticationRequired, textInput) {
        this.identifier = identifier;
        this.activationMode = activationMode;
        this.title = title;
        this.authenticationRequired = authenticationRequired;
        this.textInput = textInput;
    }
}
exports.NotificationAction = NotificationAction;
