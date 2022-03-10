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
    [RNEventEmitter sendEvent:RNNotificationReceived body:[RNNotificationParser parseNotification:notification]];
}

- (void)didReceiveNotificationResponse:(UNNotificationResponse *)response completionHandler:(void (^)(void))completionHandler {
    [_store setActionCompletionHandler:completionHandler withCompletionKey:response.notification.request.identifier];
    [RNEventEmitter sendEvent:RNNotificationOpened body:[RNNotificationParser parseNotificationResponse:response]];
}

- (void)didReceiveBackgroundNotification:(NSDictionary *)userInfo withCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler {
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        NSString *uuid = [[NSUUID UUID] UUIDString];
        __block BOOL completionHandlerCalled = NO;
        dispatch_semaphore_t semaphore = dispatch_semaphore_create(0);
        [_store setBackgroundActionCompletionHandler:^(UIBackgroundFetchResult result) {
            dispatch_async(dispatch_get_main_queue(), ^{
                completionHandler(result);
            });
            completionHandlerCalled = YES;
            dispatch_semaphore_signal(semaphore);
        } withCompletionKey:uuid];
        [RNEventEmitter sendEvent:RNNotificationReceivedBackground body:[RNNotificationParser parseNotificationUserInfo:userInfo withIdentifier:uuid]];
        // Allow 25 seconds for this to process. If not finished call the callback with failed.
        dispatch_semaphore_wait(semaphore, dispatch_time(DISPATCH_TIME_NOW, 25 * NSEC_PER_SEC));
        if (!completionHandlerCalled) {
            dispatch_async(dispatch_get_main_queue(), ^{
                completionHandler(UIBackgroundFetchResultFailed);
            });
        }
    });
}

@end
