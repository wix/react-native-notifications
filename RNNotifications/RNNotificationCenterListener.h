#import <Foundation/Foundation.h>
@import UserNotifications;
#import "RNNotificationEventHandler.h"

@interface RNNotificationCenterListener : NSObject <UNUserNotificationCenterDelegate>

- (instancetype)initWithNotificationEventHandler:(RNNotificationEventHandler *)notificationEventHandler;

@end
