'use strict';

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import {NotificationsAndroid, PendingNotifications} from './notifications';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
  },
  bodyText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
});

class MainComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      elapsed: 0,
      lastNotification: undefined
    }
  }

  componentWillMount() {
    NotificationsAndroid.setRegistrationTokenUpdateListener(this.onPushRegistered.bind(this));
    NotificationsAndroid.setNotificationOpenedListener(this.onNotificationOpened.bind(this));
    NotificationsAndroid.setNotificationReceivedListener(this.onNotificationReceived.bind(this));
  }

  componentDidMount() {
    setInterval(this.onTick.bind(this), 1000);
    PendingNotifications.getInitialNotification()
      .then((notification) => {console.log("getInitialNotification:", notification); this.setState({initialNotification: notification.getData()});})
      .catch((err) => console.error("getInitialNotifiation failed", err));
  }

  onTick() {
    this.setState({elapsed: this.state.elapsed + 1});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Wix React Native Notifications</Text>
        <Text style={styles.bodyText}>{this.state.initialNotification ? 'Opened from notification' : ''}</Text>
        <Text style={styles.bodyText}>Last notification: {this.state.lastNotification ? '\n'+this.state.lastNotification.body + ` (opened at ''${this.state.notificationRxTime})` : "N/A"}</Text>
        <Text style={styles.bodyText}>Time elapsed: {this.state.elapsed}</Text>
      </View>
    )
  }

  onPushRegistered() {
  }

  onNotificationOpened(notification) {
    console.log("onNotificationOpened: ", notification);
    this.setState({lastNotification: notification.getData(), notificationRxTime: this.state.elapsed});
  }

  onNotificationReceived(notification) {
    console.log("onNotificationReceived: ", notification);
  }
}

AppRegistry.registerComponent('WixRNNotifications', () => MainComponent);
