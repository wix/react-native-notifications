"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotificationCategory {
    constructor(identifier, actions) {
        this.identifier = identifier;
        this.actions = actions;
    }
}
exports.NotificationCategory = NotificationCategory;
class NotificationAction {
    constructor(identifier, activationMode, title, authenticationRequired, textInput) {
        this.identifier = identifier;
        this.activationMode = activationMode;
        this.title = title;
        this.authenticationRequired = authenticationRequired;
        this.textInput = textInput;
    }
}
exports.NotificationAction = NotificationAction;
