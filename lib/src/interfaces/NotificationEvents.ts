import { Notification } from './Notification';

export interface NotificationRegisteredEvent {
  deviceToken: string;
}

export interface NotificationReceived {
  notification: Notification;
}
