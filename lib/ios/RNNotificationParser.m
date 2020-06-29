#import "RNNotificationParser.h"
#import "RCTConvert+RNNotifications.h"

@implementation RNNotificationParser

+ (NSDictionary *)parseNotification:(UNNotification *)notification {
    return [RCTConvert UNNotificationPayload:notification];
}

+ (NSDictionary *)parseNotificationUserInfo:(NSDictionary *)userInfo withIdentifier:(NSString *)identifier {
    return [RCTConvert NotificationUserInfo:userInfo withIdentifier:(NSString *)identifier];
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
