/** A wrapper to align Android with iOS in terms on notification structure and provide convenience methods. */
export default class NotificationAndroid {

  constructor(properties) {
    this.properties = properties;
  }

  isDataOnly() {
    return this.getData() && Object.keys(this.properties).length === 1;
  }

  // Convenience accessors

  getData() {
    return this.properties.data;
  }

  getTitle() {
    return this.properties.title;
  }

  getBody() {
    return this.properties.body;
  }

  // Alias for getBody()
  getMessage() {
    return this.getBody();
  }

  getIcon() {
    return this.properties.icon;
  }

  getSound() {
    return this.properties.sound;
  }

  getTag() {
    return this.properties.tag;
  }

  getColor() {
    return this.properties.color;
  }

  getLargeIcon() {
    return this.properties.largeIcon;
  }

  getLightsColor() {
    return this.properties.lightsColor;
  }

  getLightsOnMs() {
    return this.properties.lightsOnMs;
  }

  getLightsOffMs() {
    return this.properties.lightsOffMs;
  }
}
