"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationActionResponse = void 0;
class NotificationActionResponse {
    identifier;
    text;
    constructor(response) {
        this.identifier = response.identifier;
        this.text = response.text;
    }
}
exports.NotificationActionResponse = NotificationActionResponse;
