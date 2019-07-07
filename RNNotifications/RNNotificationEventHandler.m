#import "RNNotificationEventHandler.h"
#import "RNEventEmitter.h"
#import "RNUtils.h"

@implementation RNNotificationEventHandler {
    RNNotificationsStore* _store;
}

- (instancetype)initWithStore:(RNNotificationsStore *)store {
    self = [super init];
    _store = store;
    return self;
}

- (void)didRegisterForRemoteNotificationsWithDeviceToken:(id)deviceToken {
    NSString *tokenRepresentation = [deviceToken isKindOfClass:[NSString class]] ? deviceToken : [RNUtils deviceTokenToString:deviceToken];
    [RNEventEmitter sendEvent:RNRegistered body:@{@"deviceToken": tokenRepresentation}];
}

- (void)didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
    [RNEventEmitter sendEvent:RNRegistrationFailed body:@{@"code": [NSNumber numberWithInteger:error.code], @"domain": error.domain, @"localizedDescription": error.localizedDescription}];
}

- (void)didReceiveForegroundPayload:(NSDictionary *)payload {
    [RNEventEmitter sendEvent:RNNotificationReceivedForeground body:payload];
}

- (void)didOpenNotificationPayload:(NSDictionary *)payload {
    [RNEventEmitter sendEvent:RNNotificationOpened body:payload];
}

- (void)handleActionWithIdentifier:(NSString *)identifier forPayload:(NSDictionary *)payload withResponse:(NSString *)response completionHandler:(void (^)())completionHandler {
    [self emitNotificationActionForIdentifier:identifier response:response userInfo:payload completionHandler:completionHandler];
}

- (void)emitNotificationActionForIdentifier:(NSString *)identifier response:(NSString *)response userInfo:(NSDictionary *)userInfo  completionHandler:(void (^)())completionHandler {
    NSString* completionKey = [NSString stringWithFormat:@"%@.%@", identifier, [NSString stringWithFormat:@"%ldd", (long)[[NSDate date] timeIntervalSince1970]]];
    NSMutableDictionary* info = [[NSMutableDictionary alloc] initWithDictionary:@{ @"identifier": identifier, @"completionKey": completionKey }];
    
    if (response != NULL) {
        info[@"text"] = response;
    }
    
    // add notification custom data
    if (userInfo != NULL) {
        info[@"notification"] = userInfo;
    }
    
    [_store setCompletionHandler:completionHandler withCompletionKey:identifier];
    [RNEventEmitter sendEvent:RNActionTriggered body:userInfo];
}

@end
