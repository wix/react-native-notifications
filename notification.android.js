/** A wrapper to align Android with iOS in terms on notification structure. */
export default class NotificationAndroid {

  constructor(notification) {
    this.data = notification;
  }

  getData() {
    return this.data;
  }

  getTitle() {
    return this.data.title;
  }

  getMessage() {
    return this.data.body;
  }
}

