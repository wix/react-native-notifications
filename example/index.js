import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import React, {Component} from 'react';
import {Notifications} from 'react-native-notifications';

class NotificationsExampleApp extends Component {
  constructor() {
    super();
    this.state = {
      notifications: []
    };

    this.registerNotificationEvents();
    this.setCategories();
  }

  registerNotificationEvents() {
    Notifications.events().registerNotificationReceived((notification, completion) => {
      this.setState({
        notifications: [...this.state.notifications, notification]
      });

      completion({alert: true, sound: false, badge: false});
    });

    Notifications.events().registerRemoteNotificationOpened((notification, completion) => {
      this.setState({
        notifications: [...this.state.notifications, notification]
      });

      completion();
    });
  }

  renderNotification(notification) {
    return (
      <View style={{backgroundColor: 'lightgray', margin: 10}}>
        <Text>{`Title: ${notification.title}`}</Text>
        <Text>{`Body: ${notification.body}`}</Text>
        <Text>{`Extra Link Param: ${notification.data.link}`}</Text>
      </View>
    );
  }

  requestPermissions() {
    Notifications.requestPermissions();
  }

  setCategories() {
    const upvoteAction = {
      activationMode: 'background',
      title: String.fromCodePoint(0x1F44D),
      identifier: 'UPVOTE_ACTION'
    };

    const replyAction = {
      activationMode: 'background',
      title: 'Reply',
      authenticationRequired: true,
      textInput: {
        buttonTitle: 'Reply now',
        placeholder: 'Insert message'
      },
      identifier: 'REPLY_ACTION'
    };

    const category = {
      identifier: 'SOME_CATEGORY',
      actions: [upvoteAction, replyAction]
    };

    Notifications.setCategories([category]);
  }

  sendLocalNotification() {
    Notifications.postLocalNotification({
      body: 'Local notificiation!',
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

  render() {
    const notifications = this.state.notifications.map((notification, idx) =>
      (
        <View key={`notification_${idx}`}>
          {this.renderNotification(notification)}
        </View>
      ));

    return (
      <View style={styles.container}>
        <Button title={'Request permissions'} onPress={this.requestPermissions} testID={'requestPermissions'} />
        <Button title={'Send local notification'} onPress={this.sendLocalNotification} testID={'sendLocalNotification'} />
        <Button title={'Remove all delivered notifications'} onPress={this.removeAllDeliveredNotifications} />
        {notifications}
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
