declare module "react-native-notifications" {

    export type NotificationEventName = "remoteNotificationsRegistered" 
        | "remoteNotificationsRegistrationFailed"
        | "pushKitRegistered"
        | "notificationReceivedForeground"
        | "notificationReceivedBackground"
        | "notificationOpened"

    export class NotificationAction {
        options: Object;
        handler: Function;
    }

    export class NotificationCategory {
        options: Object;
    }

    export default class NotificationsIOS {
        static addEventListener(type: NotificationEventName, handler: (notification: IOSNotification) => void): void;
        static removeEventListener(type: NotificationEventName, handler: (notification: IOSNotification) => void): void;
        static requestPermissions(categories?: Array<NotificationCategory>): Object;
        static abandonPermissions(): void;
        static resetCategories(): void;
        static setBadgesCount(count: number): void;
        static registerPushKit(): void;
        static backgroundTimeRemaining(callback: Function): void;
        static consumeBackgroundQueue(): void;
        static log(message: string): void;
        static localNotification(notification: IOSNotification): void;
        static cancelLocalNotification(notificationId: String): void;
        static cancelAllLocalNotifications(): void;
        static isRegisteredForRemoteNotifications(): void;
        static checkPermissions(): void;
    }

    export class NotificationsAndroid {
        static setNotificationOpenedListener(listener: (notification: NotificationAndroid) => void): void;
        static clearNotificationOpenedListener(): void;
        static setNotificationReceivedListener(listener: (notification: NotificationAndroid) => void): void;
        static clearNotificationReceivedListener(): void;
        static setRegistrationTokenUpdateListener(listener: (deviceToken: string) => void): void;
        static clearRegistrationTokenUpdateListener(): void;
        static refreshToken(): void;
        static localNotification(notification: NotificationAndroid): void;
        static cancelLocalNotification(id: string): void;
    }

    export class IOSNotification {
        getMessage(): string|Object;
        getSound(): string;
        getBadgeCount(): number;
        getCategory(): string;
        getData(): Object;
        getType(): string;
    }

    export class NotificationAndroid {
        getData(): Object;
        getTitle(): string;
        getMessage(): string|Object;
    }

    export class PendingNotifications {
        static getInitialNotification(): Promise<IOSNotification>;
    }
}
