import { NativeCommandsSender } from './NativeCommandsSender';
import { NotificationCompletion } from '../interfaces/NotificationCompletion';
import { Platform, AppState } from 'react-native';
import {NotificationIOS} from "../DTO/NotificationIOS";
import {Notification} from "..";

export class CompletionCallbackWrapper {
  constructor(
    private readonly nativeCommandsSender: NativeCommandsSender
  ) {}

  public wrapReceivedBackgroundCallback(callback: Function): (notification: Notification) => void {
    return (notification) => {
      if (!this.applicationIsVisible()) {
        this.wrapReceivedAndInvoke(callback, notification);
      }
    }
  }

  public wrapReceivedForegroundCallback(callback: Function): (notification: Notification) => void {
    return (notification) => {
      if (this.applicationIsVisible()) {
        console.log(`Application State: ${AppState.currentState}`);
        this.wrapReceivedAndInvoke(callback, notification);
      }
    }
  }

  private wrapReceivedAndInvoke(callback: Function, notification: Notification) {
    const completion = (response: NotificationCompletion) => {
      if (Platform.OS === 'ios') {
        this.nativeCommandsSender.finishPresentingNotification((notification as unknown as NotificationIOS).identifier, response);
      }
    };

    callback(notification, completion);
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

  private applicationIsVisible(): Boolean {
    return AppState.currentState !== 'background';
  }
}
