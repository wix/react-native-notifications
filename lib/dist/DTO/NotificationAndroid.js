"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationAndroid = void 0;
const Notification_1 = require("./Notification");
class NotificationAndroid extends Notification_1.Notification {
    constructor(payload) {
        super(payload);
        this.identifier = this.payload["google.message_id"];
    }
    get title() {
        return this.payload.title;
    }
    get body() {
        return this.payload.body;
    }
    get sound() {
        return this.payload.sound;
    }
}
exports.NotificationAndroid = NotificationAndroid;
