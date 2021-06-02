---
id: ios-api
title: iOS Specific Commands
sidebar_label: iOS specific
---

## requestPermissions(options?: string[])
Requests notification permissions from iOS, prompting the user's dialog box.

```js
Notifications.ios.requestPermissions(['ProvidesAppNotificationSettings']);
```

## checkPermissions()
See what push permissions are currently enabled.

```js
Notifications.ios.checkPermissions();
```

## abandonPermissions()
Unregister for all remote notifications received via Apple Push Notification service.

You should call this method in rare circumstances only, such as when a new version of the app removes support for all types of remote notifications. Users can temporarily prevent apps from receiving remote notifications through the Notifications section of the Settings app. Apps unregistered through this method can always re-register.

```js
Notifications.ios.abandonPermissions();
```

## registerPushKit()
Register for PushKit notifications

```js
Notifications.ios.registerPushKit();
```

## cancelAllLocalNotifications()
Cancels all scheduled localNotifications

```js
Notifications.ios.cancelAllLocalNotifications();
```

## getDeliveredNotifications()
Provides you with a list of the app’s notifications that are still displayed in Notification Center

```js
Notifications.ios.getDeliveredNotifications();
```

## removeDeliveredNotifications()
Removes the specified notifications from Notification Center

```js
Notifications.ios.removeDeliveredNotifications(identifiers);
```

## getBadgeCount()
Gets the badge count number from the aps object

```js
Notifications.ios.getBadgeCount();
```

## setBadgeCount()
Sets the badge number for the app icon on the home screen

```js
Notifications.ios.setBadgeCount(1);
```