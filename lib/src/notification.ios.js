export default class IOSNotification {
  _data: Object;
  _alert: string | Object;
  _sound: string;
  _badge: number;
  _category: string;
  _type: string; // regular / managed
  _thread: string;

  constructor(notification: Object) {
    this._data = {};

    if (notification.userInfo.aps &&
      notification.userInfo.aps['content-available'] &&
      notification.userInfo.aps['content-available'] === 1 &&
      !notification.userInfo.aps.alert &&
      !notification.userInfo.aps.sound &&
      notification.managedAps) {
      // managed notification
      this._alert = notification.managedAps.alert;
      this._sound = notification.managedAps.sound;
      this._badge = notification.userInfo.aps.badge;
      this._category = notification.managedAps.category;
      this._type = 'managed';
      this._thread = notification.userInfo.aps['thread-id'];
    } else if (
      notification.userInfo.aps &&
      notification.userInfo.aps.alert) {
      // regular notification
      this._alert = notification.userInfo.aps.alert;
      this._sound = notification.userInfo.aps.sound;
      this._badge = notification.userInfo.aps.badge;
      this._category = notification.category;
      this._type = 'regular';
      this._thread = notification.thread;
    }

    Object.keys(notification).filter(key => key !== 'userInfo').forEach(key => {
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

  getThread(): ?string {
    return this._thread;
  }
}
