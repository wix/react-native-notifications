import { NativeModules, NativeEventEmitter, EventEmitter, EmitterSubscription } from 'react-native';
import {
  Registered, RegistrationError, RegisteredPushKit
} from '../interfaces/NotificationEvents';
import { Notification } from '../DTO/Notification';
import { NotificationActionResponse } from '../interfaces/NotificationActionResponse';

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
    return this.emitter.addListener('notificationReceived', (payload) => {
      callback(new Notification(payload));
    });
  }

  public registerPushKitNotificationReceived(callback: (event: object) => void): EmitterSubscription {
    return this.emitter.addListener('pushKitNotificationReceived', callback);
  }

  public registerRemoteNotificationOpened(callback: (notification: Notification, completion: () => void, actionResponse?: NotificationActionResponse) => void): EmitterSubscription {
    return this.emitter.addListener('notificationOpened', (response, completion) => {
      const action = response.action ? new NotificationActionResponse(response.action) : undefined
      callback(new Notification(response.notification), completion, action);
    });
  }

  public registerRemoteNotificationsRegistrationFailed(callback: (event: RegistrationError) => void): EmitterSubscription {
    return this.emitter.addListener('remoteNotificationsRegistrationFailed', callback);
  }
}
