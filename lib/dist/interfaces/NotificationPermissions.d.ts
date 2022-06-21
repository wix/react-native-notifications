export interface NotificationPermissionOptions {
    carPlay?: boolean;
    criticalAlert?: boolean;
    providesAppNotificationSettings?: boolean;
    provisional?: boolean;
    announcement?: boolean;
}
export interface NotificationPermissions extends NotificationPermissionOptions {
    badge: boolean;
    alert: boolean;
    sound: boolean;
    notificationCenter: boolean;
    lockScreen: boolean;
}
