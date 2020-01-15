---
id: getting-started
title: React Native Notifications Getting Started Guide
sidebar_label: Getting Started
---

Currently this guide is written for `react-native-notifications@3.0.0-beta.4`.
We also assume you use `react-native@60.x.x` and above.

For older versions, visit this [installation guide](https://github.com/wix/react-native-notifications/blob/v2/docs/installation.md).

## Add react-native-notifications to your dependencies

#### With npm
```
$ npm install --save react-native-notifications@3.0.0-beta.4
```
 
#### Or with yarn
```
$ yarn add react-native-notifications
```

## Link native dependencies

### iOS

```
$ pod install --project-directory=ios/
```

Start monitor notifications in `AppDelegate.m`:

```objective-c

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	[RNNotifications startMonitorNotifications]; // -> Add this line

	return YES;
}

```
And add the following methods to support registration to `AppDelegate.m`:

```objective-c

- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
  [RNNotifications didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}

- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
  [RNNotifications didFailToRegisterForRemoteNotificationsWithError:error];
}
```

### Android

For Android installation, please refer to the [Android installation doc](installation-android.md) where you can find detailed step on how to start using Google's FCM service.

## Register for notification events

```js
import React, { Component } from 'react';
import {Notifications} from 'react-native-notifications';

class MyComponent extends Component {
  constructor() {
    Notifications.registerRemoteNotifications();

    Notifications.events().registerNotificationReceived((notification: Notification, completion) => {
      console.log(`Notification received in foreground: ${notification.title} : ${notification.body}`);
      completion({alert: false, sound: false, badge: false});
    });

    Notifications.events().registerRemoteNotificationOpened((notification: Notification, completion) => {
      console.log(`Notification opened: ${notification.payload}`);
      completion();
    });
  }
}
```

Next, check out the [API Reference](general-api.md).
