import {Notification, NotificationPayload} from './Notification';

export interface NotificationAndroidPayload extends NotificationPayload {
  'google.message_id': string;
}

export class NotificationAndroid extends Notification {
  payload: NotificationAndroidPayload;
  
  constructor(payload: NotificationAndroidPayload) {
    super(payload);
    this.payload = payload;
    this.identifier = this.payload["google.message_id"];
  }

  get title(): string | undefined {
    return this.payload.title;
  }

  get body(): string | undefined {
    return this.payload.body;
  }

  get sound(): string | undefined {
    return this.payload.sound;
  }
}
