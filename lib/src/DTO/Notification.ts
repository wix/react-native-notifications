export interface NotificationPayload {
  identifier: any;
  title?: string;
  body?: string;
  sound?: string;
  badge?: number;
  type?: string;
  thread?: string;
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

  get title(): string | undefined {
    return this.payload.title;
  }

  get body(): string | undefined {
    return this.payload.body;
  }

  get sound(): string | undefined {
    return this.payload.sound;
  }

  get badge(): number | undefined {
    return this.payload.badge;
  }

  get type(): string | undefined {
    return this.payload.type;
  }

  get thread(): string | undefined {
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
