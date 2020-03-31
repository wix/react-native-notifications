import { Notification } from '../DTO/Notification';
import { NotificationCompletion } from '../interfaces/NotificationCompletion';
import { NotificationPermissions } from '../interfaces/NotificationPermissions';
import { NotificationCategory } from '../interfaces/NotificationCategory';
export declare class NativeCommandsSender {
    private readonly nativeCommandsModule;
    constructor();
    postLocalNotification(notification: Notification, id: number): void;
    getInitialNotification(): Promise<Object>;
    requestPermissions(): void;
    abandonPermissions(): void;
    refreshToken(): void;
    registerPushKit(): void;
    setCategories(categories: [NotificationCategory?]): void;
    getBadgeCount(): Promise<number>;
    setBadgeCount(count: number): void;
    cancelLocalNotification(notificationId: string): void;
    cancelAllLocalNotifications(): void;
    isRegisteredForRemoteNotifications(): Promise<any>;
    checkPermissions(): Promise<NotificationPermissions>;
    removeAllDeliveredNotifications(): void;
    removeDeliveredNotifications(identifiers: Array<string>): void;
    getDeliveredNotifications(): Promise<Notification[]>;
    finishPresentingNotification(notificationId: string, notificationCompletion: NotificationCompletion): void;
    finishHandlingAction(notificationId: string): void;
}
