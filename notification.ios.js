export default class IOSNotification {
  _data: Object;
  _alert: string | Object;
  _sound: string;
  _badge: number;
  _category: string;
  _type: string; // regular / managed

  constructor(notification: Object) {
    this._data = {};

    if (notification.aps &&
      notification.aps["content-available"] &&
      notification.aps["content-available"] === 1 &&
      !notification.aps.alert &&
      !notification.aps.sound &&
      !notification.aps.badge &&
      notification.managedAps) {
      // managed notification
      this._alert = notification.managedAps.alert;
      this._sound = notification.managedAps.sound;
      this._badge = notification.managedAps.badge;
      this._category = notification.managedAps.category;
      this._type = "managed";
    } else if (
      notification.aps &&
      notification.aps.alert) {
      // regular notification
      this._alert = notification.aps.alert;
      this._sound = notification.aps.sound;
      this._badge = notification.aps.badge;
      this._category = notification.aps.category;
      this._type = "regular";
    }

    Object.keys(notification).filter(key => key !== "aps").forEach(key => {
      this._data[key] = notification[key];
    });
  }

  getMessage(): ?string | ?Object {
    return this._alert;
  }

  getSound(): ?string {
    return this._sound;
  }

  getBadgeCount(): ?number {
    return this._badge;
  }

  getCategory(): ?string {
    return this._category;
  }

  getData(): ?Object {
    return this._data;
  }

  getType(): ?string {
    return this._type;
  }
}
