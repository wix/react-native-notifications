import { NativeModules, NativeEventEmitter, EventEmitter, EmitterSubscription } from 'react-native';
import {
  NotificationRegisteredEvent, NotificationReceived
} from '../interfaces/NotificationEvents';

export class NativeEventsReceiver {
  private emitter: EventEmitter;
  constructor() {
    this.emitter = new NativeEventEmitter(NativeModules.RNEventEmitter);
  }

  public registerRemoteNotificationsRegistered(callback: (event: NotificationRegisteredEvent) => void): EmitterSubscription {
    return this.emitter.addListener('remoteNotificationsRegistered', callback);
  }

  public registerRemoteNotificationReceived(callback: (event: NotificationReceived) => void): EmitterSubscription {
    return this.emitter.addListener('notificationReceivedForeground', callback);
  }
}
