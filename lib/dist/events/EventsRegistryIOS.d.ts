import { EmitterSubscription } from 'react-native';
import { NativeEventsReceiver } from '../adapters/NativeEventsReceiver';
import { RegisteredPushKit } from '../interfaces/NotificationEvents';
export declare class EventsRegistryIOS {
    private nativeEventsReceiver;
    constructor(nativeEventsReceiver: NativeEventsReceiver);
    registerPushKitRegistered(callback: (event: RegisteredPushKit) => void): EmitterSubscription;
    registerPushKitNotificationReceived(callback: (event: object) => void): EmitterSubscription;
}
