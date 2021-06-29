import { NativeModules } from 'react-native';
import { Notification } from '../DTO/Notification';
import { NotificationCompletion } from '../interfaces/NotificationCompletion';
import { NotificationPermissions } from '../interfaces/NotificationPermissions';
import { NotificationCategory } from '../interfaces/NotificationCategory';
import { NotificationChannel } from '../interfaces/NotificationChannel';
import { NotificationPermissionOptions } from '../interfaces/NotificationPermissions';

interface NativeCommandsModule {
  getInitialNotification(): Promise<Object>;
  postLocalNotification(notification: Notification, id: number): void;
  requestPermissions(options: NotificationPermissionOptions): void;
  abandonPermissions(): void;
  refreshToken(): void;
  registerPushKit(): void;
  getBadgeCount(): Promise<number>;
  setBadgeCount(count: number): void;
  cancelLocalNotification(notificationId: string): void;
  cancelAllLocalNotifications(): void;
  isRegisteredForRemoteNotifications(): Promise<boolean>;
  checkPermissions(): Promise<NotificationPermissions>;
  removeDeliveredNotifications(identifiers: Array<string>): void;
  removeAllDeliveredNotifications(): void;
  getDeliveredNotifications(): Promise<Notification[]>;
  setCategories(categories: [NotificationCategory?]): void;
  finishPresentingNotification(notificationId: string, callback: NotificationCompletion): void;
  finishHandlingAction(notificationId: string): void;
  setNotificationChannel(notificationChannel: NotificationChannel): void;
  finishHandlingBackgroundAction(notificationId: string, backgroundFetchResult: string): void;
}

export class NativeCommandsSender {
  private readonly nativeCommandsModule: NativeCommandsModule;
  constructor() {
    this.nativeCommandsModule = NativeModules.RNBridgeModule;
  }

  postLocalNotification(notification: Notification, id: number) {
    return this.nativeCommandsModule.postLocalNotification(notification, id);
  }

  getInitialNotification(): Promise<Object> {
    return this.nativeCommandsModule.getInitialNotification();
  }

  requestPermissions(options?: NotificationPermissionOptions) {
    return this.nativeCommandsModule.requestPermissions(options || {});
  }

  abandonPermissions() {
    return this.nativeCommandsModule.abandonPermissions();
  }

  refreshToken() {
    this.nativeCommandsModule.refreshToken();
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

  public getDeliveredNotifications(): Promise<Notification[]> {
    return this.nativeCommandsModule.getDeliveredNotifications();
  }

  finishPresentingNotification(notificationId: string, notificationCompletion: NotificationCompletion): void {
    this.nativeCommandsModule.finishPresentingNotification(notificationId, notificationCompletion);
  }

  finishHandlingAction(notificationId: string): void {
    this.nativeCommandsModule.finishHandlingAction(notificationId);
  }

  setNotificationChannel(notificationChannel: NotificationChannel) {
    this.nativeCommandsModule.setNotificationChannel(notificationChannel);
  }

  finishHandlingBackgroundAction(notificationId: string, backgroundFetchResult: string): void {
    this.nativeCommandsModule.finishHandlingBackgroundAction(notificationId, backgroundFetchResult);
  }
}
