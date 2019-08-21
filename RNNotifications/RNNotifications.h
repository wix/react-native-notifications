@import UIKit;
#import <PushKit/PushKit.h>
@import UserNotifications;

@interface RNNotifications : NSObject

+ (instancetype)sharedInstance;

+ (void)startMonitorNotifications;
+ (void)startMonitorPushKitNotifications;

+ (void)didRegisterForRemoteNotificationsWithDeviceToken:(id)deviceToken;
+ (void)didFailToRegisterForRemoteNotificationsWithError:(NSError *)error;

@end
