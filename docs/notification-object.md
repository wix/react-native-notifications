---
id: notification-object
title: Notification object
sidebar_label: Notification
---

Contains the payload data.

- **`message`**- returns the notification's main message string.
- **`sound`**- returns the sound string from the `aps` object.
- **`badge`**- returns the badge count number from the `aps` object.
- **`category`**- returns the category from the `aps` object (related to interactive notifications).
- **`data`**- returns the data payload (additional info) of the notification.

Example:
```js
Notifications.events().registerNotificationReceived((notification: Notification, completion: (response: NotificationCompletion) => void) => {
  // Prints the notification payload
  console.log(JSON.stringify(notification.data));

  completion({alert: false, sound: false, badge: false});
});
```