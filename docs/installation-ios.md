---
id: installation-ios
title: iOS Installation
sidebar_label: iOS Installation
---

As with any React Native project, the first step is to add the project as an npm dependency.

Start by running this:

```
$ npm install react-native-notifications --save
```

### Installation with CocoaPods

Projects generated using newer versions of react-native use CocoaPods by default. In that case it's easier to install react-native-navigation using CocoaPods.

1. Add the following to `Podfile`:

```diff
platform :ios, '9.0'
require_relative '../node_modules/@react-native-community/cli-platform-ios/native_modules'

target 'YourApp' do
  # Pods for YourApp
  pod 'React', :path => '../node_modules/react-native/'
  pod 'React-Core', :path => '../node_modules/react-native/React'
  pod 'React-DevSupport', :path => '../node_modules/react-native/React'
  pod 'React-fishhook', :path => '../node_modules/react-native/Libraries/fishhook'
  pod 'React-RCTActionSheet', :path => '../node_modules/react-native/Libraries/ActionSheetIOS'
  pod 'React-RCTAnimation', :path => '../node_modules/react-native/Libraries/NativeAnimation'
  pod 'React-RCTBlob', :path => '../node_modules/react-native/Libraries/Blob'
  pod 'React-RCTImage', :path => '../node_modules/react-native/Libraries/Image'
  pod 'React-RCTLinking', :path => '../node_modules/react-native/Libraries/LinkingIOS'
  pod 'React-RCTNetwork', :path => '../node_modules/react-native/Libraries/Network'
  pod 'React-RCTSettings', :path => '../node_modules/react-native/Libraries/Settings'
  pod 'React-RCTText', :path => '../node_modules/react-native/Libraries/Text'
  pod 'React-RCTVibration', :path => '../node_modules/react-native/Libraries/Vibration'
  pod 'React-RCTWebSocket', :path => '../node_modules/react-native/Libraries/WebSocket'

  pod 'React-cxxreact', :path => '../node_modules/react-native/ReactCommon/cxxreact'
  pod 'React-jsi', :path => '../node_modules/react-native/ReactCommon/jsi'
  pod 'React-jsiexecutor', :path => '../node_modules/react-native/ReactCommon/jsiexecutor'
  pod 'React-jsinspector', :path => '../node_modules/react-native/ReactCommon/jsinspector'
  pod 'yoga', :path => '../node_modules/react-native/ReactCommon/yoga'

  pod 'DoubleConversion', :podspec => '../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'
  pod 'glog', :podspec => '../node_modules/react-native/third-party-podspecs/glog.podspec'
  pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec'

+ pod 'ReactNativeNotifications', :podspec => '../node_modules/react-native-notifications/ReactNativeNotifications.podspec'

  use_native_modules!
end
```

2. `cd ios && pod install`

3. Add the following line at the top of your `AppDelegate.m`

```objective-c
#import "RNNotifications.h"
```

Start monitor notifications in: `application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions`

```objective-c

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	[RNNotifications startMonitorNotifications]; // -> Add this line

	return YES;
}

```

And add the following methods to support registration:

```objective-c

- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
  [RNNotifications didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}

- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
  [RNNotifications didFailToRegisterForRemoteNotificationsWithError:error];
}