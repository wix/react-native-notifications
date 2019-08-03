import { NativeModules, NativeEventEmitter, EventEmitter, EmitterSubscription } from 'react-native';
import {
  Registered, RegistrationError, RegisteredPushKit
} from '../interfaces/NotificationEvents';
import { Notification } from '../interfaces/Notification';

export class NativeEventsReceiver {
  private emitter: EventEmitter;
  constructor() {
    this.emitter = new NativeEventEmitter(NativeModules.RNEventEmitter);
  }

  public registerRemoteNotificationsRegistered(callback: (event: Registered) => void): EmitterSubscription {
    return this.emitter.addListener('remoteNotificationsRegistered', callback);
  }

  public registerPushKitRegistered(callback: (event: RegisteredPushKit) => void): EmitterSubscription {
    return this.emitter.addListener('pushKitRegistered', callback);
  }

  public registerRemoteNotificationReceived(callback: (notification: Notification) => void): EmitterSubscription {
    return this.emitter.addListener('notificationReceived', callback);
  }

  public registerPushKitNotificationReceived(callback: (event: object) => void): EmitterSubscription {
    return this.emitter.addListener('pushKitNotificationReceived', callback);
  }

  public registerRemoteNotificationOpened(callback: (response: Notification, completion: () => void) => void): EmitterSubscription {
    return this.emitter.addListener('notificationOpened', callback);
  }

  public registerRemoteNotificationsRegistrationFailed(callback: (event: RegistrationError) => void): EmitterSubscription {
    return this.emitter.addListener('remoteNotificationsRegistrationFailed', callback);
  }
}
