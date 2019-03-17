# Installation

As with any React Native project, the first step is to add the project as an npm dependency.

The 2nd is to do some platform specific setup so as to be able to work with Apple and Google's services for push notifications.

Start by running this:

```
$ npm install react-native-notifications --save
```

## <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/2000px-Apple_logo_black.svg.png" width=30/> iOS

First, [Manually link](https://facebook.github.io/react-native/docs/linking-libraries-ios.html#manual-linking) the library to your Xcode project.

Then, to enable notifications support add the following line at the top of your `AppDelegate.m`

```objective-c
#import "RNNotifications.h"
```

And the following methods to support registration and receiving notifications:

```objective-c
// Required to register for notifications
/ PushKit API Example
- (void)pushRegistry:(PKPushRegistry *)registry didUpdatePushCredentials:(PKPushCredentials *)credentials forType:(NSString *)type
{
  [[RNNRouter sharedInstance] didUpdatePushCredentials:credentials forType:type];
}

- (void)pushRegistry:(PKPushRegistry *)registry didReceiveIncomingPushWithPayload:(PKPushPayload *)payload forType:(NSString *)type
{
  [[RNNRouter sharedInstance] application:nil didReceiveRemoteNotification:payload.dictionaryPayload fetchCompletionHandler:nil];
}

- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error
{
  [[RNNRouter sharedInstance] application:application didFailToRegisterForRemoteNotificationsWithError:error];
}

- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
{
  [[RNNRouter sharedInstance] application:application didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}

// Required for the notification event.
- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)notification
{
  [[RNNRouter sharedInstance] application:application didReceiveRemoteNotification:notification fetchCompletionHandler:nil];
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler
{
  [[RNNRouter sharedInstance] userNotificationCenter:center willPresentNotification:notification withCompletionHandler:completionHandler];
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void (^)(void))completionHandler
{
  [[RNNRouter sharedInstance] userNotificationCenter:center didReceiveNotificationResponse:response withCompletionHandler:completionHandler];
}
```

## <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/APK_format_icon.png/768px-APK_format_icon.png" width=30/> Android


Add a reference to the library's native code in your global `settings.gradle`:

```gradle
include ':reactnativenotifications'
project(':reactnativenotifications').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-notifications/android')
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

Push notifications on Android are managed and dispatched using [Google's GCM service](https://developers.google.com/cloud-messaging/gcm) (now integrated into Firebase). The following installation steps are a TL;DR of [Google's GCM setup guide](https://developers.google.com/cloud-messaging/android/client). You can follow them to get GCM integrated quickly, but we recommend that you will in the very least have a peek at the guide's overview.

#### Step #1: Subscribe to Google's GCM

To set GCM in your app, you must first create a Google API-project and obtain a **Sender ID** and a **Server API Key**. If you have no existing API project yet, the easiest way to go about in creating one is using [this step-by-step installation process](https://developers.google.com/mobile/add); Use [this tutorial](https://code.tutsplus.com/tutorials/how-to-get-started-with-push-notifications-on-android--cms-25870) for insturctions.

Alternatively, follow [Google's complete guide](https://developers.google.com/cloud-messaging/android/client#create-an-api-project).

#### Step #2: Add Sender ID to Manifest File

Once obtained, bundle the Sender ID onto your main `manifest.xml` file:

```gradle
<manifest>
...
	<application>
	...
		// Replace '1234567890' with your sender ID.
		// IMPORTANT: Leave the trailing \0 intact!!!
	    <meta-data android:name="com.wix.reactnativenotifications.gcmSenderId" android:value="1234567890\0"/>
	</application>
</manifest>

```
