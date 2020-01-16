---
id: subscription
title: Push Notifications Subscription
sidebar_label: Subscription
---

The typical flow for subscribing a device for receiving push notification in real time is to first register the device at the vendor's servers (e.g. FCM), then publishing the received token to your own push management servers.

This section is about the first part of the flow.

In order to handle notifications, you must register the `remoteNotificationsRegistered` event beforehand.


In your React Native app:

```jsx
import {Notifications} from 'react-native-notifications';

class App extends Component {
	constructor() {
		Notifications.events().registerRemoteNotificationsRegistered((event: Registered) => {
			// TODO: Send the token to my server so it could send back push notifications...
			console.log("Device Token Received", event.deviceToken);
		});
		Notifications.events().registerRemoteNotificationsRegistrationFailed((event: RegistrationError) => {
			console.error(event);
		});

		Notifications.requestPermissions();
	}
}

```

When you have the device token, POST it to your server and register the device in your notifications provider (Amazon SNS, Azure, etc.).

You can check if the user granted permissions on iOS by calling `checkPermissions()`:

```jsx
Notifications.ios.checkPermissions().then((currentPermissions) => {
    console.log('Badges enabled: ' + !!currentPermissions.badge);
    console.log('Sounds enabled: ' + !!currentPermissions.sound);
    console.log('Alerts enabled: ' + !!currentPermissions.alert);
});
```
