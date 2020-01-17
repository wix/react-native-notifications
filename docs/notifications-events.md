---
id: notifications-events
title: Handling Notification Events
sidebar_label: Events
---

When a push notification is received by the device, the application can be in one of the following states:

1. **Forground:** When the app is running and is used by the user right now; in this case, a `notificationReceivedForeground` event will be fired, do not forget to invoke `completion()` callback.

Finally, when a notification is _opened_ by the device user (i.e. tapped-on), a `notificationOpened` event is fired, here as well you need to remember invoking `completion()` callback.

Example:

```jsx
constructor() {
    Notifications.events().registerNotificationReceivedForeground((notification: Notification, completion: (response: NotificationCompletion) => void) => {
			console.log("Notification Received - Foreground", notification.data);

			// Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
			completion({alert: true, sound: true, badge: false});
		});

    Notifications.events().registerNotificationOpened((notification: Notification, completion: () => void, action: NotificationActionResponse) => {
			console.log("Notification opened by device user", notification.data);
			console.log(`Notification opened with an action identifier: ${action.identifier} and response text: ${action.text}`);
			completion();
		});
}
```

### Notification Object

When you receive a push notification, you'll get an instance of [Notification](notification-object) object, contains the following methods:

## Querying initial notification

React-Native's [`PushNotificationsIOS.getInitialNotification()`](https://facebook.github.io/react-native/docs/pushnotificationios.html#getinitialnotification) allows for the async retrieval of the original notification used to open the App on iOS, but it has no equivalent implementation for Android.

```jsx
import {Notifications} from 'react-native-notifications';

Notifications.getInitialNotification()
  .then((notification) => {
  		console.log("Initial notification was:", (notification ? notification.data : 'N/A'));
	})  	
  .catch((err) => console.error("getInitialNotifiation() failed", err));

```

> **Note**
> 
> Notifications are considered 'initial' under the following terms:

> - User tapped on a notification, _AND_ -
> - App was either not running at all ("dead" state), _OR_ it existed in the background with **no running activities** associated with it.
