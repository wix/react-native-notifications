# Changelog

## 4.3.4 (22/05/2023)

#### Enhancements:

- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)

---

## 4.3.3 (07/11/2022)

#### Enhancements:

- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 4.3.2 (26/10/2022)

#### Bug Fixes:

- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 4.3.1 (24/04/2022)

#### Bug Fixes:

- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 4.3.0 (24/04/2022)

#### Enhancements:

- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 4.2.4 (09/03/2022)

#### Enhancements:

- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 4.2.3 (02/03/2022)

#### Bug Fixes:

- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 4.2.2 (26/02/2022)

#### Bug Fixes:

- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 4.2.1 (16/02/2022)

#### Enhancements:

- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)

#### Bug Fixes:

- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 4.2.0 (15/02/2022)

#### Enhancements:

- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 4.1.3 (13/12/2021)

#### Bug Fixes:

- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)

---

## 4.1.2 (02/08/2021)

#### Enhancements:

- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 4.1.1 (21/07/2021)

#### Enhancements:

- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)

---

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
*No changelog for this release.*

---

## 3.4.1 (23/11/2020)
*No changelog for this release.*

---

## 3.4.0 (28/10/2020)

#### Bug Fixes:

- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)

---

## 3.3.4 (23/09/2020)
*No changelog for this release.*

---

## 3.3.2 (06/08/2020)
*No changelog for this release.*

---

## 3.3.1 (05/08/2020)
*No changelog for this release.*

---

## 3.3.0 (23/07/2020)
*No changelog for this release.*

---

## 3.2.2 (23/05/2020)
*No changelog for this release.*

---

## 3.2.1 (13/05/2020)

#### Enhancements:

- fix: remove deprecated config [#882](https://github.com/wix/react-native-notifications/pull/882) by [Naturalclar](https://github.com/Naturalclar)
- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)
- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)
- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)
- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)
- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)
- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)
- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)
- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)
- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)
- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)
- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)
- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)
- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 3.1.4 (31/12/1969)

#### Enhancements:

- fix: remove deprecated config [#882](https://github.com/wix/react-native-notifications/pull/882) by [Naturalclar](https://github.com/Naturalclar)
- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)
- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)
- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)
- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)
- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)
- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)
- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)
- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)
- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)
- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)
- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)
- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)
- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 3.1.3 (31/12/1969)

#### Enhancements:

- fix: remove deprecated config [#882](https://github.com/wix/react-native-notifications/pull/882) by [Naturalclar](https://github.com/Naturalclar)
- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)
- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)
- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)
- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)
- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)
- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)
- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)
- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)
- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)
- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)
- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)
- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)
- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 3.1.2 (31/12/1969)

#### Enhancements:

- fix: remove deprecated config [#882](https://github.com/wix/react-native-notifications/pull/882) by [Naturalclar](https://github.com/Naturalclar)
- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)
- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)
- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)
- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)
- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)
- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)
- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)
- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)
- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)
- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)
- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)
- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)
- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 3.1.1 (31/12/1969)

#### Enhancements:

- fix: remove deprecated config [#882](https://github.com/wix/react-native-notifications/pull/882) by [Naturalclar](https://github.com/Naturalclar)
- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)
- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)
- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)
- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)
- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)
- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)
- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)
- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)
- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)
- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)
- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)
- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)
- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 3.1.0 (31/12/1969)

#### Enhancements:

- fix: remove deprecated config [#882](https://github.com/wix/react-native-notifications/pull/882) by [Naturalclar](https://github.com/Naturalclar)
- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)
- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)
- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)
- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)
- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)
- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)
- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)
- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)
- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)
- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)
- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)
- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)
- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 3.0.0 (31/12/1969)

#### Enhancements:

- fix: remove deprecated config [#882](https://github.com/wix/react-native-notifications/pull/882) by [Naturalclar](https://github.com/Naturalclar)
- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)
- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)
- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)
- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)
- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)
- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)
- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)
- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)
- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)
- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)
- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)
- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)
- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 3.0.0-beta.4 (31/12/1969)

#### Enhancements:

- fix: remove deprecated config [#882](https://github.com/wix/react-native-notifications/pull/882) by [Naturalclar](https://github.com/Naturalclar)
- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)
- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)
- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)
- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)
- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)
- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)
- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)
- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)
- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)
- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)
- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)
- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)
- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 3.0.0-beta.3 (31/12/1969)

#### Enhancements:

- fix: remove deprecated config [#882](https://github.com/wix/react-native-notifications/pull/882) by [Naturalclar](https://github.com/Naturalclar)
- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)
- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)
- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)
- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)
- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)
- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)
- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)
- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)
- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)
- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)
- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)
- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)
- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 3.0.0-beta.2 (31/12/1969)

#### Enhancements:

- fix: remove deprecated config [#882](https://github.com/wix/react-native-notifications/pull/882) by [Naturalclar](https://github.com/Naturalclar)
- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)
- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)
- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)
- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)
- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)
- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)
- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)
- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)
- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)
- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)
- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)
- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)
- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 3.0.0-beta.1 (31/12/1969)

#### Enhancements:

- fix: remove deprecated config [#882](https://github.com/wix/react-native-notifications/pull/882) by [Naturalclar](https://github.com/Naturalclar)
- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)
- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)
- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)
- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)
- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)
- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)
- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)
- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)
- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)
- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)
- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)
- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)
- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 3.0.0-beta.0 (31/12/1969)

#### Enhancements:

- fix: remove deprecated config [#882](https://github.com/wix/react-native-notifications/pull/882) by [Naturalclar](https://github.com/Naturalclar)
- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)
- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)
- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)
- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)
- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)
- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)
- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)
- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)
- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)
- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)
- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)
- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)
- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 3.0.0-alpha.0 (31/12/1969)

#### Enhancements:

- fix: remove deprecated config [#882](https://github.com/wix/react-native-notifications/pull/882) by [Naturalclar](https://github.com/Naturalclar)
- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)
- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)
- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)
- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)
- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)
- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)
- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)
- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)
- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)
- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)
- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)
- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)
- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 2.1.7 (31/12/1969)

#### Enhancements:

- fix: remove deprecated config [#882](https://github.com/wix/react-native-notifications/pull/882) by [Naturalclar](https://github.com/Naturalclar)
- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)
- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)
- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)
- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)
- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)
- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)
- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)
- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)
- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)
- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)
- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)
- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)
- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 2.1.6 (31/12/1969)

#### Enhancements:

- fix: remove deprecated config [#882](https://github.com/wix/react-native-notifications/pull/882) by [Naturalclar](https://github.com/Naturalclar)
- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)
- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)
- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)
- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)
- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)
- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)
- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)
- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)
- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)
- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)
- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)
- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)
- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 2.1.5 (31/12/1969)

#### Enhancements:

- fix: remove deprecated config [#882](https://github.com/wix/react-native-notifications/pull/882) by [Naturalclar](https://github.com/Naturalclar)
- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)
- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)
- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)
- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)
- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)
- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)
- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)
- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)
- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)
- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)
- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)
- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)
- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 2.1.4 (31/12/1969)

#### Enhancements:

- fix: remove deprecated config [#882](https://github.com/wix/react-native-notifications/pull/882) by [Naturalclar](https://github.com/Naturalclar)
- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)
- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)
- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)
- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)
- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)
- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)
- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)
- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)
- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)
- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)
- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)
- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)
- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 2.1.4-beta.0 (31/12/1969)

#### Enhancements:

- fix: remove deprecated config [#882](https://github.com/wix/react-native-notifications/pull/882) by [Naturalclar](https://github.com/Naturalclar)
- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)
- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)
- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)
- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)
- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)
- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)
- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)
- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)
- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)
- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)
- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)
- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)
- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 2.1.3 (31/12/1969)

#### Enhancements:

- fix: remove deprecated config [#882](https://github.com/wix/react-native-notifications/pull/882) by [Naturalclar](https://github.com/Naturalclar)
- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)
- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)
- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)
- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)
- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)
- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)
- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)
- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)
- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)
- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)
- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)
- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)
- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 2.1.0 (31/12/1969)

#### Enhancements:

- fix: remove deprecated config [#882](https://github.com/wix/react-native-notifications/pull/882) by [Naturalclar](https://github.com/Naturalclar)
- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)
- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)
- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)
- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)
- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)
- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)
- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)
- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)
- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)
- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)
- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)
- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)
- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 4.3.5 (31/12/1969)

#### Enhancements:

- fix: remove deprecated config [#882](https://github.com/wix/react-native-notifications/pull/882) by [Naturalclar](https://github.com/Naturalclar)
- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)
- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)
- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)
- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)
- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)
- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)
- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)
- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)
- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)
- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)
- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)
- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)
- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 3.4.3 (31/12/1969)

#### Enhancements:

- fix: remove deprecated config [#882](https://github.com/wix/react-native-notifications/pull/882) by [Naturalclar](https://github.com/Naturalclar)
- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)
- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)
- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)
- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)
- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)
- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)
- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)
- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)
- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)
- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)
- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)
- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)
- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 3.3.3 (31/12/1969)

#### Enhancements:

- fix: remove deprecated config [#882](https://github.com/wix/react-native-notifications/pull/882) by [Naturalclar](https://github.com/Naturalclar)
- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)
- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)
- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)
- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)
- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)
- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)
- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)
- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)
- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)
- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)
- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)
- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)
- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)

---

## 3.2.0 (31/12/1969)

#### Enhancements:

- fix: remove deprecated config [#882](https://github.com/wix/react-native-notifications/pull/882) by [Naturalclar](https://github.com/Naturalclar)
- fix-tests-from-#967 [#971](https://github.com/wix/react-native-notifications/pull/971) by [DanielEliraz](https://github.com/DanielEliraz)
- Revert "Fix for Android trampoline restriction" [#969](https://github.com/wix/react-native-notifications/pull/969) by [DanielEliraz](https://github.com/DanielEliraz)
- revert-to-open-only-when-no-initial-notification [#914](https://github.com/wix/react-native-notifications/pull/914) by [DanielEliraz](https://github.com/DanielEliraz)
- Upgrade to rn 68 [#907](https://github.com/wix/react-native-notifications/pull/907) by [DanielEliraz](https://github.com/DanielEliraz)
- Exposes new event: remoteNotificationsRegistrationDenied [#845](https://github.com/wix/react-native-notifications/pull/845) by [artdevgame](https://github.com/artdevgame)
- Fix typo in example [#843](https://github.com/wix/react-native-notifications/pull/843) by [oh3vci](https://github.com/oh3vci)
- emphasize NotificationReceivedBackground ios guide [#838](https://github.com/wix/react-native-notifications/pull/838) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix trampoline on target sdk 31 [#837](https://github.com/wix/react-native-notifications/pull/837) by [DanielEliraz](https://github.com/DanielEliraz)
- used common ext names exported in root project [#798](https://github.com/wix/react-native-notifications/pull/798) by [SaeedZhiany](https://github.com/SaeedZhiany)
- android: do not display data-only PN [#822](https://github.com/wix/react-native-notifications/pull/822) by [DanielEliraz](https://github.com/DanielEliraz)
- back to index js [#814](https://github.com/wix/react-native-notifications/pull/814) by [DanielEliraz](https://github.com/DanielEliraz)
-  Fix Android API 31 issues and Convert example to TS [#812](https://github.com/wix/react-native-notifications/pull/812) by [DanielEliraz](https://github.com/DanielEliraz)
- update start guide [#800](https://github.com/wix/react-native-notifications/pull/800) by [weihangChen](https://github.com/weihangChen)
- upgrade to react-native@66.3 [#805](https://github.com/wix/react-native-notifications/pull/805) by [DanielEliraz](https://github.com/DanielEliraz)
- FEAT: ios add permissions to check permissions [#762](https://github.com/wix/react-native-notifications/pull/762) by [DanielEliraz](https://github.com/DanielEliraz)
- resiter remote on provisional approve [#759](https://github.com/wix/react-native-notifications/pull/759) by [DanielEliraz](https://github.com/DanielEliraz)
- expose provisional state [#756](https://github.com/wix/react-native-notifications/pull/756) by [DanielEliraz](https://github.com/DanielEliraz)
- Add ability to request/check more iOS permissions [#752](https://github.com/wix/react-native-notifications/pull/752) by [DanielEliraz](https://github.com/DanielEliraz)
- stop using deprecated firebase iid [#751](https://github.com/wix/react-native-notifications/pull/751) by [DanielEliraz](https://github.com/DanielEliraz)
- upgrade lodash to 4.17.21 [#747](https://github.com/wix/react-native-notifications/pull/747) by [DanielEliraz](https://github.com/DanielEliraz)
- Provisional option in iOS registeration [#744](https://github.com/wix/react-native-notifications/pull/744) by [DanielEliraz](https://github.com/DanielEliraz)
- return to ios.registerRemoteNotifications name [#742](https://github.com/wix/react-native-notifications/pull/742) by [DanielEliraz](https://github.com/DanielEliraz)
- App notification settings link [#740](https://github.com/wix/react-native-notifications/pull/740) by [DanielEliraz](https://github.com/DanielEliraz)

#### Bug Fixes:

- Fix: Android crash when opening notifications [#967](https://github.com/wix/react-native-notifications/pull/967) by [C-Flatla](https://github.com/C-Flatla)
- trigger notificationOpened from killed state [#908](https://github.com/wix/react-native-notifications/pull/908) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX 867: add deprecated hasActiveCatalystInstance for old RN [#868](https://github.com/wix/react-native-notifications/pull/868) by [DanielEliraz](https://github.com/DanielEliraz)
- FIX #835: null mNotification [#862](https://github.com/wix/react-native-notifications/pull/862) by [DanielEliraz](https://github.com/DanielEliraz)
- create default channel only when no existing channel [#839](https://github.com/wix/react-native-notifications/pull/839) by [DanielEliraz](https://github.com/DanielEliraz)
- fix initial notification from killed [#831](https://github.com/wix/react-native-notifications/pull/831) by [DanielEliraz](https://github.com/DanielEliraz)
- latest notification data in getInitialNotification [#830](https://github.com/wix/react-native-notifications/pull/830) by [DanielEliraz](https://github.com/DanielEliraz)
- revert android to api 30 [#823](https://github.com/wix/react-native-notifications/pull/823) by [DanielEliraz](https://github.com/DanielEliraz)
- notifyReceivedToJS only when app is visible [#694](https://github.com/wix/react-native-notifications/pull/694) by [swabbass](https://github.com/swabbass)
- fix enfroce label [#795](https://github.com/wix/react-native-notifications/pull/795) by [DanielEliraz](https://github.com/DanielEliraz)
- fix: Add missing `android:exported` to `service` [#790](https://github.com/wix/react-native-notifications/pull/790) by [mrousavy](https://github.com/mrousavy)
- fix ts cancelLocalNotification prop [#754](https://github.com/wix/react-native-notifications/pull/754) by [DanielEliraz](https://github.com/DanielEliraz)
- Fix channel and channel group implementation [#750](https://github.com/wix/react-native-notifications/pull/750) by [DanielEliraz](https://github.com/DanielEliraz)
- finish run completion handler in main thread [#748](https://github.com/wix/react-native-notifications/pull/748) by [DanielEliraz](https://github.com/DanielEliraz)
