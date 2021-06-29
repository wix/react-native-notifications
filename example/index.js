import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button,
  Platform
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

    if (Platform.OS === 'ios') {
      Notifications.ios.events().appNotificationSettingsLinked(() => {
        console.warn('App Notification Settings Linked')
      });
    }
  }

  requestPermissionsIos(options) {
    Notifications.ios.registerRemoteNotifications(
      Object.fromEntries(options.map(opt => [opt, true]))
    );
  }

  requestPermissions() {
    Notifications.registerRemoteNotifications();
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
      android_channel_id: 'my-channel',
    });
  }

  removeAllDeliveredNotifications() {
    Notifications.removeAllDeliveredNotifications();
  }

  setNotificationChannel() {
    Notifications.setNotificationChannel({
      channelId: 'my-channel',
      name: 'My Channel',
      groupId: 'my-group-id',
      groupName: 'my group name',
      importance: 5,
      description: 'My Description',
      enableLights: true,
      enableVibration: true,
      showBadge: true,
      soundFile: 'doorbell.mp3',
      vibrationPattern: [200, 1000, 500, 1000, 500],
    })
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

  checkPermissions() {
    Notifications.ios.checkPermissions().then((currentPermissions) => {
      console.warn(currentPermissions);
    });
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
        {Platform.OS === 'ios' && Platform.Version > '12.0' && (<>
          <Button title={'Request permissions with app notification settings'} onPress={() => this.requestPermissionsIos(['providesAppNotificationSettings'])} testID={'requestPermissionsWithAppSettings'} />
          <Button title={'Request permissions with provisional'} onPress={() => this.requestPermissionsIos(['provisional'])} testID={'requestPermissionsWithAppSettings'} />
          <Button title={'Request permissions with app notification settings and provisional'} onPress={() => this.requestPermissionsIos(['providesAppNotificationSettings', 'provisional'])} testID={'requestPermissionsWithAppSettings'} />
          <Button title={'Check permissions'} onPress={this.checkPermissions} />
        </>)}
        {Platform.OS === 'android' &&
          <Button title={'Set channel'} onPress={this.setNotificationChannel} testID={'setNotificationChannel'} />
        }
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
