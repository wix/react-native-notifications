@import UIKit;
#import <PushKit/PushKit.h>
@import UserNotifications;

@interface RNNotifications : NSObject

@property (nonatomic, retain) NSDictionary* initialNotification;

+ (instancetype)sharedInstance;

- (void)initialize;
- (void)initializePushKit;

- (void)didRegisterForRemoteNotificationsWithDeviceToken:(id)deviceToken;
- (void)didFailToRegisterForRemoteNotificationsWithError:(NSError *)error;
- (void)finishHandleNotificationKey:(NSString *)notificationKey presentingOptions:(UNNotificationPresentationOptions)presentingOptions;
- (void)finishHandleActionKey:(NSString *)actionKey;

//- (void)setBadgeForNotification:(NSDictionary *)notification;

@end
