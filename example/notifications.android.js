require('react');
import {NativeModules, DeviceEventEmitter} from 'react-native';

const RNNotifications = NativeModules.WixRNNotification;

let notificationReceivedListener;
let notificationOpenedListener;
let registrationTokenUpdateListener;

/** A wrapper to align Android with iOS in terms on notification structure. */
class NotificationAndroid {

  constructor(notification) {
    this.data = notification;
  }

  getData() {
    return this.data;
  }

  getTitle() {
    return this.data.title;
  }

  getMessage() {
    return this.data.body;
  }
}

export class NotificationsAndroid {
  static setRegistrationTokenUpdateListener(listener) {
    registrationTokenUpdateListener = DeviceEventEmitter.addListener('remoteNotificationsRegistered', listener);
  }

  static clearRegistrationTokenUpdateListener() {
    if (registrationTokenUpdateListener) {
      registrationTokenUpdateListener.remove();
      registrationTokenUpdateListener = null;
    }
  }

  static setNotificationOpenedListener(listener) {
    notificationOpenedListener = DeviceEventEmitter.addListener('notificationOpened', (notification) => listener(new NotificationAndroid(notification)));
  }


  static setNotificationReceivedListener(listener) {
    notificationReceivedListener = DeviceEventEmitter.addListener('notificationReceived', (notification) => listener(new NotificationAndroid(notification)));
  }

  static clearNotificationOpenedListener() {
    if (notificationOpenedListener) {
      notificationOpenedListener.remove();
      notificationOpenedListener = null;
    }
  }

  static clearNotificationReceivedListener() {
    if (notificationReceivedListener) {
      notificationReceivedListener.remove();
      notificationReceivedListener = null;
    }
  }
}

  export class PendingNotifications {
  static async getInitialNotification() {
    return new NotificationAndroid(await RNNotifications.getInitialNotification());
  }
}
