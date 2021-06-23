---
id: android-api
title: Android Specific Commands
sidebar_label: Android specific
---

## refreshToken()
Request a new token for sending push notifications.

```js
Notifications.android.refreshToken();
```

## setNotificationChannel()
Starting in Android 8.0 (API level 26), all notifications must be assigned to a channel. For each channel, you can set the visual and auditory behavior that is applied to all notifications in that channel. Then, users can change these settings and decide which notification channels from your app should be intrusive or visible at all.

You need to use this if you want custom sound, vibration, etc on android >= Oreo (android 8.0). You can read more about how channels work and when to use them from [google's documention](https://developer.android.com/training/notify-user/channels). The most important part is that once a notification channel is created, it can't be deleted and you can't update some of its settings, such as vibration pattern, sound, etc (check out the [google's documention](https://developer.android.com/training/notify-user/channels) for more information). If you discover that you want to change some of this settings, you can always create a new channel and use that one in your notifications.

On iOS `setNotificationChannel` is a no-op so you can run it on both platforms.

Once a channel is created, all subsequent calls to `setNotificationChannel` for the same `channelId` will update its current settings, so you can call it every time your app starts.

```js
import {Notifications} from 'react-native-notifications';

Notifications.setNotificationChannel({
    channelId: 'my-channel',
    name: 'My Channel',
    importance: 5,
    description: 'My Description',
    enableLights: true,
    enableVibration: true,
    groupId: 'my-group', // optional
    groupName: 'My Group', // optional, will be presented in Android OS notification permission
    showBadge: true,
    soundFile: 'custom_sound.mp3',  // place this in <project_root>/android/app/src/main/res/raw/custom_sound.mp3
    vibrationPattern: [200, 1000, 500, 1000, 500],
})
```
