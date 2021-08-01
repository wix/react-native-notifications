# Changelog

## 4.1.0 (14/07/2021)

#### Enhancements:

- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 4.0.0 (12/07/2021)

#### Enhancements:

- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 3.5.0 (14/06/2021)

#### Enhancements:

- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 3.4.2 (27/12/2020)

#### Bug Fixes:

- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)

---

## 3.4.1 (23/11/2020)

#### Enhancements:

- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)

#### Bug Fixes:

- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)

---

## 3.4.0 (28/10/2020)

#### Enhancements:

- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)

#### Bug Fixes:

- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)

---

## 3.3.4 (23/09/2020)

#### Enhancements:

- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)

#### Bug Fixes:

- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)

---

## 3.3.2 (06/08/2020)

#### Enhancements:

- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)

---

## 3.3.1 (05/08/2020)
*No changelog for this release.*

---

## 3.3.0 (23/07/2020)

#### Enhancements:

- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)

---

## 3.2.2 (23/05/2020)

#### Bug Fixes:

- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## 3.2.1 (13/05/2020)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## 2.1.0 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## v1.4.0 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## v1.1.17 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## v1.1.12 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## 4.1.1 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## 3.0.0-beta.4 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## 3.0.0-beta.2 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## 3.0.0 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## 3.4.3 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## 3.0.0-beta.1 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## 3.0.0-beta.0 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## 3.0.0-alpha.0 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## 2.1.7 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## 3.3.3 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## 2.1.6 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## 2.1.5 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## 2.1.4 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## 2.1.4-beta.0 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## 2.1.3 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## 3.2.0 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## 3.1.4 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## 3.1.3 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## 3.1.2 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## 3.1.1 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## 3.1.0 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)

---

## 3.0.0-beta.3 (31/12/1969)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)
- Add enforce label action [#696](https://github.com/wix/react-native-notifications/pull/696) by [yogevbd](https://github.com/yogevbd)
- Lock docusaurus version [#695](https://github.com/wix/react-native-notifications/pull/695) by [yogevbd](https://github.com/yogevbd)
- Bump docusaurus to 2.0.0-alpha.64 [#673](https://github.com/wix/react-native-notifications/pull/673) by [yogevbd](https://github.com/yogevbd)
- Bump detox to v17.5.7 [#676](https://github.com/wix/react-native-notifications/pull/676) by [yogevbd](https://github.com/yogevbd)
- FCM Token Listener application [#660](https://github.com/wix/react-native-notifications/pull/660) by [swabbass](https://github.com/swabbass)
- Pushkit completion handler [#644](https://github.com/wix/react-native-notifications/pull/644) by [henrikbjorn](https://github.com/henrikbjorn)
- Add event and handler for iOS background notification [#587](https://github.com/wix/react-native-notifications/pull/587) by [songsterq](https://github.com/songsterq)
- Upgrade JS+Android dependecies [#634](https://github.com/wix/react-native-notifications/pull/634) by [swabbass](https://github.com/swabbass)

#### Bug Fixes:

- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
- Make notification id optional fixes #703 [#709](https://github.com/wix/react-native-notifications/pull/709) by [antontanderup](https://github.com/antontanderup)
- Fix boolean type when converting to js [#702](https://github.com/wix/react-native-notifications/pull/702) by [xilin](https://github.com/xilin)
- [BugFix][iOS] Cleaning up initial notification after resolve [#697](https://github.com/wix/react-native-notifications/pull/697) by [muryj](https://github.com/muryj)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- Fixes #627 - First foreground notification is not visible [#685](https://github.com/wix/react-native-notifications/pull/685) by [erkie](https://github.com/erkie)
- Fix Xcode 12 Compatibility [#672](https://github.com/wix/react-native-notifications/pull/672) by [jaykhandelwal](https://github.com/jaykhandelwal)
- [Bugfix][Android] Use JobServiceIntent to fetch the FCM token in the background [#678](https://github.com/wix/react-native-notifications/pull/678) by [Robfz](https://github.com/Robfz)
- Fix: When app's in background, Android cannot trigger registerNotificationOpened when user press on banner  [#614](https://github.com/wix/react-native-notifications/pull/614) by [ttkien](https://github.com/ttkien)
- Fix EventsRegistry.registerNotificationOpened typing [#499](https://github.com/wix/react-native-notifications/pull/499) by [songsterq](https://github.com/songsterq)
- SetBadgeCount from main thread [#639](https://github.com/wix/react-native-notifications/pull/639) by [danwhite-ipc](https://github.com/danwhite-ipc)
- Fix cancelLocalNotification crash on iOS [#617](https://github.com/wix/react-native-notifications/pull/617) by [yogevbd](https://github.com/yogevbd)
