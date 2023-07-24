module.exports = {
  dependency: {
    platforms: {
      ios: {},
      android: {
        sourceDir: './lib/android/app',
        packageImportPath: 'import com.wix.reactnativenotifications.RNNotificationsPackage;',
        packageInstance: 'new RNNotificationsPackage(reactNativeHost.getApplication())',
      }
    },
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
