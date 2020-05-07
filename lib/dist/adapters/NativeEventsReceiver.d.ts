import { EmitterSubscription } from 'react-native';
import { Registered, RegistrationError, RegisteredPushKit } from '../interfaces/NotificationEvents';
import { Notification } from '../DTO/Notification';
import { NotificationActionResponse } from '../interfaces/NotificationActionResponse';
import { NotificationFactory } from '../DTO/NotificationFactory';
export declare class NativeEventsReceiver {
    private readonly notificationFactory;
    private emitter;
    constructor(notificationFactory: NotificationFactory);
    registerRemoteNotificationsRegistered(callback: (event: Registered) => void): EmitterSubscription;
    registerPushKitRegistered(callback: (event: RegisteredPushKit) => void): EmitterSubscription;
    registerNotificationReceived(callback: (notification: Notification) => void): EmitterSubscription;
    registerPushKitNotificationReceived(callback: (event: object) => void): EmitterSubscription;
    registerNotificationOpened(callback: (notification: Notification, completion: () => void, actionResponse?: NotificationActionResponse) => void): EmitterSubscription;
    registerRemoteNotificationsRegistrationFailed(callback: (event: RegistrationError) => void): EmitterSubscription;
}
