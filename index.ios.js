/**
 * @providesModule RNNotifications
 * @flow
 */
"use strict";
import { NativeModules, DeviceEventEmitter } from "react-native";
import Map from "core-js/library/es6/map";
let NativeRNNotifications = NativeModules.RNNotifications; // eslint-disable-line no-unused-vars

export const DEVICE_NOTIFICATION_RECEIVED_FOREGROUND_EVENT = "notificationReceivedForeground";
export const DEVICE_NOTIFICATION_RECEIVED_BACKGROUND_EVENT = "notificationReceivedBackground";
export const DEVICE_NOTIFICATION_OPENED_EVENT = "notificationOpened";

let _notificationHandlers = new Map();

export default class NotificationsIOS {
  /**
   * Attaches a listener to remote notification events while the app is running
   * in the foreground or the background.
   *
   * Valid events are:
   *
   * - `notificationReceivedForeground` : Fired when a notification (local / remote) is received when app is on foreground state.
   * - `notificationReceivedBackground`: Fired when a background notification is received.
   * - `notificationOpened`: Fired when a notification (local / remote) is opened.
   */
  static addEventListener(type: string, handler: Function) {
    if (type === DEVICE_NOTIFICATION_RECEIVED_FOREGROUND_EVENT ||
        type === DEVICE_NOTIFICATION_RECEIVED_BACKGROUND_EVENT ||
        type === DEVICE_NOTIFICATION_OPENED_EVENT) {
      let listener = DeviceEventEmitter.addListener(
        type,
        notification => handler(notification)
      );

      _notificationHandlers.set(handler, listener);
    }
  }

  /**
   * Removes the event listener. Do this in `componentWillUnmount` to prevent
   * memory leaks
   */
  static removeEventListener(type: string, handler: Function) {
    if (type === DEVICE_NOTIFICATION_RECEIVED_FOREGROUND_EVENT ||
        type === DEVICE_NOTIFICATION_RECEIVED_BACKGROUND_EVENT ||
        type === DEVICE_NOTIFICATION_OPENED_EVENT) {
      let listener = _notificationHandlers.get(handler);
      if (!listener) {
        return;
      }

      listener.remove();
      _notificationHandlers.delete(handler);
    }
  }
}
