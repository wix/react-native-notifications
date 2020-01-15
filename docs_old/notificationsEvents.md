
# Handling Notification Events

## <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/2000px-Apple_logo_black.svg.png" width=30/> iOS

When a push notification is received by the device, the application can be in one of the following states:

1. **Forground:** When the app is running and is used by the user right now; in this case, a `notificationReceivedForeground` event will be fired, do not forget to invoke `completion()` callback.

Finally, when a notification is _opened_ by the device user (i.e. tapped-on), a `notificationOpened` event is fired, here as well you need to remember invoking `completion()` callback.

Example:

```javascript
constructor() {
    this._boundOnNotificationReceivedForeground = this.onNotificationReceivedForeground.bind(this);
    this._boundOnNotificationOpened = this.onNotificationOpened.bind(this);
    
    NotificationsIOS.addEventListener('notificationReceivedForeground', this._boundOnNotificationReceivedForeground);
    NotificationsIOS.addEventListener('notificationOpened', this._boundOnNotificationOpened);
}

onNotificationReceivedForeground(notification, completion) {
	completion({alert: true, sound: false, badge: false});
	console.log("Notification Received - Foreground", notification);
}

onNotificationOpened(notification, completion, action) {
	console.log("Notification opened by device user", notification);
	console.log(`Notification opened with an action identifier: ${action.identifier} and response text: ${action.text}`, notification);
	completion();
}

componentWillUnmount() {
	// Don't forget to remove the event listeners to prevent memory leaks!
	NotificationsIOS.removeEventListener('notificationReceivedForeground', this._boundOnNotificationReceivedForeground);
	NotificationsIOS.removeEventListener('notificationOpened', this._boundOnNotificationOpened);
}
```

### Notification Object

When you receive a push notification, you'll get an instance of `IOSNotification` object, contains the following methods:

- **`getMessage()`**- returns the notification's main message string.
- **`getSound()`**- returns the sound string from the `aps` object.
- **`getBadgeCount()`**- returns the badge count number from the `aps` object.
- **`getCategory()`**- returns the category from the `aps` object (related to interactive notifications).
- **`getData()`**- returns the data payload (additional info) of the notification.
- **`getType()`**- returns `managed` for managed notifications, otherwise returns `regular`.


## <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/APK_format_icon.png/768px-APK_format_icon.png" width=30/> Android

On Android the same core functionality is provided, but using a different API:

```javascript
import {NotificationsAndroid} from 'react-native-notifications';

// On Android, we allow for only one (global) listener per each event type.
NotificationsAndroid.setNotificationReceivedListener((notification) => {
	console.log("Notification received on device in background or foreground", notification.getData());
});
NotificationsAndroid.setNotificationReceivedInForegroundListener((notification) => {
	console.log("Notification received on device in foreground", notification.getData());
});
NotificationsAndroid.setNotificationOpenedListener((notification) => {
	console.log("Notification opened by device user", notification.getData());
});
```

### Notification Object

- **`getData()`**- content of the `data` section of the original message (sent to GCM).
- **`getTitle()`**- Convenience for returning `data.title`.
- **`getMessage()`**- Convenience for returning `data.body`.



## Querying initial notification (Android)

React-Native's [`PushNotificationsIOS.getInitialNotification()`](https://facebook.github.io/react-native/docs/pushnotificationios.html#getinitialnotification) allows for the async retrieval of the original notification used to open the App on iOS, but it has no equivalent implementation for Android.

While for iOS we nonetheless offer the more elaborate _Background Queue_ solution, on Android we've settled for an implementation similar to React Native's -- An API method `PendingNotifications.getInitialNotification()`, which returns a promise:

```javascript
import {NotificationsAndroid, PendingNotifications} from 'react-native-notifications';

PendingNotifications.getInitialNotification()
  .then((notification) => {
  		console.log("Initial notification was:", (notification ? notification.getData() : 'N/A'));
	})  	
  .catch((err) => console.error("getInitialNotifiation() failed", err));

```

> **Note**
> 
> Notifications are considered 'initial' under the following terms:

> - User tapped on a notification, _AND_ -
> - App was either not running at all ("dead" state), _OR_ it existed in the background with **no running activities** associated with it.
