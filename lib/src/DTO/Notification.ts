export interface NotificationPayload {
  identifier: any;
  title: string;
  body: string;
  sound: string;
  badge: number;
  type: string;
  thread: string;
  fireDate?: Date;
  userInfo?: any;
  silent?: boolean;
}

export class Notification {
  identifier: string;
  payload: NotificationPayload;

  constructor(payload: NotificationPayload) {
    this.payload = payload;
    this.identifier = this.payload.identifier;
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

  get badge(): number {
    return this.payload.badge;
  }

  get type(): string {
    return this.payload.type;
  }

  get thread(): string {
    return this.payload.thread;
  }

  get fireDate(): Date | undefined {
    return this.payload.fireDate;
  }

  get userInfo(): any {
    return this.payload.userInfo;
  }

  get silent(): boolean | undefined {
    return this.payload.silent;
  }
}
