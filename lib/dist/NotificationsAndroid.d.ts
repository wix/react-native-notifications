import { Commands } from './commands/Commands';
import { NotificationChannel } from './interfaces/NotificationChannel';
export declare class NotificationsAndroid {
    private readonly commands;
    constructor(commands: Commands);
    /**
    * Refresh FCM token
    */
    registerRemoteNotifications(): void;
    /**
     * setNotificationChannel
     */
    setNotificationChannel(notificationChannel: NotificationChannel): void;
}
