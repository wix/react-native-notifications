import {Notification, NotificationPayload} from './Notification';
import * as _ from 'lodash';

export interface NotificationIOSPayload extends NotificationPayload {
  aps?: {
    alert: string;
  };
}

export class NotificationIOS extends Notification {
  identifier: string;
  payload: NotificationIOSPayload;
  constructor(payload: NotificationIOSPayload) {
    super(payload);
    this.payload = payload;
    this.identifier = this.payload.identifier;
  }

  get aps(): any {
    return this.payload.aps || {};
  }

  get alert(): any {
    if (_.isObject(this.aps.alert)) {
      return this.aps.alert;
    } else if (_.isString(this.aps.alert)) {
      return {
        body: this.aps.alert
      }
    }
  }

  get title(): string {
    return this.alert.title;
  }

  get body(): string {
    return this.alert.body;
  }

  get sound(): string {
    return this.aps.sound;
  }

  get badge(): number {
    return this.aps.badge;
  }

  get thread(): string {
    return this.aps.thread;
  }
}
