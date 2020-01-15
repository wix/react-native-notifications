---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

# React Native Notifications Getting Started Guide

Currently this guide is written for `react-native-notifications@3.0.0-beta.4` and above.

For versions `2.x.x`, visit this [installation guide][https://github.com/wix/react-native-notifications/blob/v2/docs/installation.md].

#### 1. Add react-native-notifications to your dependencies

```
$ npm install --save react-native-notifications@3.0.0-beta.4
```
 (or)
 
 For npm use
```
$ yarn add react-native-notifications
```

#### 2. Link native dependencies

From react-native 0.60 autolinking will take care of the link step but we still need to run `pod install`

iOS:

```
$ pod install --project-directory=ios/
```

Start monitor notifications in: `application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions`

```objective-c

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	[RNNotifications startMonitorNotifications]; // -> Add this line

	return YES;
}

```
And add the following methods to support registration:

```objective-c

- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
  [RNNotifications didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}

- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
  [RNNotifications didFailToRegisterForRemoteNotificationsWithError:error];
}

Android:

For Android installation, please refer to the [Android installation doc](installation-android.md) where you can find detailed step on how to start using Google's FCM service.


#### 3. Register for notification events

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
