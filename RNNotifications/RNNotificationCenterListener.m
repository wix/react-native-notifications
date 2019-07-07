#import "RNNotificationCenterListener.h"

@implementation RNNotificationCenterListener {
    RNNotificationEventHandler* _notificationEventHandler;
}

- (instancetype)initWithNotificationEventHandler:(RNNotificationEventHandler *)notificationEventHandler {
    self = [super init];
    _notificationEventHandler = notificationEventHandler;
    [[UNUserNotificationCenter currentNotificationCenter] setDelegate:self];
    
    return self;
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler {
    [_notificationEventHandler didReceiveForegroundPayload:notification.request.content.userInfo];
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void (^)(void))completionHandler {
    if ([response.actionIdentifier isEqualToString:UNNotificationDefaultActionIdentifier]) {
        [_notificationEventHandler didOpenNotificationPayload:response.notification.request.content.userInfo];
    } else if ([response.actionIdentifier isEqualToString:UNNotificationDismissActionIdentifier]) {
        
    } else {
        NSString* responseText = [response isKindOfClass:[UNTextInputNotificationResponse class]] ? ((UNTextInputNotificationResponse *)response).userText : nil;
        [_notificationEventHandler handleActionWithIdentifier:response.actionIdentifier forPayload:response.notification.request.content.userInfo withResponse:responseText completionHandler:completionHandler];
    }
}

@end
