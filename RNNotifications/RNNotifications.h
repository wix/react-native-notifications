@import UIKit;

#import <React/RCTBridgeModule.h>
#import <PushKit/PushKit.h>
@import UserNotifications;

@interface RNNotifications : NSObject <RCTBridgeModule>

+ (instancetype)sharedInstance;

- (void)requestPermissionsWithCategories:(NSMutableSet *)categories;
- (void)registerPushKit;

- (void)didRegisterForRemoteNotificationsWithDeviceToken:(id)deviceToken;
- (void)didFailToRegisterForRemoteNotificationsWithError:(NSError *)error;
- (void)didUpdatePushCredentials:(PKPushCredentials *)credentials forType:(NSString *)type;

//- (void)didReceiveRemoteNotification:(NSDictionary *)notification;

- (void)handleActionWithIdentifier:(NSString *)identifier forRemoteNotification:(NSDictionary *)userInfo withResponseInfo:(NSDictionary *)responseInfo completionHandler:(void (^)())completionHandler;
- (void)handleActionWithIdentifier:(NSString *)identifier forLocalNotification:(UILocalNotification *)notification withResponseInfo:(NSDictionary *)responseInfo completionHandler:(void (^)())completionHandler;

- (void)didReceiveForegroundNotification:(UNNotification *)notification;
- (void)didReceiveNotificationResponse:(UNNotificationResponse *)response;
//- (void)setBadgeForNotification:(NSDictionary *)notification;

@end
