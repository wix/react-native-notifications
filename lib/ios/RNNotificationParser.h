#import <Foundation/Foundation.h>
@import UserNotifications;

@interface RNNotificationParser : NSObject

+ (NSDictionary *)parseNotificationResponse:(UNNotificationResponse *)response;
+ (NSDictionary *)parseNotification:(UNNotification *)notification;
+ (NSDictionary *)parseNotificationUserInfo:(NSDictionary *)userInfo withIdentifier:(NSString *)identifier;

@end
