import { NativeCommandsSender } from './NativeCommandsSender';
import { NotificationCompletion, Notification } from '../interfaces/Notification';
import { NotificationResponse } from '../interfaces/NotificationEvents';

export class CompletionCallbackWrapper {
  constructor(
    private readonly nativeCommandsSender: NativeCommandsSender
  ) {}

  public wrapReceivedCallback(callback: Function): (notification: Notification) => void {
    return (notification) => {
      const completion = (response: NotificationCompletion) => {
        this.nativeCommandsSender.finishPresentingNotification(notification.identifier, response);
      };

      callback(notification, completion);
    }
  }

  public wrapOpenedCallback(callback: Function): (response: NotificationResponse) => void {
    return (response) => {
      const completion = () => {
        this.nativeCommandsSender.finishHandlingAction(response.notification.identifier);
      };

      callback(response, completion);
    }
  }
}
