# React Native Notifications [![Build Status](https://travis-ci.org/wix/react-native-notifications.svg)](https://travis-ci.org/wix/react-native-notifications)

Handle all the aspects of push notifications for your app, including remote and local notifications, interactive notifications, silent notifications, and more.

**All the native iOS notifications features are supported!** 

_For information regarding proper integration with [react-native-navigation](https://github.com/wix/react-native-navigation), follow [this wiki](https://github.com/wix/react-native-notifications/wiki/Android:-working-with-RNN)._


### iOS

<img src="https://s3.amazonaws.com/nrjio/interactive.gif" alt="Interactive notifications example" width=350/>

- Remote (push) notifications
- Local notifications
- Background/Managed notifications (notifications that can be cleared from the server, like Facebook messenger and Whatsapp web)
- PushKit API (for VoIP and other background messages)
- Interactive notifications (allows you to provide additional functionality to your users outside of your application such as action buttons)

### Android

- Receiving notifications in any App state (foreground, background, "dead")
- Local notifications
- Built-in notification drawer management
- High degree of code extensibility to allow for advanced custom layouts and any specific notifications behavior as available by [Android's API](https://developer.android.com/training/notify-user/build-notification.html)
- Android equivalent of React-Native's implementation of [`PushNotificationsIOS.getInitialNotification()`](https://facebook.github.io/react-native/docs/pushnotificationios.html#getinitialnotification).

_Upcoming: background-state Rx queue (iOS equivalent)_


# Table of Content

- [Installation and setup](./docs/installation.md) - Setting up the library in your app
- [Subscription](./docs/subscription.md) - Signing in to push notifications vendors (e.g. GCM)
- [Notification Events (notfications core)](./docs/notificationsEvents.md) - Handling push notification arrival, notification opening by users
- [Local notifications](./docs/localNotifications.md) - Manually triggering notifications (i.e. not via push)
- [Advanced iOS topics](./docs/advancedIos.md) - e.g. managed notifications, PushKit API, Notifications actions
- [Notifications layout control - Android (wiki page)](https://github.com/wix/react-native-notifications/wiki/Android:-Layout-Customization) - Learn how to fully customize your notifications layout on Android!

# License
The MIT License.

See [LICENSE](LICENSE)
