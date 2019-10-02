---
id: general-api
title: General Commands
sidebar_label: General
---

## registerRemoteNotifications()
Requests remote notification permissions, prompting the user's dialog box on iOS and request a token on Android.
If the user accept the remote notifications permissions, `RemoteNotificationsRegistered` event will get called with the device token.

```js
Notifications.registerRemoteNotifications();
```

## getInitialNotification()
This method returns a promise. If the app was launched by a push notification, this promise resolves to an object of type Notification. Otherwise, it resolves to undefined.

```js
const notification: Notification = await Notifications.getInitialNotification();
```

## postLocalNotification(notification, id?)
Posts local notification to the device notification center.

```js
Notifications.postLocalNotification({
  body: 'Local notificiation!',
  title: 'Local Notification Title',
  sound: 'chime.aiff',
  category: 'SOME_CATEGORY',
  link: 'localNotificationLink',
  fireDate: new Date()
}, id);
```

## cancelLocalNotification(id)
Relevant for notifications sent with `fireDate`.

```js
Notifications.cancelLocalNotification(id);
```

## isRegisteredForRemoteNotifications()
Check if the app has permissions to send remote notifications.

```js
const hasPermissions: boolean = await Notifications.getInitialNotification();
```
