import {NativeModules, DeviceEventEmitter} from "react-native";
import NotificationAndroid from "./notification";

const RNNotifications = NativeModules.WixRNNotifications;

let notificationReceivedListener;
let notificationOpenedListener;
let registrationTokenUpdateListener;

export class NotificationsAndroid {
  static setNotificationOpenedListener(listener) {
    notificationOpenedListener = DeviceEventEmitter.addListener("notificationOpened", (notification) => listener(new NotificationAndroid(notification)));
  }

  static clearNotificationOpenedListener() {
    if (notificationOpenedListener) {
      notificationOpenedListener.remove();
      notificationOpenedListener = null;
    }
  }

  static setNotificationReceivedListener(listener) {
    notificationReceivedListener = DeviceEventEmitter.addListener("notificationReceived", (notification) => listener(new NotificationAndroid(notification)));
  }

  static clearNotificationReceivedListener() {
    if (notificationReceivedListener) {
      notificationReceivedListener.remove();
      notificationReceivedListener = null;
    }
  }

  static setRegistrationTokenUpdateListener(listener) {
    registrationTokenUpdateListener = DeviceEventEmitter.addListener("remoteNotificationsRegistered", listener);
  }

  static clearRegistrationTokenUpdateListener() {
    if (registrationTokenUpdateListener) {
      registrationTokenUpdateListener.remove();
      registrationTokenUpdateListener = null;
    }
  }

  static refreshToken() {
    RNNotifications.refreshToken();
  }
}

export class PendingNotifications {
  static getInitialNotification() {
    return RNNotifications.getInitialNotification()
      .then((rawNotification) => {
        return new NotificationAndroid(rawNotification);
      });
  }
}
