import React, {useState, useEffect} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button,
  Platform,
} from 'react-native';
import {
  Notifications,
  NotificationAction,
  NotificationCategory,
  NotificationBackgroundFetchResult,
  Notification,
} from '../lib/src';

function NotificationsExampleApp() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [openedNotifications, setOpenedNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    registerNotificationEvents();
    setCategories();
    getInitialNotifaction();
  }, [])

  const registerNotificationEvents = () => {    
    Notifications.events().registerNotificationReceivedForeground((notification, completion) => {
      setNotifications([...notifications, notification]);
      completion({alert: notification.payload.showAlert, sound: false, badge: false});
    });

    Notifications.events().registerNotificationOpened((notification, completion) => {
      console.log({notification});
      completion();
    });

    Notifications.events().registerNotificationReceivedBackground((notification, completion) => {
      completion(NotificationBackgroundFetchResult.NO_DATA);
    });

    if (Platform.OS === 'ios') {
      Notifications.ios.events().appNotificationSettingsLinked(() => {
        console.warn('App Notification Settings Linked')
      });
    }
  }

  const requestPermissionsIos = (options) => {
    Notifications.ios.registerRemoteNotifications(
      Object.fromEntries(options.map(opt => [opt, true]))
    );
  }

  const requestPermissions = () => {
    Notifications.registerRemoteNotifications();
  }

  const setCategories = () => {
    const upvoteAction = new NotificationAction(
      'UPVOTE_ACTION',
      'background',
      String.fromCodePoint(0x1F44D),
      false,
    );

    const replyAction = new NotificationAction(
      'REPLY_ACTION',
      'background',
      'Reply',
      true,
      {
        buttonTitle: 'Reply now',
        placeholder: 'Insert message'
      },
    );


    const category = new NotificationCategory(
      'SOME_CATEGORY',
      [upvoteAction, replyAction]
    );

    Notifications.setCategories([category]);
  }

  const sendLocalNotification = () => {
    Notifications.postLocalNotification({
      identifier: '0',
      body: 'Local notification!',
      title: 'Local Notification Title',
      sound: 'chime.aiff',
      badge: 0,
      type: '',
      thread: '',
      payload: {
        category: 'SOME_CATEGORY',
        link: 'localNotificationLink',
        android_channel_id: 'my-channel',
      }
    });
  }

  const removeAllDeliveredNotifications = () => {
    Notifications.removeAllDeliveredNotifications();
  }

  const setNotificationChannel = () => {
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

  const getInitialNotifaction = async () => {
    const initialNotification = await Notifications.getInitialNotification();    
    if (initialNotification) {
      setOpenedNotifications([initialNotification, ...openedNotifications]);
    }
  }

  const renderNotification = (notification) => {
    return (
      <View style={{backgroundColor: 'lightgray', margin: 10}}>
        <Text>{`Title: ${notification.title}`}</Text>
        <Text>{`Body: ${notification.body}`}</Text>
        <Text>{`Extra Link Param: ${notification.payload.link}`}</Text>
      </View>
    );
  }

  const renderOpenedNotification = (notification) => {
    return (
      <View style={{backgroundColor: 'lightgray', margin: 10}}>
        <Text>{`Title: ${notification.title}`}</Text>
        <Text>{`Body: ${notification.body}`}</Text>
        <Text>{`Notification Clicked: ${notification.payload.link}`}</Text>
      </View>
    );
  }

  const checkPermissions = () => {
    Notifications.ios.checkPermissions().then((currentPermissions) => {
      console.warn(currentPermissions);
    });
  }

  const isRegistered = () => {
    Notifications.isRegisteredForRemoteNotifications().then((registered) => {
      console.warn(registered);
    });
  }

  return (
    <View style={styles.container}>
      <Button title={'Request permissions'} onPress={requestPermissions} testID={'requestPermissions'} />
      {Platform.OS === 'ios' && Platform.Version > '12.0' && (<>
        <Button title={'Request permissions with app notification settings'} onPress={() => requestPermissionsIos(['providesAppNotificationSettings'])} testID={'requestPermissionsWithAppSettings'} />
        <Button title={'Request permissions with provisional'} onPress={() => requestPermissionsIos(['provisional'])} testID={'requestPermissionsWithAppSettings'} />
        <Button title={'Request permissions with app notification settings and provisional'} onPress={() => requestPermissionsIos(['providesAppNotificationSettings', 'provisional'])} testID={'requestPermissionsWithAppSettings'} />
        <Button title={'Check permissions'} onPress={checkPermissions} />
      </>)}
      {Platform.OS === 'android' &&
        <Button title={'Set channel'} onPress={setNotificationChannel} testID={'setNotificationChannel'} />
      }
      <Button title={'Send local notification'} onPress={sendLocalNotification} testID={'sendLocalNotification'} />
      <Button title={'Remove all delivered notifications'} onPress={removeAllDeliveredNotifications} />
      <Button title={'Check registeration'} onPress={isRegistered} />
      {notifications.map((notification, idx) => (
        <View key={`notification_${idx}`}>
          {renderNotification(notification)}
        </View>
      ))}
      {openedNotifications.map((notification, idx) => (
        <View key={`notification_${idx}`}>
          {renderOpenedNotification(notification)}
        </View>
      ))}
    </View>
  );
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
