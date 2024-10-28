import {Notification} from './Notification';

function isObject(value: any) {
	var type = typeof value;
	return value != null && (type == "object" || type == "function");
}

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
    if (isObject(this.aps.alert)) {
      return this.aps.alert;
    } else if (typeof this.aps.alert == "string") {
      return {
        body: this.aps.alert,
      };
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
