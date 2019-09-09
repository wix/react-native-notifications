import { Notification } from './DTO/Notification';
import { Commands } from './commands/Commands';
import { Platform } from 'react-native';

export class NotificationsIOS {
  constructor(private readonly commands: Commands) {
    return new Proxy(this, {
      get(target, name) {
        if (Platform.OS === 'ios') {
          return (target as any)[name];
        } else {
          return () => {};
        }
      }
    });
  }

  /**
  * Request permissions to send remote notifications
  */
  public requestPermissions() {
    return this.commands.requestPermissions();
  }

  /**
  * Unregister for all remote notifications received via Apple Push Notification service
  */
  public abandonPermissions() {
    return this.commands.abandonPermissions();
  }

  /**
 * registerPushKit
 */
  public registerPushKit() {
    return this.commands.registerPushKit();
  }

  /**
   * getBadgesCount
   */
  public getBadgeCount(): Promise<number> {
    return this.commands.getBadgeCount();
  }

  /**
   * setBadgeCount
   * @param count number of the new badge count
   */
  public setBadgeCount(count: number) {
    return this.commands.setBadgeCount(count);
  }

  /**
   * cancelAllLocalNotifications
   */
  public cancelAllLocalNotifications() {
    this.commands.cancelAllLocalNotifications();
  }

  /**
   * checkPermissions
   */
  public checkPermissions() {
    return this.commands.checkPermissions();
  }

  /**
   * removeAllDeliveredNotifications
   */
  public removeAllDeliveredNotifications() {
    return this.commands.removeAllDeliveredNotifications();
  }

  /**
   * removeDeliveredNotifications
   * @param identifiers Array of notification identifiers
   */
  public removeDeliveredNotifications(identifiers: Array<string>) {
    return this.commands.removeDeliveredNotifications(identifiers);
  }

  /**
   * getDeliveredNotifications
   */
  public getDeliveredNotifications(): Array<Notification> {
    return this.commands.getDeliveredNotifications();
  }
}
