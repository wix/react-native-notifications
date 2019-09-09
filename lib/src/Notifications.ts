import { NativeCommandsSender } from './adapters/NativeCommandsSender';
import { NativeEventsReceiver } from './adapters/NativeEventsReceiver';
import { Commands } from './commands/Commands';
import { EventsRegistry } from './events/EventsRegistry';
import { Notification } from './interfaces/Notification';
import { UniqueIdProvider } from './adapters/UniqueIdProvider';
import { CompletionCallbackWrapper } from './adapters/CompletionCallbackWrapper';
import { NotificationCategory } from './interfaces/NotificationCategory';

export class NotificationsRoot {
  private readonly nativeEventsReceiver: NativeEventsReceiver;
  private readonly nativeCommandsSender: NativeCommandsSender;
  private readonly commands: Commands;
  private readonly eventsRegistry: EventsRegistry;
  private readonly uniqueIdProvider: UniqueIdProvider;
  private readonly completionCallbackWrapper: CompletionCallbackWrapper;

  constructor() {
    this.nativeEventsReceiver = new NativeEventsReceiver();
    this.nativeCommandsSender = new NativeCommandsSender();
    this.completionCallbackWrapper = new CompletionCallbackWrapper(this.nativeCommandsSender);
    this.uniqueIdProvider = new UniqueIdProvider();
    this.commands = new Commands(
      this.nativeCommandsSender,
      this.uniqueIdProvider
    );
    this.eventsRegistry = new EventsRegistry(this.nativeEventsReceiver, this.completionCallbackWrapper);
  }

  /**
  * Request permissions to send remote notifications - iOS only
  */
  public requestPermissions() {
    return this.commands.requestPermissions();
  }

  /**
   * registerPushKit - iOS only
   */
  public registerPushKit() {
    return this.commands.registerPushKit();
  }
  
  /**
   * postLocalNotification
   */
  public postLocalNotification(notification: Notification, id: number) {
    return this.commands.postLocalNotification(notification, id);
  }

  /**
   * getInitialNotification
   */
  public getInitialNotification(): Promise<Notification> {
    return this.commands.getInitialNotification();
  }

  /**
   * setCategories
   */
  public setCategories(categories: [NotificationCategory?]) {
    this.commands.setCategories(categories);
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
   * cancelLocalNotification
  */
  public cancelLocalNotification(notificationId: string) {
    return this.commands.cancelLocalNotification(notificationId);
  }

  /**
   * cancelAllLocalNotifications
   */
  public cancelAllLocalNotifications() {
    this.commands.cancelAllLocalNotifications();
  }

  /**
   * isRegisteredForRemoteNotifications
   */
  public isRegisteredForRemoteNotifications(): Promise<boolean> {
    return this.commands.isRegisteredForRemoteNotifications();
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
   * Obtain the events registry instance
   */
  public events(): EventsRegistry {
    return this.eventsRegistry;
  }

  /**
   * getDeliveredNotifications
   */
  public getDeliveredNotifications(): Array<Notification> {
    return this.commands.getDeliveredNotifications();
  }
}
