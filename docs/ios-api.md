---
id: ios-api
title: iOS Specific Commands
sidebar_label: iOS specific
---

## requestPermissions
request permissions

```js
Notifications.ios.requestPermissions();
```

## checkPermissions
checkPermissions

```js
Notifications.ios.checkPermissions();
```

## abandonPermissions
Unregister for all remote notifications received via Apple Push Notification service

```js
Notifications.ios.abandonPermissions();
```

## registerPushKit
registerPushKit

```js
Notifications.ios.registerPushKit();
```

## cancelAllLocalNotifications
cancelAllLocalNotifications

```js
Notifications.ios.cancelAllLocalNotifications();
```

## getDeliveredNotifications
getDeliveredNotifications

```js
Notifications.ios.getDeliveredNotifications();
```

## removeAllDeliveredNotifications
removeAllDeliveredNotifications

```js
Notifications.ios.removeAllDeliveredNotifications();
```

## removeDeliveredNotifications
removeDeliveredNotifications

```js
Notifications.ios.removeDeliveredNotifications();
```

## getBadgeCount
getBadgeCount

```js
Notifications.ios.getBadgeCount();
```

## setBadgeCount
setBadgeCount

```js
Notifications.ios.setBadgeCount(1);
```