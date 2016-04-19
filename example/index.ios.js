/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import NotificationsIOS, { NotificationAction, NotificationCategory } from 'react-native-notifications';

let upvoteAction = new NotificationAction({
  activationMode: "background",
  title: String.fromCodePoint(0x1F44D),
  identifier: "UPVOTE_ACTION"
}, (action, completed) => {
  NotificationsIOS.log("ACTION RECEIVED");
  NotificationsIOS.log(JSON.stringify(action));

  completed();
});

let replyAction = new NotificationAction({
  activationMode: "background",
  title: "Reply",
  behavior: "textInput",
  authenticationRequired: true,
  identifier: "REPLY_ACTION"
}, (action, completed) => {
  console.log("ACTION RECEIVED");
  console.log(action);

  completed();
});

let cat = new NotificationCategory({
  identifier: "SOME_CATEGORY",
  actions: [upvoteAction, replyAction],
  context: "default"
});

class NotificationsExampleApp extends Component {

  constructor() {
    super();
    NotificationsIOS.addEventListener('remoteNotificationsRegistered', this.onPushRegistered.bind(this));
    NotificationsIOS.requestPermissions([cat]);

    NotificationsIOS.addEventListener('pushKitRegistered', this.onPushKitRegistered.bind(this));
    NotificationsIOS.registerPushKit();

    NotificationsIOS.addEventListener('notificationReceivedForeground', this.onNotificationReceivedForeground.bind(this));
    NotificationsIOS.addEventListener('notificationReceivedBackground', this.onNotificationReceivedBackground.bind(this));
    NotificationsIOS.addEventListener('notificationOpened', this.onNotificationOpened.bind(this));
  }

  onPushRegistered(deviceToken) {
    console.log("Device Token Received: " + deviceToken);
  }

  onPushKitRegistered(deviceToken) {
    console.log("PushKit Token Received: " + deviceToken);
  }

  onNotificationReceivedForeground(notification) {
    console.log("Notification Received Foreground: " + JSON.stringify(notification));
  }

  onNotificationReceivedBackground(notification) {
    NotificationsIOS.log("Notification Received Background: " + JSON.stringify(notification));

    NotificationsIOS.backgroundTimeRemaining(time => NotificationsIOS.log("remaining background time: " + time));

  }

  onNotificationOpened(notification) {
    console.log("Notification Opened: " + JSON.stringify(notification));
  }

  render() {
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
    NotificationsIOS.removeEventListener('remoteNotificationsRegistered', this.onPushRegistered.bind(this));
    NotificationsIOS.removeEventListener('pushKitRegistered', this.onPushKitRegistered.bind(this));
    // NotificationsIOS.resetCategories();
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
