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
    android: {
      sourceDir: './example/android/',
    },
    ios: {
      sourceDir: './example/ios/'
    }
  },
};
