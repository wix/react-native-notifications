export class Notification {
  identifier: string;
  private _data?: any;

  sound?: string;
  badge?: number;
  type?: string;
  thread?: string;

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
}
