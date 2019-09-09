---
id: general-api
title: General Commands
sidebar_label: General
---

## getInitialNotification
Return the notification that caused the app to launch from dead state.

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
