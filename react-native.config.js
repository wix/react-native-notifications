module.exports = {
  dependency: {
    platforms: {
      ios: {},
      android: {
        sourceDir: './lib/android/app',
        packageInstance: 'new RNNotificationsPackage(reactNativeHost.getApplication())',
      }
    },
  },
  project: {
    ios: {
      project: './example/ios/NotificationsExampleApp.xcworkspace',
    },
    android: {
      sourceDir: './example/android/',
    },
  },
};
