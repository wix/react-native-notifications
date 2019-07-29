# Changelog
# 2.0.3

## Fixed
### Android
* Remove verify notification [#57190f7](https://github.com/wix/react-native-notifications/commit/57190f7ed239022da28f62cb6e4d04e5fd5d48d1) by [yogevbd](https://github.com/yogevbd)
* Bring native unit tests back to life [#11f370b](https://github.com/wix/react-native-notifications/commit/11f370b380c4f9dd0365cc4866114722fa70a393) by [yogevbd](https://github.com/yogevbd)

## Fixed
### iOS
* Fix iOS build on RN0.59 [#b90ea92](https://github.com/wix/react-native-notifications/commit/b90ea920b195a80bc218e15f58222af1701bf79f) by [lionerez1](https://github.com/lionerez1)

### Breaking change
* Updated the android [installation setup guide](https://github.com/wix/react-native-notifications/blob/master/docs/installation.md).

Make sure settings gradle imports from `'../node_modules/react-native-notifications/android/app'` and not `'../node_modules/react-native-notifications/android'`

```gradle
include ':reactnativenotifications'
project(':reactnativenotifications').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-notifications/android/app')
```
