"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Notifications_1 = require("./Notifications");
const notificationsSingleton = new Notifications_1.NotificationsRoot();
exports.Notifications = notificationsSingleton;
tslib_1.__exportStar(require("./DTO/Notification"), exports);
tslib_1.__exportStar(require("./interfaces/NotificationCategory"), exports);
