export class NotificationRequest {
  identifier?: string;
  payload: any;

  constructor(payload: object) {
    this.payload = payload;
  }

  get title(): string {
    return this.payload.title
  }
  get category(): string {
    return this.payload.category
  }

  get fireDate(): string {
    return this.payload.fireDate
  }
  get sound(): string {
    return this.payload.sound
  }
  get body(): string {
    return this.payload.body
  }
}
