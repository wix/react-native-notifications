#import <Foundation/Foundation.h>
@import UserNotifications;

@interface RNNotificationParser : NSObject

+ (NSDictionary *)parseNotificationResponse:(UNNotificationResponse *)response;
+ (NSDictionary *)parseNotification:(UNNotification *)notification;

@end
