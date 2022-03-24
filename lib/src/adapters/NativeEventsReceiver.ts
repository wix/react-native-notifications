import { NativeModules, NativeEventEmitter, EventEmitter, EmitterSubscription } from 'react-native';
import {
  Registered, RegistrationError, RegisteredPushKit, NotificationResponse
} from '../interfaces/NotificationEvents';
import { Notification } from '../DTO/Notification';
import { NotificationActionResponse } from '../interfaces/NotificationActionResponse';
import { NotificationFactory } from '../DTO/NotificationFactory';

export class NativeEventsReceiver {
  private emitter: EventEmitter;
  constructor(private readonly notificationFactory: NotificationFactory) {
    this.emitter = new NativeEventEmitter(NativeModules.RNEventEmitter);
  }

  public registerRemoteNotificationsRegistered(callback: (event: Registered) => void): EmitterSubscription {
    return this.emitter.addListener('remoteNotificationsRegistered', callback);
  }

  public appNotificationSettingsLinked(callback: () => void): EmitterSubscription {
    return this.emitter.addListener('appNotificationSettingsLinked', callback);
  }

  public registerPushKitRegistered(callback: (event: RegisteredPushKit) => void): EmitterSubscription {
    return this.emitter.addListener('pushKitRegistered', callback);
  }

  public registerNotificationReceived(callback: (notification: Notification) => void): EmitterSubscription {
    return this.emitter.addListener('notificationReceived', (payload: unknown) => {
      callback(this.notificationFactory.fromPayload(payload));
    });
  }

  public registerNotificationReceivedBackground(callback: (notification: Notification) => void): EmitterSubscription {
    return this.emitter.addListener('notificationReceivedBackground', (payload: unknown) => {
      callback(this.notificationFactory.fromPayload(payload));
    });
  }

  public registerPushKitNotificationReceived(callback: (event: object) => void): EmitterSubscription {
    return this.emitter.addListener('pushKitNotificationReceived', callback);
  }

  public registerNotificationOpened(callback: (notification: Notification, actionResponse?: NotificationActionResponse) => void): EmitterSubscription {
    return this.emitter.addListener('notificationOpened', (response: NotificationResponse) => {
      const action = response.action ? new NotificationActionResponse(response.action) : undefined;
      callback(this.notificationFactory.fromPayload(response.notification), action);
    });
  }

  public registerRemoteNotificationsRegistrationFailed(callback: (event: RegistrationError) => void): EmitterSubscription {
    return this.emitter.addListener('remoteNotificationsRegistrationFailed', callback);
  }

  public registerRemoteNotificationsRegistrationDenied(callback: () => void): EmitterSubscription {
    return this.emitter.addListener('remoteNotificationsRegistrationDenied', callback);
  }
}
