export class NotificationActionResponse {
  identifier: string;
  text?: string;

  constructor(response: any) {
    this.identifier = response.identifier;
    this.text = response.text;
  }
}
