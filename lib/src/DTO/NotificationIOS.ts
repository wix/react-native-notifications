import {Notification} from './Notification';
import * as _ from 'lodash';

export class NotificationIOS extends Notification {
  identifier: string;
  constructor(payload: object) {
    super(payload);
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
    if (!this.aps || !this.alert) {
      return super.title;
    }
    return this.alert.title;
  }

  get body(): string {
    if (!this.aps || !this.alert) {
      return super.body;
    }
    return this.alert.body;
  }

  get sound(): string {
    if (!this.aps) {
      return super.sound;
    }
    return this.aps.sound;
  }

  get badge(): number {
    if (!this.aps) {
      return super.badge;
    }
    return this.aps.badge;
  }

  get thread(): string {
    if (!this.aps) {
      return super.thread;
    }
    return this.aps.thread;
  }
}
