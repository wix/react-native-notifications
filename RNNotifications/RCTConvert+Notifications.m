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

@implementation RCTConvert (UIUserNotificationActionContext)
RCT_ENUM_CONVERTER(UIUserNotificationActionContext, (@{
                                                       @"default": @(UIUserNotificationActionContextDefault),
                                                       @"minimal": @(UIUserNotificationActionContextMinimal)
                                                       }), UIUserNotificationActionContextDefault, integerValue)
@end

@implementation RCTConvert (UIUserNotificationActionBehavior)
/* iOS 9 only */
RCT_ENUM_CONVERTER(UIUserNotificationActionBehavior, (@{
                                                        @"default": @(UIUserNotificationActionBehaviorDefault),
                                                        @"textInput": @(UIUserNotificationActionBehaviorTextInput)
                                                        }), UIUserNotificationActionBehaviorDefault, integerValue)
@end

@implementation RCTConvert (UIMutableUserNotificationAction)
+ (UIMutableUserNotificationAction *)UIMutableUserNotificationAction:(id)json
{
    NSDictionary<NSString *, id> *details = [self NSDictionary:json];
    
    UIMutableUserNotificationAction* action =[UIMutableUserNotificationAction new];
    action.activationMode = [RCTConvert UIUserNotificationActivationMode:details[@"activationMode"]];
    action.behavior = [RCTConvert UIUserNotificationActionBehavior:details[@"behavior"]];
    action.authenticationRequired = [RCTConvert BOOL:details[@"authenticationRequired"]];
    action.destructive = [RCTConvert BOOL:details[@"destructive"]];
    action.title = [RCTConvert NSString:details[@"title"]];
    action.identifier = [RCTConvert NSString:details[@"identifier"]];
    
    return action;
}
@end

@implementation RCTConvert (UIMutableUserNotificationCategory)
+ (UIMutableUserNotificationCategory *)UIMutableUserNotificationCategory:(id)json
{
    NSDictionary<NSString *, id> *details = [self NSDictionary:json];
    
    UIMutableUserNotificationCategory* category = [UIMutableUserNotificationCategory new];
    category.identifier = details[@"identifier"];
    
    // category actions
    NSMutableArray* actions = [NSMutableArray new];
    for (NSDictionary* actionJson in [RCTConvert NSArray:details[@"actions"]]) {
        [actions addObject:[RCTConvert UIMutableUserNotificationAction:actionJson]];
    }
    
    [category setActions:actions forContext:[RCTConvert UIUserNotificationActionContext:details[@"context"]]];
    
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
