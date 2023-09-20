"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
class Notification {
    identifier;
    payload;
    constructor(payload) {
        this.payload = payload;
        this.identifier = this.payload.identifier;
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
