"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeCommandsSender_1 = require("./adapters/NativeCommandsSender");
const NativeEventsReceiver_1 = require("./adapters/NativeEventsReceiver");
const Commands_1 = require("./commands/Commands");
const EventsRegistry_1 = require("./events/EventsRegistry");
const EventsRegistryIOS_1 = require("./events/EventsRegistryIOS");
const UniqueIdProvider_1 = require("./adapters/UniqueIdProvider");
const CompletionCallbackWrapper_1 = require("./adapters/CompletionCallbackWrapper");
const NotificationsIOS_1 = require("./NotificationsIOS");
const NotificationsAndroid_1 = require("./NotificationsAndroid");
const NotificationFactory_1 = require("./DTO/NotificationFactory");
class NotificationsRoot {
    constructor() {
        this.notificationFactory = new NotificationFactory_1.NotificationFactory();
        this.nativeEventsReceiver = new NativeEventsReceiver_1.NativeEventsReceiver(this.notificationFactory);
        this.nativeCommandsSender = new NativeCommandsSender_1.NativeCommandsSender();
        this.completionCallbackWrapper = new CompletionCallbackWrapper_1.CompletionCallbackWrapper(this.nativeCommandsSender);
        this.uniqueIdProvider = new UniqueIdProvider_1.UniqueIdProvider();
        this.commands = new Commands_1.Commands(this.nativeCommandsSender, this.uniqueIdProvider, this.notificationFactory);
        this.eventsRegistry = new EventsRegistry_1.EventsRegistry(this.nativeEventsReceiver, this.completionCallbackWrapper);
        this.eventsRegistryIOS = new EventsRegistryIOS_1.EventsRegistryIOS(this.nativeEventsReceiver);
        this._ios = new NotificationsIOS_1.NotificationsIOS(this.commands, this.eventsRegistryIOS);
        this._android = new NotificationsAndroid_1.NotificationsAndroid(this.commands);
    }
    /**
     * registerRemoteNotifications
     */
    registerRemoteNotifications() {
        this.ios.registerRemoteNotifications();
        this.android.registerRemoteNotifications();
    }
    /**
     * postLocalNotification
     */
    postLocalNotification(notification, id) {
        return this.commands.postLocalNotification(notification, id);
    }
    /**
     * getInitialNotification
     */
    getInitialNotification() {
        return this.commands.getInitialNotification();
    }
    /**
     * setCategories
     */
    setCategories(categories) {
        this.commands.setCategories(categories);
    }
    /**
     * cancelLocalNotification
    */
    cancelLocalNotification(notificationId) {
        return this.commands.cancelLocalNotification(notificationId);
    }
    /**
     * removeAllDeliveredNotifications
     */
    removeAllDeliveredNotifications() {
        return this.commands.removeAllDeliveredNotifications();
    }
    /**
     * isRegisteredForRemoteNotifications
     */
    isRegisteredForRemoteNotifications() {
        return this.commands.isRegisteredForRemoteNotifications();
    }
    /**
     * setNotificationChannel
     */
    setNotificationChannel(notificationChannel) {
        return this.android.setNotificationChannel(notificationChannel);
    }
    /**
     * Obtain the events registry instance
     */
    events() {
        return this.eventsRegistry;
    }
    /**
     * ios/android getters
     */
    get ios() {
        return this._ios;
    }
    get android() {
        return this._android;
    }
}
exports.NotificationsRoot = NotificationsRoot;
