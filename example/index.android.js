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
  mainText: {
    fontSize: 20,
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

    setInterval(this.onTick.bind(this), 1000);
  }

  onTick() {
    this.setState({elapsed: this.state.elapsed + 1});
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => {console.log("Touch")}}>
          <Text style={styles.mainText}>Wix React Native Notifications</Text>
        </TouchableHighlight>
        <Text style={styles.mainText}>Last notification:</Text>
        <Text style={styles.mainText}>{this.state.lastNotification ? this.state.lastNotification.body + ` (opened at ''${this.state.notificationRxTime})` : "N/A"}</Text>
        <Text style={styles.mainText}>Time elapsed: {this.state.elapsed}</Text>
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
