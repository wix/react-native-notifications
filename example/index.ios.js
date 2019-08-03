import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import React, {Component} from 'react';
import { Notifications } from '../lib/dist/index';

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
        notifications: [...this.state.notifications, notification.link]
      });

      completion({alert: true, sound: false, badge: false});
    });

    Notifications.events().registerRemoteNotificationOpened((response, completion) => {
      this.setState({
        notifications: [...this.state.notifications, `Notification Clicked: ${response.notification.link}`]
      });
  
      completion();
    });
  }

  renderNotification(notification) {
    return <Text>{`${notification}`}</Text>;
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
    Notifications.localNotification({
      body: 'Local notificiation!',
      title: 'Local Notification Title',
      sound: 'chime.aiff',
      category: 'SOME_CATEGORY',
      userInfo: { link: 'localNotificationLink' },
    });
  }

  removeAllDeliveredNotifications() {
    Notifications.removeAllDeliveredNotifications();
  }

  async componentDidMount() {
    const initialNotification = await Notifications.getInitialNotification();
    if (initialNotification) {
      this.setState({notifications: [initialNotification.link, ...this.state.notifications]});
    }
  }

  componentWillUnmount() {
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
