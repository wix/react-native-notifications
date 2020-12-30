<h1 align="center">
  <img src=".logo.png"/><br/>
  React Native Notifications
</h1>

![npm](https://img.shields.io/npm/dw/react-native-notifications.svg)
[![Build Status](https://img.shields.io/jenkins/s/http/jenkins-oss.wixpress.com:8080/job/multi-react-native-notifications-master.svg)](https://jenkins-oss.wixpress.com/job/multi-react-native-notifications-master/)
[![npm (tag)](https://img.shields.io/npm/v/react-native-notifications/latest.svg)](https://github.com/wix/react-native-notifications/tree/master)
[![npm (tag)](https://img.shields.io/npm/v/react-native-notifications/snapshot.svg)](https://github.com/wix/react-native-notifications/tree/master)

Handle all the aspects of push notifications for your app, including remote and local notifications, interactive notifications, silent notifications, and more.

**All the native iOS notifications features are supported!**

_For information regarding proper integration with [react-native-navigation](https://github.com/wix/react-native-navigation), follow [this wiki](https://github.com/wix/react-native-notifications/wiki/Android:-working-with-RNN)._

# Requirements

Apps using React Native Notifications may target iOS 10 and Android 5.0 (API 21). You may use Windows, macOS or Linux as your development operating system.

### iOS

<img src="https://s3.amazonaws.com/nrjio/interactive.gif" alt="Interactive notifications example" width=350/>

- Remote (push) notifications
- Local notifications
- Background/Managed notifications (notifications that can be cleared from the server, like Facebook messenger and Whatsapp web)
- PushKit API (for VoIP and other background messages)
- Interactive notifications (allows you to provide additional functionality to your users outside of your application such as action buttons)

### Android

- Receiving notifications in any App state (foreground, background, "dead")
- Built-in notification drawer management
- High degree of code extensibility to allow for advanced custom layouts and any specific notifications behavior as available by [Android's API](https://developer.android.com/training/notify-user/build-notification.html)
- Android equivalent of React-Native's implementation of [`PushNotificationsIOS.getInitialNotification()`](https://facebook.github.io/react-native/docs/pushnotificationios.html#getinitialnotification).

_Upcoming: local notifications, background-state Rx queue (iOS equivalent)_

# Quick Links

- [Getting Started](https://wix.github.io/react-native-notifications/docs/getting-started)
- [API](https://wix.github.io/react-native-notifications/api/general-api)
- [Documentation](https://wix.github.io/react-native-notifications/)

# License

The MIT License.

See [LICENSE](LICENSE)
