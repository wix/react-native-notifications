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
});

let replyAction = new NotificationAction({
  activationMode: 'background',
  title: 'Reply',
  authenticationRequired: true,
  textInput: {
    buttonTitle: 'Reply now',
    placeholder: 'Insert message'
  },
  identifier: 'REPLY_ACTION'
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
    NotificationsIOS.addEventListener('pushKitNotificationReceived', this.onPushKitNotificationReceived.bind(this));
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

  onPushKitNotificationReceived(notification) {
    console.log('PushKit notification Received: ' + JSON.stringify(notification));
  }

  onNotificationReceivedForeground(notification, completion) {
    console.log('Notification Received Foreground: ' + JSON.stringify(notification));
    this.setState({
      notifications: [...this.state.notifications, notification]
    });

    completion({alert: true, sound: false, badge: false});
  }

  onNotificationOpened(notification, completion, action) {
    console.log('Notification Opened: ' + JSON.stringify(notification) + JSON.stringify(action));
    completion();
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
        <Button title={'Send local notification'} onPress={this.sendLocalNotification} testID={'sendLocalNotification'}/>
        <Button title={'Remove all delivered notifications'} onPress={this.removeAllDeliveredNotifications}/>
        {notifications}
      </View>
    );
  }

  requestPermissions() {
    let cat = new NotificationCategory({
      identifier: 'SOME_CATEGORY',
      actions: [upvoteAction, replyAction]
    });
    NotificationsIOS.requestPermissions([cat]);
  }

  sendLocalNotification() {
    NotificationsIOS.localNotification({
      body: 'Local notificiation!',
      title: 'Local Notification Title',
      sound: 'chime.aiff',
      category: 'SOME_CATEGORY',
      userInfo: { }
    });
  }

  removeAllDeliveredNotifications() {
    NotificationsIOS.removeAllDeliveredNotifications();
  }

  componentWillUnmount() {
    NotificationsIOS.removeEventListener('notificationReceivedForeground', this.onNotificationReceivedForeground.bind(this));
    NotificationsIOS.removeEventListener('notificationOpened', this.onNotificationOpened.bind(this));
    NotificationsIOS.removeEventListener('remoteNotificationsRegistered', this.onPushRegistered.bind(this));
    NotificationsIOS.removeEventListener('pushKitRegistered', this.onPushKitRegistered.bind(this));
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
