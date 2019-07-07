@import UIKit;
#import <PushKit/PushKit.h>
@import UserNotifications;

@interface RNNotifications : NSObject

@property (nonatomic, retain) NSDictionary* initialNotification;

+ (instancetype)sharedInstance;

- (void)initialize;
- (void)didRegisterForRemoteNotificationsWithDeviceToken:(id)deviceToken;
- (void)didFailToRegisterForRemoteNotificationsWithError:(NSError *)error;
- (void)finishHandleNotificationKey:(NSString *)notificationKey;

//- (void)setBadgeForNotification:(NSDictionary *)notification;

@end
