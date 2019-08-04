---
id: installation-android
title: Android Installation
sidebar_label: Android Installation
---

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
