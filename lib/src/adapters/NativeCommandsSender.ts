import { NativeModules } from 'react-native';
import { Notification, NotificationCategory, NotificationPermissions, NotificationCompletion } from '../interfaces/Notification';

interface NativeCommandsModule {
  getInitialNotification(): Promise<Notification>;
  postLocalNotification(notification: Notification, id: number): void;
  requestPermissions(): void;
  abandonPermissions(): void;
  registerPushKit(): void;
  getBadgeCount(): Promise<number>;
  setBadgeCount(count: number): void;
  cancelLocalNotification(notificationId: string): void;
  cancelAllLocalNotifications(): void;
  isRegisteredForRemoteNotifications(): Promise<boolean>;
  checkPermissions(): Promise<NotificationPermissions>;
  removeDeliveredNotifications(identifiers: Array<string>): void;
  removeAllDeliveredNotifications(): void;
  getDeliveredNotifications(): Array<Notification>;
  setCategories(categories: [NotificationCategory?]): void;
  finishPresentingNotification(notificationId: string, callback: NotificationCompletion): void;
  finishHandlingAction(notificationId: string): void;
}

export class NativeCommandsSender {
  private readonly nativeCommandsModule: NativeCommandsModule;
  constructor() {
    this.nativeCommandsModule = NativeModules.RNBridgeModule;
  }

  postLocalNotification(notification: Notification, id: number) {
    return this.nativeCommandsModule.postLocalNotification(notification, id);
  }

  getInitialNotification(): Promise<Notification> {
    return this.nativeCommandsModule.getInitialNotification();
  }
  
  requestPermissions() {
    return this.nativeCommandsModule.requestPermissions();
  }

  abandonPermissions() {
    return this.nativeCommandsModule.abandonPermissions();
  }

  registerPushKit() {
    return this.nativeCommandsModule.registerPushKit();
  }

  setCategories(categories: [NotificationCategory?]) {
    this.nativeCommandsModule.setCategories(categories);
  }

  getBadgeCount(): Promise<number> {
    return this.nativeCommandsModule.getBadgeCount();
  }

  setBadgeCount(count: number) {
    this.nativeCommandsModule.setBadgeCount(count);
  }

  cancelLocalNotification(notificationId: string) {
    this.nativeCommandsModule.cancelLocalNotification(notificationId);
  }

  cancelAllLocalNotifications() {
    this.nativeCommandsModule.cancelAllLocalNotifications();
  }

  isRegisteredForRemoteNotifications(): Promise<any> {
    return this.nativeCommandsModule.isRegisteredForRemoteNotifications();
  }

  checkPermissions() {
    return this.nativeCommandsModule.checkPermissions();
  }

  removeAllDeliveredNotifications() {
    return this.nativeCommandsModule.removeAllDeliveredNotifications();
  }

  removeDeliveredNotifications(identifiers: Array<string>) {
    return this.nativeCommandsModule.removeDeliveredNotifications(identifiers);
  }

  public getDeliveredNotifications(): Array<Notification> {
    return this.nativeCommandsModule.getDeliveredNotifications();
  }

  finishPresentingNotification(notificationId: string, notificationCompletion: NotificationCompletion): void {
    this.nativeCommandsModule.finishPresentingNotification(notificationId, notificationCompletion);
  }

  finishHandlingAction(notificationId: string): void {
    this.nativeCommandsModule.finishHandlingAction(notificationId);
  }
}
