import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import React, {Component} from 'react';
import {Notifications, NotificationAction, NotificationCategory} from 'react-native-notifications';

class NotificationsExampleApp extends Component {
  constructor() {
    super();
    this.state = {
      notifications: [],
      openedNotifications: [],
    };

    this.registerNotificationEvents();
    this.setCategories();
  }

  registerNotificationEvents() {
    Notifications.events().registerNotificationReceivedForeground((notification, completion) => {
      this.setState({
        notifications: [...this.state.notifications, notification]
      });

      completion({alert: notification.payload.showAlert, sound: false, badge: false});
    });

    Notifications.events().registerNotificationOpened((notification, completion) => {
      this.setState({
        openedNotifications: [...this.state.openedNotifications, notification]
      });

      completion();
    });

    Notifications.events().registerNotificationReceivedBackground((notification, completion) => {
      this.setState({
        notifications: [...this.state.notifications, notification]
      });

      completion();
    });
  }

  requestPermissions(options) {
    Notifications.registerRemoteNotifications(options);
  }

  setCategories() {
    const upvoteAction = new NotificationAction({
      activationMode: 'background',
      title: String.fromCodePoint(0x1F44D),
      identifier: 'UPVOTE_ACTION'
    });

    const replyAction = new NotificationAction({
      activationMode: 'background',
      title: 'Reply',
      authenticationRequired: true,
      textInput: {
        buttonTitle: 'Reply now',
        placeholder: 'Insert message'
      },
      identifier: 'REPLY_ACTION'
    });


    const category = new NotificationCategory({
      identifier: 'SOME_CATEGORY',
      actions: [upvoteAction, replyAction]
    });

    Notifications.setCategories([category]);
  }

  sendLocalNotification() {
    Notifications.postLocalNotification({
      body: 'Local notification!',
      title: 'Local Notification Title',
      sound: 'chime.aiff',
      category: 'SOME_CATEGORY',
      link: 'localNotificationLink',
    });
  }

  removeAllDeliveredNotifications() {
    Notifications.removeAllDeliveredNotifications();
  }

  async componentDidMount() {
    const initialNotification = await Notifications.getInitialNotification();
    if (initialNotification) {
      this.setState({notifications: [initialNotification, ...this.state.notifications]});
    }
  }

  renderNotification(notification) {
    return (
      <View style={{backgroundColor: 'lightgray', margin: 10}}>
        <Text>{`Title: ${notification.title}`}</Text>
        <Text>{`Body: ${notification.body}`}</Text>
        <Text>{`Extra Link Param: ${notification.payload.link}`}</Text>
      </View>
    );
  }

  renderOpenedNotification(notification) {
    return (
      <View style={{backgroundColor: 'lightgray', margin: 10}}>
        <Text>{`Title: ${notification.title}`}</Text>
        <Text>{`Body: ${notification.body}`}</Text>
        <Text>{`Notification Clicked: ${notification.payload.link}`}</Text>
      </View>
    );
  }

  render() {
    const notifications = this.state.notifications.map((notification, idx) =>
      (
        <View key={`notification_${idx}`}>
          {this.renderNotification(notification)}
        </View>
      ));
      const openedNotifications = this.state.openedNotifications.map((notification, idx) =>
      (
        <View key={`notification_${idx}`}>
          {this.renderOpenedNotification(notification)}
        </View>
      ));
    return (
      <View style={styles.container}>
        <Button title={'Request permissions'} onPress={this.requestPermissions} testID={'requestPermissions'} />
        <Button title={'Send local notification'} onPress={this.sendLocalNotification} testID={'sendLocalNotification'} />
        <Button title={'Remove all delivered notifications'} onPress={this.removeAllDeliveredNotifications} />
        {notifications}
        {openedNotifications}
      </View>
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
