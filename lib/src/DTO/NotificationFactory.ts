import {Notification} from './Notification';
import {NotificationIOS} from './NotificationIOS';
import {NotificationAndroid} from './NotificationAndroid';
import { Platform } from 'react-native';

export class NotificationFactory {
  fromPayload(payload: any) : Notification {
    if (Platform.OS === 'ios') {
      return payload.aps ? new NotificationIOS(payload) : new Notification(payload);
    } else {
      return new NotificationAndroid(payload);
    }
  }
}
