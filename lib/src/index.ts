import { NotificationsRoot } from './Notifications';

const notificationsSingleton = new NotificationsRoot();

export const Notifications = notificationsSingleton;
export * from './interfaces/EventSubscription';
export * from './interfaces/Notification';
export * from './interfaces/NotificationEvents';
