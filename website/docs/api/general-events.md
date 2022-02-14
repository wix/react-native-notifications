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

## registerNotificationReceivedForeground()
Fired when a remote notification is received in foreground state. The handler will be invoked with an instance of [Notification](notification-obj).
Should call completion function on iOS, will be ignored on Android.

```js
Notifications.events().registerNotificationReceivedForeground((notification: Notification, completion: (response: NotificationCompletion) => void) => {
  console.log(JSON.stringify(notification.payload));

  // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
  completion({alert: true, sound: true, badge: false});
});
```

## registerNotificationReceivedBackground()
Fired when a remote notification is received in background state. The handler will be invoked with an instance of [Notification](notification-obj).
Should call completion function on iOS, will be ignored on Android.

```js
Notifications.events().registerNotificationReceivedBackground((notification: Notification, completion: (response: NotificationCompletion) => void) => {
  console.log(JSON.stringify(notification.payload));

  // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
  completion({alert: true, sound: true, badge: false});
});
```

To receive background notifications on iOS follow [this guide](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/pushing_background_updates_to_your_app)

## registerNotificationOpened()
Fired when a remote notification is opened from dead or background state. The handler will be invoked with an instance of [Notification](notification-obj).
Should call completion function on iOS, will be ignored on Android.
Being called before component is mounted, if you want to know the initial notification in the component please use [getInitialNotification](general-api#getInitialNotification) on mount.

```js
Notifications.events().registerNotificationOpened((notification: Notification, completion: () => void) => {
  console.log(JSON.stringify(notification.payload));
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