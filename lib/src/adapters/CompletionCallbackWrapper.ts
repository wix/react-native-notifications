import { NativeCommandsSender } from './NativeCommandsSender';
import { NotificationCompletion } from '../interfaces/NotificationCompletion';
import { Platform } from 'react-native';
import {NotificationIOS} from "../DTO/NotificationIOS";
import {Notification} from "..";

export class CompletionCallbackWrapper {
  constructor(
    private readonly nativeCommandsSender: NativeCommandsSender
  ) {}

  public wrapReceivedCallback(callback: Function): (notification: Notification) => void {
    return (notification) => {
      const completion = (response: NotificationCompletion) => {
        if (Platform.OS === 'ios') {
          this.nativeCommandsSender.finishPresentingNotification((notification as unknown as NotificationIOS).identifier, response);
        }
      };

      callback(notification, completion);
    }
  }

  public wrapOpenedCallback(callback: Function): (notification: Notification) => void {
    return (notification) => {
      const completion = () => {
        if (Platform.OS === 'ios') {
          this.nativeCommandsSender.finishHandlingAction((notification as unknown as NotificationIOS).identifier);
        }
      };

      callback(notification, completion);
    }
  }
}
