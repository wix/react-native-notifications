import * as _ from 'lodash';
import { NativeCommandsSender } from '../adapters/NativeCommandsSender';
import { Notification } from '../interfaces/Notification';

export class Commands {
  constructor(
    private readonly nativeCommandsSender: NativeCommandsSender
  ) {}

  public sendLocalNotification(notification: Notification) {
    const notificationId = 'id';
    const result = this.nativeCommandsSender.sendLocalNotification(notification, notificationId);
    return result;
  }

  public getInitialNotification() {
    const result = this.nativeCommandsSender.getInitialNotification();
    return result;
  }
  
  public requestPermissions() {
    const result = this.nativeCommandsSender.requestPermissions();
    return result;
  }
}
