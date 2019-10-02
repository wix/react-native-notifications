import { NativeCommandsSender } from './adapters/NativeCommandsSender';
import { NativeEventsReceiver } from './adapters/NativeEventsReceiver';
import { Commands } from './commands/Commands';
import { EventsRegistry } from './events/EventsRegistry';
import { EventsRegistryIOS } from './events/EventsRegistryIOS';
import { Notification } from './DTO/Notification';
import { UniqueIdProvider } from './adapters/UniqueIdProvider';
import { CompletionCallbackWrapper } from './adapters/CompletionCallbackWrapper';
import { NotificationCategory } from './interfaces/NotificationCategory';
import { NotificationsIOS } from './NotificationsIOS';
import { NotificationsAndroid } from './NotificationsAndroid';

export class NotificationsRoot {
  public readonly ios: NotificationsIOS;
  public readonly android: NotificationsAndroid;

  private readonly nativeEventsReceiver: NativeEventsReceiver;
  private readonly nativeCommandsSender: NativeCommandsSender;
  private readonly commands: Commands;
  private readonly eventsRegistry: EventsRegistry;
  private readonly eventsRegistryIOS: EventsRegistryIOS;
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
    this.eventsRegistryIOS = new EventsRegistryIOS(this.nativeEventsReceiver);

    this.ios = new NotificationsIOS(this.commands, this.eventsRegistryIOS);
    this.android = new NotificationsAndroid(this.commands);
  }

  /**
   * registerRemoteNotifications
   */
  public registerRemoteNotifications() {
    this.ios.registerRemoteNotifications();
    this.android.registerRemoteNotifications();
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
   * cancelLocalNotification
  */
  public cancelLocalNotification(notificationId: string) {
    return this.commands.cancelLocalNotification(notificationId);
  }

  /**
   * isRegisteredForRemoteNotifications
   */
  public isRegisteredForRemoteNotifications(): Promise<boolean> {
    return this.commands.isRegisteredForRemoteNotifications();
  }

  /**
   * Obtain the events registry instance
   */
  public events(): EventsRegistry {
    return this.eventsRegistry;
  }
}
