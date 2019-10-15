#import "RCTConvert+RNNotifications.h"


@implementation RCTConvert (UIUserNotificationActivationMode)
RCT_ENUM_CONVERTER(UIUserNotificationActivationMode, (@{
                                                        @"foreground": @(UIUserNotificationActivationModeForeground),
                                                        @"background": @(UIUserNotificationActivationModeBackground)
                                                        }), UIUserNotificationActivationModeForeground, integerValue)
@end

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

+ (UNNotificationAction *)UNMutableUserNotificationAction:(id)json {
    UNNotificationAction* action;
    NSDictionary<NSString *, id> *details = [self NSDictionary:json];
    
    if (details[@"textInput"]) {
        action = [UNTextInputNotificationAction actionWithIdentifier:details[@"identifier"] title:details[@"title"] options:[RCTConvert UNUserNotificationActionOptions:details] textInputButtonTitle:details[@"textInput"][@"buttonTitle"] textInputPlaceholder:details[@"textInput"][@"placeholder"]];
    } else {
        action = [UNNotificationAction actionWithIdentifier:details[@"identifier"] title:details[@"title"] options:[RCTConvert UNUserNotificationActionOptions:details]];
    }
    
    return action;
}

@end

@implementation RCTConvert (UNMutableUserNotificationCategory)

+ (UNNotificationCategory *)UNMutableUserNotificationCategory:(id)json {
    NSDictionary<NSString *, id> *details = [self NSDictionary:json];
    
    NSMutableArray* actions = [NSMutableArray new];
    for (NSDictionary* actionJson in [RCTConvert NSArray:details[@"actions"]]) {
        [actions addObject:[RCTConvert UNMutableUserNotificationAction:actionJson]];
    }
    
    UNNotificationCategory* category = [UNNotificationCategory categoryWithIdentifier:details[@"identifier"] actions:actions intentIdentifiers:@[] options:UNNotificationCategoryOptionNone];
    
    return category;
}

@end

@implementation RCTConvert (UNNotificationRequest)

+ (UNNotificationRequest *)UNNotificationRequest:(id)json withId:(NSString*)notificationId
{
    NSDictionary<NSString *, id> *details = [self NSDictionary:json];
    
    UNMutableNotificationContent *content = [UNMutableNotificationContent new];
    content.body = [RCTConvert NSString:details[@"body"]];
    content.title = [RCTConvert NSString:details[@"title"]];
    content.sound = [RCTConvert NSString:details[@"sound"]]
    ? [UNNotificationSound soundNamed:[RCTConvert NSString:details[@"sound"]]]
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

@implementation RCTConvert (UNNotification)

+ (NSDictionary *)UNNotificationPayload:(UNNotification *)notification {
    NSMutableDictionary *formattedNotification = [NSMutableDictionary dictionary];
    UNNotificationContent *content = notification.request.content;
    
    formattedNotification[@"identifier"] = notification.request.identifier;
    
    if (notification.date) {
        NSDateFormatter *formatter = [NSDateFormatter new];
        [formatter setDateFormat:@"yyyy-MM-dd'T'HH:mm:ss.SSSZZZZZ"];
        NSString *dateString = [formatter stringFromDate:notification.date];
        formattedNotification[@"date"] = dateString;
    }
    
    formattedNotification[@"title"] = RCTNullIfNil(content.title);
    formattedNotification[@"body"] = RCTNullIfNil(content.body);
    formattedNotification[@"category"] = RCTNullIfNil(content.categoryIdentifier);
    formattedNotification[@"thread"] = RCTNullIfNil(content.threadIdentifier);
    [formattedNotification addEntriesFromDictionary:RCTNullIfNil(RCTJSONClean(content.userInfo))];
    
    return formattedNotification;
}

@end

@implementation RCTConvert (UNNotificationPresentationOptions)

+ (UNNotificationPresentationOptions)UNNotificationPresentationOptions:(id)json {
    UNNotificationPresentationOptions options = UNNotificationPresentationOptionNone;
    if ([RCTConvert BOOL:json[@"alert"]]) {
        options = options | UNNotificationPresentationOptionAlert;
    }
    if ([RCTConvert BOOL:json[@"badge"]]) {
        options = options | UNNotificationPresentationOptionBadge;
    }
    if ([RCTConvert BOOL:json[@"sound"]]) {
        options = options | UNNotificationPresentationOptionSound;
    }
    
    return options;
}

@end
