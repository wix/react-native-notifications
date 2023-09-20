import { EventsRegistry } from './events/EventsRegistry';
import { Notification } from './DTO/Notification';
import { NotificationCategory } from './interfaces/NotificationCategory';
import { NotificationChannel } from './interfaces/NotificationChannel';
import { NotificationsIOS } from './NotificationsIOS';
import { NotificationsAndroid } from './NotificationsAndroid';
import { NotificationPermissionOptions } from './interfaces/NotificationPermissions';
export declare class NotificationsRoot {
    readonly _ios: NotificationsIOS;
    readonly _android: NotificationsAndroid;
    private readonly notificationFactory;
    private readonly nativeEventsReceiver;
    private readonly nativeCommandsSender;
    private readonly commands;
    private readonly eventsRegistry;
    private readonly eventsRegistryIOS;
    private readonly uniqueIdProvider;
    private readonly completionCallbackWrapper;
    constructor();
    /**
     * registerRemoteNotifications
     */
    registerRemoteNotifications(options?: NotificationPermissionOptions): void;
    /**
     * postLocalNotification
     */
    postLocalNotification(notification: Notification, id?: number): number;
    /**
     * getInitialNotification
     */
    getInitialNotification(): Promise<Notification | undefined>;
    /**
     * setCategories
     */
    setCategories(categories: [NotificationCategory?]): void;
    /**
     * cancelLocalNotification
    */
    cancelLocalNotification(notificationId: number): void;
    /**
     * removeAllDeliveredNotifications
     */
    removeAllDeliveredNotifications(): void;
    /**
     * isRegisteredForRemoteNotifications
     */
    isRegisteredForRemoteNotifications(): Promise<boolean>;
    /**
     * setNotificationChannel
     */
    setNotificationChannel(notificationChannel: NotificationChannel): void;
    /**
     * Obtain the events registry instance
     */
    events(): EventsRegistry;
    /**
     * ios/android getters
     */
    get ios(): NotificationsIOS;
    get android(): NotificationsAndroid;
}
