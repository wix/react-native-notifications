---
id: general-events
title: Events subscription
sidebar_label: Events subscription
---

## getInitialNotification
Return the notification that caused the app to launch from dead state.

```js
const notification: Notification = await getInitialNotification();
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
const hasPermissions: boolean = await getInitialNotification();
```
