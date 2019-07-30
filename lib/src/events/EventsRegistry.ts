import { EmitterSubscription } from 'react-native';
import { NativeEventsReceiver } from '../adapters/NativeEventsReceiver';
import {
  NotificationRegisteredEvent,
  NotificationReceived
} from '../interfaces/NotificationEvents';

export class EventsRegistry {
  constructor(private nativeEventsReceiver: NativeEventsReceiver) { }

  public registerRemoteNotificationsRegistered(callback: (event: NotificationRegisteredEvent) => void): EmitterSubscription {
    return this.nativeEventsReceiver.registerRemoteNotificationsRegistered(callback);
  }

  public registerNotificationsReceived(callback: (event: NotificationReceived) => void): EmitterSubscription {
    return this.nativeEventsReceiver.registerRemoteNotificationsReceived(callback);
  }
}
