#import "RNNotificationCenterListener.h"
#import "RCTConvert+Notifications.h"

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
    [_notificationEventHandler didReceiveForegroundNotification:notification withCompletionHandler:completionHandler];
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void (^)(void))completionHandler {
    [_notificationEventHandler didReceiveNotificationResponse:response completionHandler:completionHandler];
}

@end
