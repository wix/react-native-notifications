# Installation

As with any React Native project, the first step is to add the project as an npm dependency.

The 2nd is to do some platform specific setup so as to be able to work with Apple and Google's services for push notifications.

Start by running this:

```
$ npm install react-native-notifications@^2.0.6 --save
```

## <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/2000px-Apple_logo_black.svg.png" width=30/> iOS

First, [Manually link](https://facebook.github.io/react-native/docs/linking-libraries-ios.html#manual-linking) the library to your Xcode project.

Then, to enable notifications support add the following line at the top of your `AppDelegate.m`

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

```

## <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/APK_format_icon.png/768px-APK_format_icon.png" width=30/> Android


Add a reference to the library's native code in your global `settings.gradle`:

```gradle
include ':reactnativenotifications'
project(':reactnativenotifications').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-notifications/lib/android/app')
```

Declare the library as a dependency in your **app-project's** `build.gradle`:

```gradle
dependencies {
	// ...
	
	compile project(':reactnativenotifications')
}
```

Add the library to your application class (e.g. `MainApplication.java`):

```java
import com.wix.reactnativenotifications.RNNotificationsPackage;

...

    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
	        // ...
	        // Add this line:
	        new RNNotificationsPackage(MainApplication.this)
        );
```

### Receiving push notifications

> Note: This section is only necessary in case you wish to be able to **receive** push notifications in your React-Native app.

Push notifications on Android are managed and dispatched using [Google's FCM service](https://firebase.google.com/docs/cloud-messaging). The following installation steps are a TL;DR of [Google's FCM setup guide](https://firebase.google.com/docs/cloud-messaging/android/client). You can follow them to get FCM integrated quickly, but we recommend that you will in the very least have a peek at the guide's overview.

#### Step #1: Subscribe to Google's FCM

To set FCM in your app, you must first create a google-services.json file. If you have no existing API project yet, the easiest way to go about in creating one is using [this step-by-step installation process](https://firebase.google.com/docs/android/setup);


#### Step #2: Copy google-services.json

After creating google-services.json, copy it into your project's android/app folder.

#### Step #3: Add google-services package to Project/build.gradle
```gradle
buildscript {
    ...
    dependencies {
        ...
        classpath 'com.google.gms:google-services:4.0.0'
    }
}
```

#### Step #4: Add firebase-core package and apply google-services plugin in Project/app/build.gradle
```gradle
dependencies {
    ...
    implementation 'com.google.firebase:firebase-core:16.0.0'
}

apply plugin: 'com.google.gms.google-services'
```
