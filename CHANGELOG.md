# Changelog
# 2.1.0
## Added
* react-native 0.60 Support

### Breaking Change
This version requires an additional installation step in order to identify the correct build flavor on android, as described in our [Installation doc](https://github.com/wix/react-native-notifications/blob/master/docs/installation.md#step-5-rnnotifications-and-react-native-version).

# 2.0.6
## Fixed
### Android
* Resolve intent by extra key and not by `google.message_id` string, Addresses #296.  [#5056657](https://github.com/wix/react-native-notifications/pull/358/commits/5056657a6b3041b0c272357afcded42e59b83433) by [yogevbd](https://github.com/yogevbd)

# 2.0.5
## Fixed
### Android
* Reverted #349, This caused our e2e tests to fail, therefor we reverted this PR and will resolve this issue in the next version [#0b70828](https://github.com/wix/react-native-notifications/pull/357/commits/0b70828ca3e1f4e00817a32d6327381b4605c75c) by [yogevbd](https://github.com/yogevbd)

# 2.0.4
## Fixed
* Fix missing badge in silent notification payload with no aps.alert [#21c684d](https://github.com/wix/react-native-notifications/commit/21c684dbb7f632644747fa884c1b3f2bfd87f0a5) by [yogevbd](https://github.com/yogevbd)

Moved our builds to CircleCI and added iOS unit and e2e tests coverage.

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
