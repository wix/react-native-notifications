import { EmitterSubscription } from 'react-native';
import { NativeEventsReceiver } from '../adapters/NativeEventsReceiver';
import {
  RegisteredPushKit
} from '../interfaces/NotificationEvents';
import { CompletionCallbackWrapper } from '../adapters/CompletionCallbackWrapper';

export class EventsRegistryIOS {
  constructor(
    private nativeEventsReceiver: NativeEventsReceiver,
    private completionCallbackWrapper: CompletionCallbackWrapper) 
  {}

  public registerPushKitRegistered(callback: (event: RegisteredPushKit) => void): EmitterSubscription {
    return this.nativeEventsReceiver.registerPushKitRegistered(callback);
  }

  public registerPushKitNotificationReceived(callback: (event: object, completion: () => void) => void): EmitterSubscription {
    return this.nativeEventsReceiver.registerPushKitNotificationReceived(
      // @ts-ignore
      this.completionCallbackWrapper.wrapOpenedCallback(callback)
    )
  }
}
