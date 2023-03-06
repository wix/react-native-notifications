---
id: installation-android
title: Android Installation
sidebar_label: Android Installation
---

Add the library to your application class (e.g. `MainApplication.java`):

```java
import com.wix.reactnativenotifications.RNNotificationsPackage;

```

### Receiving push notifications

:::note
This section is only necessary in case you wish to be able to **receive** push notifications in your React-Native app.
:::

Push notifications on Android are managed and dispatched using [Google's FCM service](https://firebase.google.com/docs/cloud-messaging). The following installation steps are a TL;DR of [Google's FCM setup guide](https://firebase.google.com/docs/cloud-messaging/android/client). You can follow them to get FCM integrated quickly, but we recommend that you will in the very least have a peek at the guide's overview.

#### Step #1: Subscribe to Google's FCM

To set FCM in your app, you must first create a google-services.json file. If you have no existing API project yet, the easiest way to go about in creating one is using [this step-by-step installation process](https://firebase.google.com/docs/android/setup);

#### Step #2: Copy google-services.json

After creating google-services.json, copy it into your project's android/app folder.

#### Step #3: Add google-services package

```gradle title="./android/build.gradle"
buildscript {
    ...
    dependencies {
        ...
        classpath 'com.google.gms:google-services:x.x.x'
    }
}
```

#### Step #4: Add firebase-core package and apply google-services plugin

```gradle title="./android/app/build.gradle"
dependencies {
    ...
    implementation project(':react-native-notifications')
    implementation 'com.google.firebase:firebase-core:x.x.x'
}

apply plugin: 'com.google.gms.google-services'
```

You can grab version numbers from [Google's Release Notes](https://developers.google.com/android/guides/releases)

#### Step #5: Link react-native-notifications

```gradle title="./android/settings.gradle"
include ':react-native-notifications'
project(':react-native-notifications').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-notifications/lib/android/app')
```

#### Step #6: Customize the appearance

It is important to name the icon that you would like to display `notification_icon`.
Android studio allows to [generate](https://developer.android.com/studio/write/image-asset-studio) the appropriate drawables according to the [documentation](https://developer.android.com/studio/write/image-asset-studio#notification).

```xml title="AndroidManifest.xml"
<!-- Set custom default icon. This is used when no icon is set for incoming notification messages.
			See README(https://goo.gl/l4GJaQ) for more. -->
<meta-data
		android:name="com.google.firebase.messaging.default_notification_icon"
		android:resource="@drawable/notification_icon" />
<!-- Set color used with incoming notification messages. This is used when no color is set for the incoming
			notification message. See README(https://goo.gl/6BKBk7) for more. -->
<meta-data
		android:name="com.google.firebase.messaging.default_notification_color"
		android:resource="@color/colorAccent" />
```

If you want to use a color like in the example above, you also need to define the color value


```xml title="res/values/colors.xml"
<resources>
    <color name="colorAccent">#C60C30</color>
</resources>
```



