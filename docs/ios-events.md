---
id: ios-events
title: iOS
sidebar_label: iOS specific
---

## registerPushKitRegistered
registerPushKitRegistered

```js
Notifications.events().registerPushKitRegistered((event: RegisteredPushKit) => {
  console.log(event.pushKitToken);
});
```

## registerPushKitNotificationReceived
registerPushKitNotificationReceived

```js
Notifications.events().registerPushKitNotificationReceived((event: object) => {
  console.log(JSON.stringify(event));
});
```

