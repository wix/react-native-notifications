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

## requestPermissions()
On Android, there is NO need to request permission to receive notifications. Permission to receive push notifications is classfied as "Normal" permission, which does NOT need the user's explicit approval. It is just like android.permission.INTERNET. For more information, please check the following: https://developer.android.com/guide/topics/permissions/overview#permissions 
