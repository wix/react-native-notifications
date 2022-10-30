module.exports = {
  dependency: {
    platforms: {
      ios: {},
      android: {
        sourceDir: './lib/android/app',
        packageInstance: 'new RNNotificationsPackage(reactNativeHost.getApplication())',
      }
    },
    assets: []
  },
  project: {
    ios: {
      sourceDir: './example/ios',
    },
    android: {
      sourceDir: './example/android/',
    },
  },
};
