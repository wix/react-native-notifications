import { NotificationsRoot } from './Notifications';

const notificationsSingleton = new NotificationsRoot();

export const Notifications = notificationsSingleton;
export * from './interfaces/EventSubscription';
export * from './DTO/Notification';
export * from './interfaces/NotificationEvents';
