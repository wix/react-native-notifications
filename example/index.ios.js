/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  PushNotificationIOS
} from 'react-native';

import NotificationsIOS from 'react-native-notifications';

class NotificationsExampleApp extends Component {

  constructor() {
    super();
    PushNotificationIOS.addEventListener('register', this.onPushRegistered.bind(this));
    // PushNotificationIOS.addEventListener('notification', this.onPushNotification.bind(this));
    NotificationsIOS.addEventListener('notificationReceivedForeground', this.onNotificationReceivedForeground.bind(this));
    NotificationsIOS.addEventListener('notificationReceivedBackground', this.onNotificationReceivedBackground.bind(this));
    NotificationsIOS.addEventListener('notificationOpened', this.onNotificationOpened.bind(this));
  }

  onPushRegistered(deviceToken) {
    console.log("Device Token Received: " + deviceToken);
  }

  onNotificationReceivedForeground(notification) {
    console.log("Notification Received Foreground: " + JSON.stringify(notification));
  }

  onNotificationReceivedBackground(notification) {
    console.log("Notification Received Background: " + JSON.stringify(notification));
  }

  onNotificationOpened(notification) {
    console.log("Notification Opened: " + JSON.stringify(notification));
  }

  onPushNotification(notification) {
    console.log("Notification Received: " + JSON.stringify(notification));
  }

  render() {
    PushNotificationIOS.requestPermissions();

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Notifications Demo App!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }

  componentWillUnmount() {
    NotificationsIOS.removeEventListener('notificationReceivedForeground', this.onNotificationReceivedForeground.bind(this));
    NotificationsIOS.removeEventListener('notificationReceivedBackground', this.onNotificationReceivedBackground.bind(this));
    NotificationsIOS.removeEventListener('notificationOpened', this.onNotificationOpened.bind(this));
  }

  _onNotification(notification) {
    AlertIOS.alert(
      'Notification Received',
      'Alert message: ' + notification.getMessage(),
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NotificationsExampleApp', () => NotificationsExampleApp);
