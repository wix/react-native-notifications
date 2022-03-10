import {Notification} from './Notification';

export class NotificationAndroid extends Notification {
  constructor(payload: object) {
    super(payload);
    this.identifier = this.payload["google.message_id"];
  }

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
