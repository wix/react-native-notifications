---
id: general-events
title: General
sidebar_label: General
---

## registerRemoteNotificationsRegistered
registerRemoteNotificationsRegistered

```js
Notifications.events().registerRemoteNotificationsRegistered((event: Registered) => {
  console.log(event.deviceToken);
});
```

## registerNotificationReceived
registerNotificationReceived

```js
Notifications.events().registerNotificationReceived((notification: Notification, completion: (response: NotificationCompletion) => void) => {
  console.log(JSON.stringify(notification.data));

  // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
  completion({alert: true, sound: true, badge: false});
});
```

## registerRemoteNotificationOpened
registerRemoteNotificationOpened

```js
Notifications.events().registerRemoteNotificationOpened((notification: Notification) => {
  console.log(JSON.stringify(notification.data));
});
```

## registerRemoteNotificationsRegistrationFailed
registerRemoteNotificationsRegistrationFailed

```js
Notifications.events().registerRemoteNotificationsRegistrationFailed(() => {
  
});
```