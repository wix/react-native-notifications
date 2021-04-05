export interface NotificationPermissionOptions {
  carPlay?: boolean;
  criticalAlert?: boolean;
  providesAppNotificationSettings?: boolean;
  provisional?: boolean;
}
export interface NotificationPermissions extends NotificationPermissionOptions  {
  badge: boolean;
  alert: boolean;
  sound: boolean;
}