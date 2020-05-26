"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Notification_1 = require("./Notification");
const NotificationIOS_1 = require("./NotificationIOS");
const NotificationAndroid_1 = require("./NotificationAndroid");
describe('Notification', () => {
    it('Should create notification with payload', () => {
        const payload = { p: 'p' };
        const notification = new Notification_1.Notification(payload);
        expect(notification.payload).toEqual(payload);
    });
    it('Should create iOS notification with identifier', () => {
        const payload = { identifier: 'identifier' };
        const notification = new NotificationIOS_1.NotificationIOS(payload);
        expect(notification.identifier).toEqual(payload.identifier);
    });
    it('Should create Android notification with identifier', () => {
        const payload = { 'google.message_id': 'identifier' };
        const notification = new NotificationAndroid_1.NotificationAndroid(payload);
        expect(notification.identifier).toEqual('identifier');
    });
    it('Should return title from payload', () => {
        const payload = { title: 'title' };
        const notification = new Notification_1.Notification(payload);
        expect(notification.title).toEqual(payload.title);
    });
    it('Should return body from payload', () => {
        const payload = { body: 'body' };
        const notification = new Notification_1.Notification(payload);
        expect(notification.body).toEqual(payload.body);
    });
    it('Should return sound from payload', () => {
        const payload = { sound: 'sound.mp4' };
        const notification = new Notification_1.Notification(payload);
        expect(notification.sound).toEqual(payload.sound);
    });
    it('Should return badge from payload', () => {
        const payload = { badge: 1 };
        const notification = new Notification_1.Notification(payload);
        expect(notification.badge).toEqual(payload.badge);
    });
    it('Should return type from payload', () => {
        const payload = { type: 'type' };
        const notification = new Notification_1.Notification(payload);
        expect(notification.type).toEqual(payload.type);
    });
    it('Should return thread from payload', () => {
        const payload = { thread: 'thread' };
        const notification = new Notification_1.Notification(payload);
        expect(notification.thread).toEqual(payload.thread);
    });
});
