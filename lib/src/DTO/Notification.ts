export class Notification {
  identifier: string;
  private _data?: any;

  constructor(payload: object) {
    this._data = payload;
    this.identifier = this._data.identifier;
  }

  get data(): any {
    return this._data;
  }

  get title(): string {
    return this._data.title;
  }

  get body(): string {
    return this._data.body;
  }

  get sound(): string {
    return this._data.sound;
  }

  get badge(): number {
    return this._data.badge;
  }

  get type(): string {
    return this._data.type;
  }

  get thread(): string {
    return this._data.thread;
  }
}
