#import "RCTConvert+Notifications.h"

/*
 * Converters for Interactive Notifications
 */
@implementation RCTConvert (UIUserNotificationActivationMode)
RCT_ENUM_CONVERTER(UIUserNotificationActivationMode, (@{
                                                        @"foreground": @(UIUserNotificationActivationModeForeground),
                                                        @"background": @(UIUserNotificationActivationModeBackground)
                                                        }), UIUserNotificationActivationModeForeground, integerValue)
@end

//@implementation RCTConvert (UIUserNotificationActionContext)
//RCT_ENUM_CONVERTER(UIUserNotificationActionContext, (@{
//                                                       @"default": @(UIUserNotificationActionContextDefault),
//                                                       @"minimal": @(UIUserNotificationActionContextMinimal)
//                                                       }), UIUserNotificationActionContextDefault, integerValue)
//@end

@implementation RCTConvert (UNNotificationActionOptions)

+ (UNNotificationActionOptions)UNUserNotificationActionOptions:(id)json {
    UNNotificationActionOptions options = UNNotificationActionOptionNone;
    if ([json[@"activationMode"] isEqualToString:@"foreground"]) {
        options = options | UNNotificationActionOptionForeground;
    }
    if ([RCTConvert BOOL:json[@"authenticationRequired"]]) {
        options = options | UNNotificationActionOptionAuthenticationRequired;
    }
    if ([RCTConvert BOOL:json[@"destructive"]]) {
        options = options | UNNotificationActionOptionDestructive;
    }
    
    return options;
}

@end

@implementation RCTConvert (UNMutableUserNotificationAction)
+ (UNNotificationAction *)UNMutableUserNotificationAction:(id)json
{
    NSDictionary<NSString *, id> *details = [self NSDictionary:json];
    
    UNNotificationAction* action = [UNNotificationAction actionWithIdentifier:details[@"identifier"] title:details[@"title"] options:[RCTConvert UNUserNotificationActionOptions:details]];
//    action.behavior = [RCTConvert UIUserNotificationActionBehavior:details[@"behavior"]];
    
    return action;
}
@end

@implementation RCTConvert (UNMutableUserNotificationCategory)
+ (UNNotificationCategory *)UNMutableUserNotificationCategory:(id)json
{
    NSDictionary<NSString *, id> *details = [self NSDictionary:json];
    
    NSMutableArray* actions = [NSMutableArray new];
    for (NSDictionary* actionJson in [RCTConvert NSArray:details[@"actions"]]) {
        [actions addObject:[RCTConvert UNMutableUserNotificationAction:actionJson]];
    }
    
    UNNotificationCategory* category = [UNNotificationCategory categoryWithIdentifier:details[@"identifier"] actions:actions intentIdentifiers:@[] options:UNNotificationCategoryOptionNone];
    
    return category;
}
@end

@implementation RCTConvert (UILocalNotification)
+ (UILocalNotification *)UILocalNotification:(id)json
{
    NSDictionary<NSString *, id> *details = [self NSDictionary:json];
    
    UILocalNotification* notification = [UILocalNotification new];
    notification.fireDate = [RCTConvert NSDate:details[@"fireDate"]];
    notification.alertBody = [RCTConvert NSString:details[@"alertBody"]];
    notification.alertTitle = [RCTConvert NSString:details[@"alertTitle"]];
    notification.alertAction = [RCTConvert NSString:details[@"alertAction"]];
    notification.soundName = [RCTConvert NSString:details[@"soundName"]] ?: UILocalNotificationDefaultSoundName;
    if ([RCTConvert BOOL:details[@"silent"]]) {
        notification.soundName = nil;
    }
    notification.userInfo = [RCTConvert NSDictionary:details[@"userInfo"]] ?: @{};
    notification.category = [RCTConvert NSString:details[@"category"]];
    
    return notification;
}
@end

@implementation RCTConvert (UNNotificationRequest)
+ (UNNotificationRequest *)UNNotificationRequest:(id)json withId:(NSString*)notificationId
{
    NSDictionary<NSString *, id> *details = [self NSDictionary:json];
    
    UNMutableNotificationContent *content = [UNMutableNotificationContent new];
    content.body = [RCTConvert NSString:details[@"alertBody"]];
    content.title = [RCTConvert NSString:details[@"alertTitle"]];
    content.sound = [RCTConvert NSString:details[@"soundName"]]
    ? [UNNotificationSound soundNamed:[RCTConvert NSString:details[@"soundName"]]]
    : [UNNotificationSound defaultSound];
    if ([RCTConvert BOOL:details[@"silent"]]) {
        content.sound = nil;
    }
    content.userInfo = [RCTConvert NSDictionary:details[@"userInfo"]] ?: @{};
    content.categoryIdentifier = [RCTConvert NSString:details[@"category"]];
    
    NSDate *triggerDate = [RCTConvert NSDate:details[@"fireDate"]];
    UNCalendarNotificationTrigger *trigger = nil;
    if (triggerDate != nil) {
        NSDateComponents *triggerDateComponents = [[NSCalendar currentCalendar]
                                                   components:NSCalendarUnitYear +
                                                   NSCalendarUnitMonth + NSCalendarUnitDay +
                                                   NSCalendarUnitHour + NSCalendarUnitMinute +
                                                   NSCalendarUnitSecond + NSCalendarUnitTimeZone
                                                   fromDate:triggerDate];
        trigger = [UNCalendarNotificationTrigger triggerWithDateMatchingComponents:triggerDateComponents
                                                                           repeats:NO];
    }
    
    return [UNNotificationRequest requestWithIdentifier:notificationId
                                                content:content trigger:trigger];
}
@end
