import { EmitterSubscription } from 'react-native';
import { NativeEventsReceiver } from '../adapters/NativeEventsReceiver';
import {
  Registered,
  RegistrationError,
  NotificationResponse
} from '../interfaces/NotificationEvents';
import { CompletionCallbackWrapper } from '../adapters/CompletionCallbackWrapper';
import { Notification } from '../DTO/Notification';
import { NotificationCompletion } from '../interfaces/NotificationCompletion';

export class EventsRegistry {
  constructor(
    private nativeEventsReceiver: NativeEventsReceiver,
    private completionCallbackWrapper: CompletionCallbackWrapper) 
  {}

  public registerRemoteNotificationsRegistered(callback: (event: Registered) => void): EmitterSubscription {
    return this.nativeEventsReceiver.registerRemoteNotificationsRegistered(callback);
  }
  
  public registerNotificationReceived(callback: (notification: Notification, completion: (response: NotificationCompletion) => void) => void): EmitterSubscription {
    return this.nativeEventsReceiver.registerRemoteNotificationReceived(this.completionCallbackWrapper.wrapReceivedCallback(callback));
  }
  
  public registerRemoteNotificationOpened(callback: (response: NotificationResponse, completion: () => void) => void): EmitterSubscription {
    return this.nativeEventsReceiver.registerRemoteNotificationOpened(this.completionCallbackWrapper.wrapOpenedCallback(callback));
  }
  
  public registerRemoteNotificationsRegistrationFailed(callback: (event: RegistrationError) => void): EmitterSubscription {
    return this.nativeEventsReceiver.registerRemoteNotificationsRegistrationFailed(callback);
  }
}
