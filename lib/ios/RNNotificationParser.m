#import "RNNotificationParser.h"
#import "RCTConvert+RNNotifications.h"

@implementation RNNotificationParser

+ (NSDictionary *)parseNotification:(UNNotification *)notification {
    return [RCTConvert UNNotificationPayload:notification];
}

+ (NSDictionary *)parseNotificationUserInfo:(NSDictionary *)userInfo {
    return [RCTConvert NotificationUserInfo:userInfo];
}

+ (NSDictionary *)parseNotificationResponse:(UNNotificationResponse *)response {
    NSDictionary* responseDict = @{@"notification": [RCTConvert UNNotificationPayload:response.notification], @"identifier": response.notification.request.identifier, @"action": [self parseNotificationResponseAction:response]};
    
    return responseDict;
}

+ (NSDictionary *)parseNotificationResponseAction:(UNNotificationResponse *)response {
    NSMutableDictionary* responseAction = [NSMutableDictionary dictionaryWithDictionary:@{@"identifier": response.actionIdentifier}];

    NSString* responseText = [response isKindOfClass:[UNTextInputNotificationResponse class]] ? ((UNTextInputNotificationResponse *)response).userText : nil;
    if (responseText) {
        [responseAction setObject:responseText forKey:@"text"];
    }
    
    return responseAction;
}

@end
