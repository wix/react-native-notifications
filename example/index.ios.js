import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import React, {Component} from 'react';

import NotificationsIOS, { NotificationAction, NotificationCategory } from 'react-native-notifications';

let upvoteAction = new NotificationAction({
  activationMode: 'background',
  title: String.fromCodePoint(0x1F44D),
  identifier: 'UPVOTE_ACTION'
}, (action, completed) => {
  NotificationsIOS.log('ACTION RECEIVED');
  NotificationsIOS.log(JSON.stringify(action));

  completed();
});

let replyAction = new NotificationAction({
  activationMode: 'background',
  title: 'Reply',
  behavior: 'textInput',
  authenticationRequired: true,
  identifier: 'REPLY_ACTION'
}, (action, completed) => {
  console.log('ACTION RECEIVED');
  console.log(action);

  completed();
});

class NotificationsExampleApp extends Component {

  constructor() {
    super();
    this.state = {
      notifications: []
    };

    NotificationsIOS.addEventListener('remoteNotificationsRegistered', this.onPushRegistered.bind(this));
    NotificationsIOS.addEventListener('remoteNotificationsRegistrationFailed', this.onPushRegisteredFailed.bind(this));

    NotificationsIOS.consumeBackgroundQueue();

    NotificationsIOS.addEventListener('pushKitRegistered', this.onPushKitRegistered.bind(this));
    NotificationsIOS.registerPushKit();

    NotificationsIOS.addEventListener('notificationReceivedForeground', this.onNotificationReceivedForeground.bind(this));
    NotificationsIOS.addEventListener('notificationOpened', this.onNotificationOpened.bind(this));
  }

  onPushRegistered(deviceToken) {
    console.log('Device Token Received: ' + deviceToken);
  }

  onPushRegisteredFailed(error) {
    console.log('Remote notifiction registration failed: ' + error);
  }

  onPushKitRegistered(deviceToken) {
    console.log('PushKit Token Received: ' + deviceToken);
  }

  onNotificationReceivedForeground(notification) {
    console.log('Notification Received Foreground: ' + JSON.stringify(notification));
    this.setState({
      notifications: [...this.state.notifications, notification]
    });
  }

  onNotificationOpened(notification) {
    console.log('Notification Opened: ' + JSON.stringify(notification));
  }

  renderNotification(notification) {
    return <Text>{`${''} | ${JSON.stringify(notification)}`}</Text>;
  }

  render() {
    const notifications = this.state.notifications.map((notification, idx) =>
      (
        <View key={`notification_${idx}`}>
          {this.renderNotification(notification)}
        </View>
      ));

    return (
      <View style={styles.container}>
        <Button title={'Request permissions'} onPress={this.requestPermissions} testID={'requestPermissions'}/>
        {notifications}
      </View>
    );
  }

  requestPermissions() {
    let cat = new NotificationCategory({
      identifier: 'SOME_CATEGORY',
      actions: [upvoteAction, replyAction],
      context: 'default'
    });
    NotificationsIOS.requestPermissions([cat]);
  }

  componentWillUnmount() {
    NotificationsIOS.removeEventListener('notificationReceivedForeground', this.onNotificationReceivedForeground.bind(this));
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
