#import "RNNotificationCenterListener.h"
#import "RCTConvert+RNNotifications.h"

@implementation RNNotificationCenterListener {
    RNNotificationEventHandler* _notificationEventHandler;
}

- (instancetype)initWithNotificationEventHandler:(RNNotificationEventHandler *)notificationEventHandler {
    self = [super init];
    _notificationEventHandler = notificationEventHandler;
    
    return self;
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler {
    [_notificationEventHandler didReceiveForegroundNotification:notification withCompletionHandler:completionHandler];
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void (^)(void))completionHandler {
    [_notificationEventHandler didReceiveNotificationResponse:response completionHandler:completionHandler];
}

@end
