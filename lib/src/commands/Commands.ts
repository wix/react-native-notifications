import * as _ from 'lodash';
import { NativeCommandsSender } from '../adapters/NativeCommandsSender';
import { Notification } from '../DTO/Notification';
import { NotificationCategory } from '../interfaces/NotificationCategory';
import { NotificationChannel } from '../interfaces/NotificationChannel';
import { NotificationPermissions } from '../interfaces/NotificationPermissions';
import { UniqueIdProvider } from '../adapters/UniqueIdProvider';
import { NotificationFactory } from '../DTO/NotificationFactory';
import { NotificationPermissionOptions } from '../interfaces/NotificationPermissionOptions';

export class Commands {
  constructor(
    private readonly nativeCommandsSender: NativeCommandsSender,
    private readonly uniqueIdProvider: UniqueIdProvider,
    private readonly notificationFactory: NotificationFactory
  ) { }

  public postLocalNotification(notification: Notification, id?: number) {
    const notificationId: number = id ? id : this.uniqueIdProvider.generate();
    this.nativeCommandsSender.postLocalNotification(notification, notificationId);
    return notificationId;
  }

  public async getInitialNotification(): Promise<Notification | undefined> {
    return this.nativeCommandsSender.getInitialNotification().then((payload) => {
      if (payload) {
        return this.notificationFactory.fromPayload(payload);
      }

      return undefined;
    });
  }

  public requestPermissions(options?: NotificationPermissionOptions) {
    const result = this.nativeCommandsSender.requestPermissions(options);
    return result;
  }

  public abandonPermissions() {
    const result = this.nativeCommandsSender.abandonPermissions();
    return result;
  }

  public registerPushKit() {
    this.nativeCommandsSender.registerPushKit();
  }

  public setCategories(categories: [NotificationCategory?]) {
    this.nativeCommandsSender.setCategories(categories);
  }

  public getBadgeCount(): Promise<number> {
    return this.nativeCommandsSender.getBadgeCount();
  }

  public setBadgeCount(count: number) {
    this.nativeCommandsSender.setBadgeCount(count);
  }

  public cancelLocalNotification(notificationId: string) {
    this.nativeCommandsSender.cancelLocalNotification(notificationId);
  }

  public cancelAllLocalNotifications() {
    this.nativeCommandsSender.cancelAllLocalNotifications();
  }

  public isRegisteredForRemoteNotifications(): Promise<boolean> {
    return this.nativeCommandsSender.isRegisteredForRemoteNotifications();
  }

  public checkPermissions(): Promise<NotificationPermissions> {
    return this.nativeCommandsSender.checkPermissions();
  }

  public removeAllDeliveredNotifications() {
    this.nativeCommandsSender.removeAllDeliveredNotifications();
  }

  public removeDeliveredNotifications(identifiers: Array<string>) {
    return this.nativeCommandsSender.removeDeliveredNotifications(identifiers);
  }

  public getDeliveredNotifications(): Promise<Notification[]> {
    return this.nativeCommandsSender.getDeliveredNotifications();
  }

  public refreshToken() {
    this.nativeCommandsSender.refreshToken();
  }

  public setNotificationChannel(notificationChannel: NotificationChannel) {
    this.nativeCommandsSender.setNotificationChannel(notificationChannel);
  }
}
