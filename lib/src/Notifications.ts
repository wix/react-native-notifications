import { NativeCommandsSender } from './adapters/NativeCommandsSender';
import { NativeEventsReceiver } from './adapters/NativeEventsReceiver';
import { Commands } from './commands/Commands';
import { EventsRegistry } from './events/EventsRegistry';
import { Notification } from './interfaces/Notification';

export class NotificationsRoot {
  private readonly nativeEventsReceiver: NativeEventsReceiver;
  private readonly nativeCommandsSender: NativeCommandsSender;
  private readonly commands: Commands;
  private readonly eventsRegistry: EventsRegistry;

  constructor() {
    this.nativeEventsReceiver = new NativeEventsReceiver();
    this.nativeCommandsSender = new NativeCommandsSender();
    this.commands = new Commands(
      this.nativeCommandsSender
    );
    this.eventsRegistry = new EventsRegistry(this.nativeEventsReceiver);
  }

  /**
  * Request permissions to send remote notifications - iOS only
  */
  public requestPermissions(): Promise<any> {
    return this.commands.requestPermissions();
  }

  /**
   * Reset the app to a new layout
   */
  public localNotification(notification: Notification): Promise<any> {
    return this.commands.sendLocalNotification(notification);
  }

  /**
   * 
   */
  public getInitialNotification(): Promise<Notification> {
    return this.commands.getInitialNotification();
  }

  /**
   * Obtain the events registry instance
   */
  public events(): EventsRegistry {
    return this.eventsRegistry;
  }
}
