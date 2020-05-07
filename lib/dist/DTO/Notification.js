"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Notification {
    constructor(payload) {
        this.payload = payload;
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
    get badge() {
        return this.payload.badge;
    }
    get type() {
        return this.payload.type;
    }
    get thread() {
        return this.payload.thread;
    }
}
exports.Notification = Notification;
