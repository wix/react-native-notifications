/**
 * @flow
 */
"use strict";
import { NativeModules, NativeEventEmitter } from "react-native";
import Map from "core-js/library/es6/map";
import uuid from "uuid";
const {RNNotifications} = NativeModules; // eslint-disable-line no-unused-vars
const rnnotificationsEmitter = new NativeEventEmitter(RNNotifications);
import IOSNotification from "./notification.ios";

export const DEVICE_REMOTE_NOTIFICATIONS_REGISTERED_EVENT = "remoteNotificationsRegistered";
export const DEVICE_REMOTE_NOTIFICATIONS_REGISTRATION_FAILED_EVENT = "remoteNotificationsRegistrationFailed";
export const DEVICE_PUSH_KIT_REGISTERED_EVENT = "pushKitRegistered";
export const DEVICE_NOTIFICATION_RECEIVED_FOREGROUND_EVENT = "notificationReceivedForeground";
export const DEVICE_NOTIFICATION_RECEIVED_BACKGROUND_EVENT = "notificationReceivedBackground";
export const DEVICE_NOTIFICATION_OPENED_EVENT = "notificationOpened";

const DEVICE_NOTIFICATION_ACTION_RECEIVED = "notificationActionReceived";

const _exportedEvents = [
  DEVICE_REMOTE_NOTIFICATIONS_REGISTERED_EVENT,
  DEVICE_REMOTE_NOTIFICATIONS_REGISTRATION_FAILED_EVENT,
  DEVICE_PUSH_KIT_REGISTERED_EVENT,
  DEVICE_NOTIFICATION_RECEIVED_FOREGROUND_EVENT,
  DEVICE_NOTIFICATION_RECEIVED_BACKGROUND_EVENT,
  DEVICE_NOTIFICATION_OPENED_EVENT
];
const _notificationHandlers = new Map();
const _actionHandlers = new Map();
let _actionListener;

export class NotificationAction {
  options: Object;
  handler: Function;

  constructor(options: Object, handler: Function) {
    this.options = options;
    this.handler = handler;
  }
}

export class NotificationCategory {
  options: Object;

  constructor(options: Object) {
    this.options = options;
  }
}

export default class NotificationsIOS {
  /**
   * Attaches a listener to remote notification events while the app is running
   * in the foreground or the background.
   *
   * Valid events are:
   *
   * - `remoteNotificationsRegistered` : Fired when the user registers for remote notifications. The handler will be invoked with a hex string representing the deviceToken.
   * - `notificationReceivedForeground` : Fired when a notification (local / remote) is received when app is on foreground state.
   * - `notificationReceivedBackground`: Fired when a background notification is received.
   * - `notificationOpened`: Fired when a notification (local / remote) is opened.
   */
  static addEventListener(type: string, handler: Function) {
    if (_exportedEvents.indexOf(type) !== -1) {
      let listener;

      if (type === DEVICE_REMOTE_NOTIFICATIONS_REGISTERED_EVENT) {
        listener = rnnotificationsEmitter.addListener(
          DEVICE_REMOTE_NOTIFICATIONS_REGISTERED_EVENT,
          registration => handler(registration.deviceToken)
        );
      } else if (type === DEVICE_REMOTE_NOTIFICATIONS_REGISTRATION_FAILED_EVENT) {
        listener = rnnotificationsEmitter.addListener(
          DEVICE_REMOTE_NOTIFICATIONS_REGISTRATION_FAILED_EVENT,
          error => handler(error)
        );
      } else if (type === DEVICE_PUSH_KIT_REGISTERED_EVENT) {
        listener = rnnotificationsEmitter.addListener(
          DEVICE_PUSH_KIT_REGISTERED_EVENT,
          registration => handler(registration.pushKitToken)
        );
      } else {
        listener = rnnotificationsEmitter.addListener(
          type,
          notification => handler(new IOSNotification(notification))
        );
      }

      _notificationHandlers.set(handler, listener);
    }
  }

  /**
   * Removes the event listener. Do this in `componentWillUnmount` to prevent
   * memory leaks
   */
  static removeEventListener(type: string, handler: Function) {
    if (_exportedEvents.indexOf(type) !== -1) {
      const listener = _notificationHandlers.get(handler);
      if (listener) {
        listener.remove();
        _notificationHandlers.delete(handler);
      }

    }
  }

  static _actionHandlerDispatcher(action: Object) {
    const actionHandler = _actionHandlers.get(action.identifier);

    if (actionHandler) {
      action.notification = new IOSNotification(action.notification);

      actionHandler(action, () => {
        RNNotifications.completionHandler(action.completionKey);
      });
    }
  }

  /**
   * Sets the notification categories
   */
  static requestPermissions(categories: Array<NotificationCategory>) {
    let notificationCategories = [];

    if (categories) {
      // subscribe once for all actions
      _actionListener = rnnotificationsEmitter.addListener(DEVICE_NOTIFICATION_ACTION_RECEIVED, this._actionHandlerDispatcher.bind(this));

      notificationCategories = categories.map(category => {
        return Object.assign({}, category.options, {
          actions: category.options.actions.map(action => {
            // subscribe to action event
            _actionHandlers.set(action.options.identifier, action.handler);

            return action.options;
          })
        });
      });
    }

    RNNotifications.requestPermissionsWithCategories(notificationCategories);
  }

  /**
   * Unregister for all remote notifications received via Apple Push Notification service.
   */
  static abandonPermissions() {
    RNNotifications.abandonPermissions();
  }

  /**
   * Removes the event listener. Do this in `componentWillUnmount` to prevent
   * memory leaks
   */
  static resetCategories() {
    if (_actionListener) {
      _actionListener.remove();
    }

    _actionHandlers.clear();
  }

  static getBadgesCount(callback: Function) {
    RNNotifications.getBadgesCount(callback);
  }

  static setBadgesCount(count: number) {
    RNNotifications.setBadgesCount(count);
  }

  static registerPushKit() {
    RNNotifications.registerPushKit();
  }

  static backgroundTimeRemaining(callback: Function) {
    RNNotifications.backgroundTimeRemaining(callback);
  }

  static consumeBackgroundQueue() {
    RNNotifications.consumeBackgroundQueue();
  }

  static log(message: string) {
    RNNotifications.log(message);
  }

  static async getInitialNotification() {
    const notification = await RNNotifications.getInitialNotification();
    if (notification) {
      return new IOSNotification(notification);
    } else {
      return undefined;
    }
  }

  /**
   * Presenting local notification
   *
   * notification is an object containing:
   *
   * - `alertBody` : The message displayed in the notification alert.
   * - `alertTitle` : The message title displayed in the notification.
   * - `alertAction` : The "action" displayed beneath an actionable notification. Defaults to "view";
   * - `soundName` : The sound played when the notification is fired (optional).
   * - `silent`    : If true, the notification sound will be suppressed (optional).
   * - `category`  : The category of this notification, required for actionable notifications (optional).
   * - `userInfo`  : An optional object containing additional notification data.
   * - `fireDate` : The date and time when the system should deliver the notification. if not specified, the notification will be dispatched immediately.
   */
  static localNotification(notification: Object) {
    const notificationId = uuid.v4();
    RNNotifications.localNotification(notification, notificationId);

    return notificationId;
  }

  static cancelLocalNotification(notificationId: String) {
    RNNotifications.cancelLocalNotification(notificationId);
  }

  static cancelAllLocalNotifications() {
    RNNotifications.cancelAllLocalNotifications();
  }

  static isRegisteredForRemoteNotifications() {
    return RNNotifications.isRegisteredForRemoteNotifications();
  }

  static checkPermissions() {
    return RNNotifications.checkPermissions();
  }

  /**
   * Remove all delivered notifications from Notification Center
   */
  static removeAllDeliveredNotifications() {
    return RNNotifications.removeAllDeliveredNotifications();
  }

  /**
   * Removes the specified notifications from Notification Center
   *
   * @param identifiers Array of notification identifiers
   */
  static removeDeliveredNotifications(identifiers: Array<String>) {
    return RNNotifications.removeDeliveredNotifications(identifiers);
  }

  /**
   * Provides you with a list of the app’s notifications that are still displayed in Notification Center
   *
   * @param callback Function which receive an array of delivered notifications
   *
   *  A delivered notification is an object containing:
   *
   * - `identifier`  : The identifier of this notification.
   * - `alertBody` : The message displayed in the notification alert.
   * - `alertTitle` : The message title displayed in the notification.
   * - `category`  : The category of this notification, if has one.
   * - `userInfo`  : An optional object containing additional notification data.
   * - `thread-id`  : The thread identifier of this notification, if has one.
   * - `fireDate` : The date and time when the system should deliver the notification. if not specified, the notification will be dispatched immediately.
   */
  static getDeliveredNotifications(callback: (notifications: Array<Object>) => void) {
    return RNNotifications.getDeliveredNotifications(callback);
  }
}
