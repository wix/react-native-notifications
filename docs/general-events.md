---
id: general-events
title: General
sidebar_label: General
---

## registerRemoteNotificationsRegistered()
Fired when the user registers for remote notifications. The handler will be invoked with an event holding the hex string representing the `deviceToken`

```js
Notifications.events().registerRemoteNotificationsRegistered((event: Registered) => {
  console.log(event.deviceToken);
});
```

## registerNotificationReceived()
Fired when a remote notification is received in foreground state. The handler will be invoked with an instance of `Notification`.
Should call completion function on iOS, will be ignored on Android.

```js
Notifications.events().registerNotificationReceived((notification: Notification, completion: (response: NotificationCompletion) => void) => {
  console.log(JSON.stringify(notification.data));

  // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
  completion({alert: true, sound: true, badge: false});
});
```

## registerRemoteNotificationOpened()
Fired when a remote notification is opened from dead or background state. The handler will be invoked with an instance of `Notification`.
Should call completion function on iOS, will be ignored on Android.

```js
Notifications.events().registerRemoteNotificationOpened((notification: Notification, completion: () => void) => {
  console.log(JSON.stringify(notification.data));
  completion();
});
```

## registerRemoteNotificationsRegistrationFailed()
Fired when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. The handler will be invoked with {localizedDescription: string, code: string, domain: string}.

```js
Notifications.events().registerRemoteNotificationsRegistrationFailed((event: RegistrationError) => {
  console.log(event.code, event.localizedDescription, event.domain);
});
```