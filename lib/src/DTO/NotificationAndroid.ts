import {Notification} from './Notification';

export class NotificationAndroid extends Notification {
  constructor(payload: object) {
    super(payload);
    this.identifier = this.payload["google.message_id"];
  }

  private getGCMProperty(property: string){
    // For some reason this isn't getting translated to the correct property in the java code.
    return this.payload[`gcm.notification.${property}`] ?? this.payload[property];
  }

  get title(): string {
    return this.getGCMProperty("title");
  }

  get body(): string {
    return this.getGCMProperty("body");
  }

  get sound(): string {
    return this.payload.sound;
  }
}
