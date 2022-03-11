import { EmitterSubscription } from 'react-native';
import { NativeEventsReceiver } from '../adapters/NativeEventsReceiver';
import { RegisteredPushKit } from '../interfaces/NotificationEvents';
import { CompletionCallbackWrapper } from '../adapters/CompletionCallbackWrapper';
export declare class EventsRegistryIOS {
    private nativeEventsReceiver;
    private completionCallbackWrapper;
    constructor(nativeEventsReceiver: NativeEventsReceiver, completionCallbackWrapper: CompletionCallbackWrapper);
    registerPushKitRegistered(callback: (event: RegisteredPushKit) => void): EmitterSubscription;
    registerPushKitNotificationReceived(callback: (event: object, completion: () => void) => void): EmitterSubscription;
    appNotificationSettingsLinked(callback: () => void): EmitterSubscription;
}
