# Advanced API - <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/2000px-Apple_logo_black.svg.png" width=30/> iOS

## Managed Notifications

Managed notifications are notifications that can be cleared by a server request.
You can find this feature in facebook messenger, when you receive a message in your mobile, but open it in facebook web. More examples are Whatsapp web and gmail app.

In order to handle managed notifications, your app must support background notifications, and the server should send the notifications you'd like to "manage" a bit differently. Let's start.

First, enable the *Remote notifications* checkbox under **capabilities - Background Modes**:
![Background Modes](http://docs.urbanairship.com/_images/ios-background-push-capabilities1.png)

Then, add the following lines to `info.plist`:

```xml
<key>UIBackgroundModes</key>
<array>
	<string>remote-notification</string>
</array>
```

That's it for the client side!

Now the server should push the notification a bit differently- background instead of reguler. You should also provide the action (`CREATE` notification or `CLEAR` notification), and `notificationId` as a unique identifier of the notification.

**Regular** notification payload:

```javascript
{
  aps: {
    alert: {
      body: "This is regular notification"
	},
	badge: 5,
	sound: "chime.aiff",
  }
}
```

**Managed** notification payload:

```javascript
{
  aps: {
  	"content-available": 1
  },
  managedAps: {
    action: "CREATE", // set it to "CLEAR" in order to clear the notification remotely
    notificationId: "1234", // must be unique identifier
    sound: "chime.aiff",
    alert: {
      body: "This is managed notification"
    }
  }
}
```

---

## Remove notifications

### getDeliveredNotifications

`PushNotification.getDeliveredNotifications(callback: (notifications: Array<Object>) => void)` 

Provides you with a list of the app’s notifications that are still displayed in Notification Center.

### removeDeliveredNotifications

`PushNotification.removeDeliveredNotifications(identifiers: Array<String>)` 

Removes the specified notifications from Notification Center.

### removeAllDeliveredNotifications

`PushNotification.removeAllDeliveredNotifications()` 

Removes all delivered notifications from Notification Center.

---

## PushKit API

The PushKit framework provides the classes for your iOS apps to receive background pushes from remote servers. it has better support for background notifications compared to regular push notifications with `content-available: 1`. More info in [iOS PushKit documentation](https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/PushKit_Framework/).

### Register to PushKit
After [preparing your app to receive VoIP push notifications](https://developer.apple.com/library/ios/documentation/Performance/Conceptual/EnergyGuide-iOS/OptimizeVoIP.html), add the following lines to `appDelegate.m` in order to support PushKit events:

```objective-c
#import "RNNotifications.h"
#import <PushKit/PushKit.h>
``` 

And the following methods:

```objective-c
// PushKit API Support
- (void)pushRegistry:(PKPushRegistry *)registry didUpdatePushCredentials:(PKPushCredentials *)credentials forType:(NSString *)type
{
  [RNNotifications didUpdatePushCredentials:credentials forType:type];
}

- (void)pushRegistry:(PKPushRegistry *)registry didReceiveIncomingPushWithPayload:(PKPushPayload *)payload forType:(NSString *)type
{
  [RNNotifications didReceiveRemoteNotification:payload.dictionaryPayload];
}
```

In your ReactNative code, add event handler for `pushKitRegistered` event and call to `registerPushKit()`:

```javascript
constructor() {
	NotificationsIOS.addEventListener('pushKitRegistered', this.onPushKitRegistered.bind(this));
    NotificationsIOS.registerPushKit();
}

onPushKitRegistered(deviceToken) {
	console.log("PushKit Token Received: " + deviceToken);
}

componentWillUnmount() {
	// Don't forget to remove the event listeners to prevent memory leaks!
	NotificationsIOS.removeEventListener('pushKitRegistered', onPushKitRegistered(this));
}
```

> 1. Notice that PushKit device token and regular notifications device token are different, so you must handle two different tokens in the server side in order to support this feature.
> 2. PushKit will not request permissions from the user for push notifications.


---

## Interactive / Actionable Notifications

> This section provides description for iOS. For notifications customization on Android, refer to [our wiki](https://github.com/wix/react-native-notifications/wiki/Android-Customizations#customizing-notifications-layout).

Interactive notifications allow you to reply to a message right from the notification banner or take action right from the lock screen. 

On the Lock screen and within Notification Center, you swipe from right to left 
to reveal actions. Destructive actions, like trashing an email, are color-coded red. Relatively neutral actions, like dismissing an alert or declining an invitation, are color-coded gray.

For banners, you pull down to reveal actions as buttons. For popups, the actions are immediately visible — the buttons are right there.

You can find more info about interactive notifications [here](http://www.imore.com/interactive-notifications-ios-8-explained).

![Interactive Notifications](http://i.imgur.com/XrVzy9w.gif)


Notification **actions** allow the user to interact with a given notification.

Notification **categories** allow you to group multiple actions together, and to connect the actions with the push notification itself.

In order to support interactive notifications, firstly add the following methods to `appDelegate.m` file:

```objective-c
// Required for the notification actions.
- (void)application:(UIApplication *)application handleActionWithIdentifier:(NSString *)identifier forLocalNotification:(UILocalNotification *)notification withResponseInfo:(NSDictionary *)responseInfo completionHandler:(void (^)())completionHandler
{
  [RNNotifications handleActionWithIdentifier:identifier forLocalNotification:notification withResponseInfo:responseInfo completionHandler:completionHandler];
}

- (void)application:(UIApplication *)application handleActionWithIdentifier:(NSString *)identifier forRemoteNotification:(NSDictionary *)userInfo withResponseInfo:(NSDictionary *)responseInfo completionHandler:(void (^)())completionHandler
{
  [RNNotifications handleActionWithIdentifier:identifier forRemoteNotification:userInfo withResponseInfo:responseInfo completionHandler:completionHandler];
}
```

Then, follow the basic workflow of adding interactive notifications to your app:

1. Config the actions.
2. Group actions together into categories.
3. Register to push notifications with the configured categories.
4. Push a notification (or trigger a [local](#triggering-local-notifications) one) with the configured category name.

### Example
#### Config the Actions
We will config two actions: upvote and reply.

```javascript
import NotificationsIOS, { NotificationAction, NotificationCategory } from 'react-native-notifications';

let upvoteAction = new NotificationAction({
  activationMode: "background",
  title: String.fromCodePoint(0x1F44D),
  identifier: "UPVOTE_ACTION",
  textInput: {
    buttonTitle: 'title',
    placeholder: 'placeholder text'
  }
}, (action, completed) => {
  console.log("ACTION RECEIVED");
  console.log(JSON.stringify(action));

  // You must call to completed(), otherwise the action will not be triggered
  completed();
});

let replyAction = new NotificationAction({
  activationMode: "background",
  title: "Reply",
  behavior: "textInput",
  authenticationRequired: true,
  identifier: "REPLY_ACTION"
}, (action, completed) => {
  console.log("ACTION RECEIVED");
  console.log(action);

  completed();
});

```

#### Config the Category
We will group `upvote` action and `reply` action into a single category: `EXAMPLE_CATEGORY `. If the notification contains `EXAMPLE_CATEGORY ` under `category` field, those actions will appear.

```javascript
let exampleCategory = new NotificationCategory({
  identifier: "EXAMPLE_CATEGORY",
  actions: [upvoteAction, replyAction],
  context: "default"
});
```

#### Register to Push Notifications
Instead of basic registration like we've done before, we will register the device to push notifications with the category we've just created.

```javascript
NotificationsIOS.requestPermissions([exampleCategory]);
```

#### Push an Interactive Notification
Notification payload should look like this:

```javascript
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
- `behavior` - Indicating additional behavior that the action supports.
	- `default` - No additional behavior.
	- `textInput` - When button is tapped, the action opens a text input. the text will be delivered to your action callback.
- `destructive` - A Boolean value indicating whether the action is destructive. When the value of this property is `true`, the system displays the corresponding button differently to indicate that the action is destructive.
- `authenticationRequired` - A Boolean value indicating whether the user must unlock the device before the action is performed.

### `NotificationCategory` Payload

- `identifier` - The name of the action group (must be unique).
- `actions` - An array of `NotificationAction` objects, which related to this category.
- `context` - Indicating the amount of space available for displaying actions in a notification.
	- `default` (default) - Displayes up to 4 actions (full UI).
	- `minimal` - Displays up tp 2 actions (minimal UI).

	
#### Get and set application icon badges count (iOS only) 

Get the current number:
```javascript
NotificationsIOS.getBadgesCount((count) => console.log(count));
```

Set to specific number: 
```javascript
NotificationsIOS.setBadgesCount(2);
```
Clear badges icon:
```javascript
NotificationsIOS.setBadgesCount(0);
```
