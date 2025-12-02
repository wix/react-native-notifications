---
id: getting-started
title: React Native Notifications Getting Started Guide
sidebar_label: Getting Started
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Currently this guide is written for `react-native-notifications@^3.0.0`.  
We also assume you use `react-native@60.x.x` and above.

For older versions, visit this [installation guide](https://github.com/wix/react-native-notifications/blob/v2/docs/installation.md).

## Introduction 
This library supports 2 kinds of motifications. 
1. Local Notifications: These notifications are sent by an application to the device, on which it is running. The notification never leaves the device, on which the application is running. For more details on SENDING local notification, please, refer to [Local Notifications](https://github.com/wix/react-native-notifications/edit/master/website/docs/docs/localNotifications.md) 
2. Push Notifications. These notifications are sent by an application to any device through a communication/push server. This library provides support for RECEIVING push notifications. For push notifications to work, you need to (1) register the devices, which can receive notifications, on some server/db, and (2) setup notification listeneres on these devices. To register devices, please refer to [Subscription](https://github.com/wix/react-native-notifications/blob/master/website/docs/docs/subscription.md). To setup notification listeneres, please refer to [Events](https://github.com/wix/react-native-notifications/blob/master/website/docs/docs/notifications-events.md). To send a notification you need to use a communication/push server. SENDING push notifications is NOT part of this library. 

## Add react-native-notifications to your dependencies

<Tabs
  defaultValue="npm"
  values={[
    { label: 'Npm', value: 'npm', },
    { label: 'Yarn', value: 'yarn', },
  ]}>
<TabItem value="npm">

```shell
$ npm install --save react-native-notifications
```

</TabItem>
<TabItem value="yarn">

```shell
$ yarn add react-native-notifications
```

</TabItem>
</Tabs>

## Link native dependencies

### iOS

```shell
$ pod install --project-directory=ios/
```

Add the following line at the top of your `AppDelegate.m`

```objectivec
#import "RNNotifications.h"
```

Start monitor notifications in `AppDelegate.m`:

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	[RNNotifications startMonitorNotifications]; // -> Add this line

	return YES;
}
```

And add the following methods to support registration to `AppDelegate.m`:

```objectivec
- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
  [RNNotifications didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}
```

```objectivec
- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
  [RNNotifications didFailToRegisterForRemoteNotificationsWithError:error];
}
```

```objectivec
- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult result))completionHandler {
  [RNNotifications didReceiveBackgroundNotification:userInfo withCompletionHandler:completionHandler];
}
```

### Android

For Android installation, please refer to the [Android installation doc](installation-android.md) where you can find detailed step on how to start using Google's FCM service.

## Register for notification events

```jsx
import React, { Component } from 'react';
import {Notifications} from 'react-native-notifications';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    Notifications.registerRemoteNotifications();

    Notifications.events().registerNotificationReceivedForeground((notification: Notification, completion) => {
      console.log(`Notification received in foreground: ${notification.title} : ${notification.body}`);
      completion({alert: false, sound: false, badge: false});
    });

    Notifications.events().registerNotificationOpened((notification: Notification, completion) => {
      console.log(`Notification opened: ${notification.payload}`);
      completion();
    });
  }
}
```

Next, check out the [API Reference](../api/general-api).
