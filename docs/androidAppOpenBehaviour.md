# Customize how your app dismisses (or not) notifications on Open/Resume

By default, when you have notifications in your notification drawer and open the app, all notifications are dismissed and disappear.

In your application, you might want a different behavior.

## <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/APK_format_icon.png/768px-APK_format_icon.png" width=30/> Android only

For that, you can pass two booleans when you initialize the package : 

* The first one sets if you want to discard all notifications 

```java
public class MainApplication extends MultiDexApplication
  implements ReactApplication, INotificationsApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

    @Override
    protected String getJSBundleFile() {
      return CodePush.getJSBundleFile();
    }

    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        ...,
        new RNNotificationsPackage(MainApplication.this) // Default
        // new RNNotificationsPackage(MainApplication.this, false) // If you want to discard them on Resume but not on Init
        // new RNNotificationsPackage(MainApplication.this, true, false) // If you want to discard notifications when opening the app (cold boot) but not on Resume
        // new RNNotificationsPackage(MainApplication.this, false, false) // If you never want to discard notifications when opening the app
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();

    SoLoader.init(this, /* native exopackage */ false);
  }
}
```
