---
id: notification-object
title: Notification object
sidebar_label: Notification
---

Contains the payload data.

- **`identifier`**- returns the notification's identifier string.
- **`title`**- returns the notification's title string.
- **`subtitle`**- returns the notification's title string. (iOS only)
- **`body`**- returns the notification's main message string.
- **`sound`**- returns the sound string from the `aps` object.
- **`badge`**- returns the badge count number from the `aps` object.
- **`category`**- returns the category from the `aps` object (related to interactive notifications).
- **`payload`**- returns the full payload sent from server.

Example:
```js
Notifications.events().registerNotificationReceived((notification: Notification, completion: (response: NotificationCompletion) => void) => {
  // Prints the notification payload
  console.log(JSON.stringify(notification.payload));

  completion({alert: false, sound: false, badge: false});
});
```