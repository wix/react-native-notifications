import {NativeModules, DeviceEventEmitter} from "react-native";
import NotificationAndroid from "./notification";

const RNNotifications = NativeModules.WixRNNotifications;

let notificationReceivedListener;
let notificationOpenedListener;
let registrationTokenUpdateListener;

export class NotificationsAndroid {
  static setRegistrationTokenUpdateListener(listener) {
    registrationTokenUpdateListener = DeviceEventEmitter.addListener("remoteNotificationsRegistered", listener);
  }

  static clearRegistrationTokenUpdateListener() {
    if (registrationTokenUpdateListener) {
      registrationTokenUpdateListener.remove();
      registrationTokenUpdateListener = null;
    }
  }

  static setNotificationOpenedListener(listener) {
    notificationOpenedListener = DeviceEventEmitter.addListener("notificationOpened", (notification) => listener(new NotificationAndroid(notification)));
  }


  static setNotificationReceivedListener(listener) {
    notificationReceivedListener = DeviceEventEmitter.addListener("notificationReceived", (notification) => listener(new NotificationAndroid(notification)));
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

  static refreshToken() {
    RNNotifications.refreshToken();
  }
}

export class PendingNotifications {
  static async getInitialNotification() {
    return new NotificationAndroid(await RNNotifications.getInitialNotification());
  }
}
