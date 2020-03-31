import { NativeCommandsSender } from '../adapters/NativeCommandsSender';
import { Notification } from '../DTO/Notification';
import { NotificationCategory } from '../interfaces/NotificationCategory';
import { NotificationPermissions } from '../interfaces/NotificationPermissions';
import { UniqueIdProvider } from '../adapters/UniqueIdProvider';
import { NotificationFactory } from '../DTO/NotificationFactory';
export declare class Commands {
    private readonly nativeCommandsSender;
    private readonly uniqueIdProvider;
    private readonly notificationFactory;
    constructor(nativeCommandsSender: NativeCommandsSender, uniqueIdProvider: UniqueIdProvider, notificationFactory: NotificationFactory);
    postLocalNotification(notification: Notification, id?: number): void;
    getInitialNotification(): Promise<Notification | undefined>;
    requestPermissions(): void;
    abandonPermissions(): void;
    registerPushKit(): void;
    setCategories(categories: [NotificationCategory?]): void;
    getBadgeCount(): Promise<number>;
    setBadgeCount(count: number): void;
    cancelLocalNotification(notificationId: string): void;
    cancelAllLocalNotifications(): void;
    isRegisteredForRemoteNotifications(): Promise<boolean>;
    checkPermissions(): Promise<NotificationPermissions>;
    removeAllDeliveredNotifications(): void;
    removeDeliveredNotifications(identifiers: Array<string>): void;
    getDeliveredNotifications(): Promise<Notification[]>;
    refreshToken(): void;
}
