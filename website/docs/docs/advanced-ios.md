---
id: advanced-ios
title: iOS Advanced API
sidebar_label: iOS
---

## PushKit API

The PushKit framework provides the classes for your iOS apps to receive background pushes from remote servers. it has better support for background notifications compared to regular push notifications with `content-available: 1`. More info in [iOS PushKit documentation](https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/PushKit_Framework/).

### Register to PushKit
[Prepare your app to receive VoIP push notifications](https://developer.apple.com/library/ios/documentation/Performance/Conceptual/EnergyGuide-iOS/OptimizeVoIP.html)

### Listen to PushKit notifications
On receiving PushKit notification, a `pushKitNotificationReceived` event will be fired with the notification payload.

```js
Notifications.ios.events().registerPushKitNotificationReceived((payload: object, complete: Function) => {

  console.log(JSON.stringify(payload));

  // Important: This tells PushKit we are done and have shown the Incoming Call. So make sure to
  // show the call screen before calling complete
  complete();
});
``` 

In your ReactNative code, add event handler for `pushKitRegistered` event and call to `registerPushKit()`:

```jsx
constructor() {
  Notifications.ios.events().registerPushKitRegistered((event: RegisteredPushKit) => {
    console.log("PushKit Token Received: " + event.pushKitToken);
  });
  
  Notifications.ios.events().registerPushKitNotificationReceived((payload: object, complete: Function) => {
    console.log('PushKit notification Received: ' + JSON.stringify(payload));

    complete();
  });

  // Important: This tells PushKit we are done and have shown the Incoming Call. So make sure to
  // show the call screen before calling complete
  Notifications.ios.registerPushKit();
}
```

:::note
1. Notice that PushKit device token and regular notifications device token are different, so you must handle two different tokens in the server side in order to support this feature.
2. PushKit will not request permissions from the user for push notifications.
:::

---

## Interactive / Actionable Notifications
:::note
This section provides description for iOS. For notifications customization on Android, refer to [our wiki](https://github.com/wix/react-native-notifications/wiki/Android-Customizations#customizing-notifications-layout).
:::

Interactive notifications allow you to reply to a message right from the notification banner or take action right from the lock screen. 

On the Lock screen and within Notification Center, you swipe from right to left 
to reveal actions. Destructive actions, like trashing an email, are color-coded red. Relatively neutral actions, like dismissing an alert or declining an invitation, are color-coded gray.

For banners, you pull down to reveal actions as buttons. For popups, the actions are immediately visible — the buttons are right there.

You can find more info about interactive notifications [here](http://www.imore.com/interactive-notifications-ios-8-explained).

![Interactive Notifications](http://i.imgur.com/XrVzy9w.gif)


Notification **actions** allow the user to interact with a given notification.

Notification **categories** allow you to group multiple actions together, and to connect the actions with the push notification itself.

Follow the basic workflow of adding interactive notifications to your app:

1. Config the actions.
2. Group actions together into categories.
3. Register to push notifications with the configured categories.
4. Push a notification (or trigger a [local](#triggering-local-notifications) one) with the configured category name.

### Example
#### Config the Actions
We will config two actions: upvote and reply.

```jsx
import { Notifications, NotificationAction, NotificationCategory } from 'react-native-notifications';

let upvoteAction = new NotificationAction({
  activationMode: "background",
  title: String.fromCodePoint(0x1F44D),
  identifier: "UPVOTE_ACTION",
  textInput: {
    buttonTitle: 'title',
    placeholder: 'placeholder text'
  }
});

let replyAction = new NotificationAction({
  activationMode: "background",
  title: "Reply",
  authenticationRequired: true,
  identifier: "REPLY_ACTION"
});

```

#### Config the Category
We will group `upvote` action and `reply` action into a single category: `EXAMPLE_CATEGORY `. If the notification contains `EXAMPLE_CATEGORY ` under `category` field, those actions will appear.

```jsx
let exampleCategory = new NotificationCategory({
  identifier: "EXAMPLE_CATEGORY",
  actions: [upvoteAction, replyAction]
});
```

#### Register to Push Notifications
Instead of basic registration like we've done before, we will register the device to push notifications with the category we've just created.

```jsx
Notifications.setCategories([exampleCategory]);
```

#### Push an Interactive Notification
Notification payload should look like this:

```jsx
{
  aps: {
	  // ... (alert, sound, badge, etc)
	  category: "EXAMPLE_CATEGORY"
  }
}
```

The [example app](https://github.com/wix/react-native-notifications/tree/master/example) contains this interactive notification example, you can follow there.

### `NotificationAction` Payload

- `title` - Action button title.
- `identifier` - Action identifier (must be unique).
- `activationMode` - Indicating whether the app should activate to the foreground or background.
	- `foreground` (default) - Activate the app and put it in the foreground.
	- `background` - Activate the app and put it in the background. If the app is already in the foreground, it remains in the foreground.
- `textInput` - `TextInput` payload, when supplied, the system will present text input in this action.
- `destructive` - A Boolean value indicating whether the action is destructive. When the value of this property is `true`, the system displays the corresponding button differently to indicate that the action is destructive.
- `authenticationRequired` - A Boolean value indicating whether the user must unlock the device before the action is performed.

### `NotificationCategory` Payload

- `identifier` - The name of the action group (must be unique).
- `actions` - An array of `NotificationAction` objects, which related to this category.

### `TextInput` Payload

- `buttonTitle` - Title of the `send` button.
- `placeholder` - Placeholder for the `textInput`.

	
#### Get and set application icon badges count (iOS only) 

Get the current number:
```jsx
Notifications.ios.getBadgeCount((count) => console.log(count));
```

Set to specific number: 
```jsx
Notifications.ios.setBadgeCount(2);
```
Clear badges icon:
```jsx
Notifications.ios.setBadgeCount(0);
```
