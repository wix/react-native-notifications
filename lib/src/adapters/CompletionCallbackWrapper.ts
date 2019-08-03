import { NativeCommandsSender } from './NativeCommandsSender';
import { NotificationCompletion, Notification } from '../interfaces/Notification';
import { Platform } from 'react-native';
export class CompletionCallbackWrapper {
  constructor(
    private readonly nativeCommandsSender: NativeCommandsSender
  ) {}

  public wrapReceivedCallback(callback: Function): (notification: Notification) => void {
    return (notification) => {
      const completion = (response: NotificationCompletion) => {
        if (Platform.OS === 'ios') {
          this.nativeCommandsSender.finishPresentingNotification(notification.identifier, response);
        }
      };

      callback(notification, completion);
    }
  }

  public wrapOpenedCallback(callback: Function): (notification: Notification) => void {
    return (notification) => {
      const completion = () => {
        if (Platform.OS === 'ios') {
          this.nativeCommandsSender.finishHandlingAction(notification.identifier);
        }
      };

      callback(notification, completion);
    }
  }
}
