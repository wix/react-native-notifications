#import "RCTConvert.h"
@import UserNotifications;

static NSDictionary *RCTFormatUNNotification(UNNotification *notification)
{
    NSMutableDictionary *formattedNotification = [NSMutableDictionary dictionary];
    UNNotificationContent *content = notification.request.content;
    
    formattedNotification[@"identifier"] = notification.request.identifier;
    
    if (notification.date) {
        NSDateFormatter *formatter = [NSDateFormatter new];
        [formatter setDateFormat:@"yyyy-MM-dd'T'HH:mm:ss.SSSZZZZZ"];
        NSString *dateString = [formatter stringFromDate:notification.date];
        formattedNotification[@"fireDate"] = dateString;
    }
    
    formattedNotification[@"alertTitle"] = RCTNullIfNil(content.title);
    formattedNotification[@"alertBody"] = RCTNullIfNil(content.body);
    formattedNotification[@"category"] = RCTNullIfNil(content.categoryIdentifier);
    formattedNotification[@"thread-id"] = RCTNullIfNil(content.threadIdentifier);
    formattedNotification[@"userInfo"] = RCTNullIfNil(RCTJSONClean(content.userInfo));
    
    return formattedNotification;
}

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
