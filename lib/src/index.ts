import { NotificationsRoot } from './Notifications';

const notificationsSingleton = new NotificationsRoot();

export const Notifications = notificationsSingleton;
export * from './interfaces/EventSubscription';
export * from './DTO/Notification';
export * from './interfaces/NotificationEvents';
export * from './interfaces/NotificationCategory';
export * from './interfaces/NotificationCompletion';
