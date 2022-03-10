---
id: ios-events
title: iOS
sidebar_label: iOS specific
---

## registerPushKitRegistered()
Fired when the user registers for PushKit notifications. The handler will be invoked with an event holding the hex string representing the `pushKitToken`

```js
Notifications.ios.events().registerPushKitRegistered((event: RegisteredPushKit) => {
  console.log(event.pushKitToken);
});
```

## registerPushKitNotificationReceived()
Fired when a PushKit notification is received. The handler will be invoked with the notification object.

```js
Notifications.ios.events().registerPushKitNotificationReceived((payload: object) => {
  console.log(JSON.stringify(payload));
});
```

## appNotificationSettingsLinked()
Fired when the link to app notification settings was clicked.

```js
Notifications.ios.events().appNotificationSettingsLinked(() => {
  console.log('App Notification Settings Linked');
  // navigate to settings
});
```

