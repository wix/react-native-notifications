#import "RNNotificationEventHandler.h"
#import "RNEventEmitter.h"
#import "RNNotificationUtils.h"
#import "RCTConvert+RNNotifications.h"
#import "RNNotificationParser.h"

@implementation RNNotificationEventHandler {
    RNNotificationsStore* _store;
}

- (instancetype)initWithStore:(RNNotificationsStore *)store {
    self = [super init];
    _store = store;
    return self;
}

- (void)didRegisterForRemoteNotificationsWithDeviceToken:(id)deviceToken {
    NSString *tokenRepresentation = [deviceToken isKindOfClass:[NSString class]] ? deviceToken : [RNNotificationUtils deviceTokenToString:deviceToken];
    [RNEventEmitter sendEvent:RNRegistered body:@{@"deviceToken": tokenRepresentation}];
}

- (void)didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
    [RNEventEmitter sendEvent:RNRegistrationFailed body:@{@"code": [NSNumber numberWithInteger:error.code], @"domain": error.domain, @"localizedDescription": error.localizedDescription}];
}

- (void)didReceiveForegroundNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler {
    [_store setPresentationCompletionHandler:completionHandler withCompletionKey:notification.request.identifier];
    [RNEventEmitter sendEvent:RNNotificationReceivedForeground body:[RNNotificationParser parseNotification:notification]];
}

- (void)didReceiveNotificationResponse:(UNNotificationResponse *)response completionHandler:(void (^)())completionHandler {
    [_store setActionCompletionHandler:completionHandler withCompletionKey:response.notification.request.identifier];
    [RNEventEmitter sendEvent:RNNotificationOpened body:[RNNotificationParser parseNotificationResponse:response]];
}

@end
