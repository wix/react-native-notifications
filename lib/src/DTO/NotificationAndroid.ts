import {Notification} from './Notification';
import * as _ from 'lodash';

export class NotificationAndroid extends Notification {
  get title(): string {
    return this.payload.title;
  }

  get body(): string {
    return this.payload.body;
  }

  get sound(): string {
    return this.payload.sound;
  }
}
