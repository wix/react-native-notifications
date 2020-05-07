"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Notification_1 = require("./Notification");
const _ = require("lodash");
class NotificationIOS extends Notification_1.Notification {
    constructor(payload) {
        super(payload);
        this.identifier = this.payload.identifier;
    }
    get aps() {
        return this.payload.aps || {};
    }
    get alert() {
        if (_.isObject(this.aps.alert)) {
            return this.aps.alert;
        }
        else if (_.isString(this.aps.alert)) {
            return {
                body: this.aps.alert
            };
        }
    }
    get title() {
        return this.alert.title;
    }
    get body() {
        return this.alert.body;
    }
    get sound() {
        return this.aps.sound;
    }
    get badge() {
        return this.aps.badge;
    }
    get thread() {
        return this.aps.thread;
    }
}
exports.NotificationIOS = NotificationIOS;
