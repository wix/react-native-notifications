'use strict';

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

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
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>Wix React Native Notifications</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('WixRNNotifications', () => MainComponent);
