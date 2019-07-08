#import "RCTConvert.h"
@import UserNotifications;

@interface RCTConvert (UIUserNotificationActivationMode)

@end

@interface RCTConvert (UIUserNotificationActionContext)

@end

@interface RCTConvert (UIUserNotificationActionBehavior)

@end

@interface RCTConvert (UIMutableUserNotificationAction)
+ (UIMutableUserNotificationAction *)UIMutableUserNotificationAction:(id)json;
@end

@interface RCTConvert (UNMutableUserNotificationCategory)
+ (UNNotificationCategory *)UNMutableUserNotificationCategory:(id)json;
@end

@interface RCTConvert (UILocalNotification)
+ (UILocalNotification *)UILocalNotification:(id)json;
@end

@interface RCTConvert (UNNotificationRequest)
+ (UNNotificationRequest *)UNNotificationRequest:(id)json withId:(NSString*)notificationId;
@end

@interface RCTConvert (UNNotification)
+ (NSDictionary *)UNNotificationPayload:(UNNotification *)notification;
@end

@interface RCTConvert (UNNotificationPresentationOptions)
+ (UNNotificationPresentationOptions)UNNotificationPresentationOptions:(id)json;
@end
