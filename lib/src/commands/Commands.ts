import * as _ from 'lodash';
import { NativeCommandsSender } from '../adapters/NativeCommandsSender';
import { Notification } from '../DTO/Notification';
import { NotificationCategory } from '../interfaces/NotificationCategory';
import { NotificationPermissions } from '../interfaces/NotificationPermissions';
import { UniqueIdProvider } from '../adapters/UniqueIdProvider';

export class Commands {
  constructor(
    private readonly nativeCommandsSender: NativeCommandsSender,
    private readonly uniqueIdProvider: UniqueIdProvider
  ) {}

  public postLocalNotification(notification: Notification, id?: number) {
    const notificationId: number = id ? id : this.uniqueIdProvider.generate();
    const result = this.nativeCommandsSender.postLocalNotification(notification, notificationId);
    return result;
  }

  public async getInitialNotification(): Promise<Notification> {
    return this.nativeCommandsSender.getInitialNotification().then((payload) => {
      return new Notification(payload);
    });
  }

  public requestPermissions() {
    const result = this.nativeCommandsSender.requestPermissions();
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

  public getDeliveredNotifications(): Array<Notification> {
    return this.nativeCommandsSender.getDeliveredNotifications();
  }

  public refreshToken() {
    return this.nativeCommandsSender.refreshToken();
  }
}
