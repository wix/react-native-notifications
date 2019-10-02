---
id: notification-object
title: Notification object
sidebar_label: Notification
---

Contains the payload data.


Example:
```js
Notifications.events().registerNotificationReceived((notification: Notification, completion: (response: NotificationCompletion) => void) => {
  // Prints the notification payload
  console.log(JSON.stringify(notification.data));

  completion({alert: false, sound: false, badge: false});
});
```