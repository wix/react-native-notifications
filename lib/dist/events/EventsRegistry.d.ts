import { EmitterSubscription } from 'react-native';
import { NativeEventsReceiver } from '../adapters/NativeEventsReceiver';
import { Registered, RegistrationError, NotificationResponse } from '../interfaces/NotificationEvents';
import { CompletionCallbackWrapper } from '../adapters/CompletionCallbackWrapper';
import { Notification } from '../DTO/Notification';
import { NotificationCompletion } from '../interfaces/NotificationCompletion';
export declare class EventsRegistry {
    private nativeEventsReceiver;
    private completionCallbackWrapper;
    constructor(nativeEventsReceiver: NativeEventsReceiver, completionCallbackWrapper: CompletionCallbackWrapper);
    registerRemoteNotificationsRegistered(callback: (event: Registered) => void): EmitterSubscription;
    registerNotificationReceivedForeground(callback: (notification: Notification, completion: (response: NotificationCompletion) => void) => void): EmitterSubscription;
    registerNotificationReceivedBackground(callback: (notification: Notification, completion: (response: NotificationCompletion) => void) => void): EmitterSubscription;
    registerNotificationOpened(callback: (response: NotificationResponse, completion: () => void) => void): EmitterSubscription;
    registerRemoteNotificationsRegistrationFailed(callback: (event: RegistrationError) => void): EmitterSubscription;
}
