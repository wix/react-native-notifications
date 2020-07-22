#import "RNPushKitEventHandler.h"
#import "RNEventEmitter.h"

@implementation RNPushKitEventHandler {
  RNNotificationsStore* _store;
}

- (instancetype)initWithStore:(RNNotificationsStore *)store {
  self = [super init];
  _store = store;
  return self;
}

- (void)registeredWithToken:(NSString *)token {
    [RNEventEmitter sendEvent:RNPushKitRegistered body:@{@"pushKitToken": token}];
}

- (void)pushRegistry:(PKPushRegistry *)registry didReceiveIncomingPushWithPayload:(PKPushPayload *)payload forType:(PKPushType)type withCompletionHandler:(void (^)(void))completionHandler {
    [_store setActionCompletionHandler:completionHandler withCompletionKey:payload.uuid];

    [RNEventEmitter sendEvent:RNPushKitNotificationReceived body:payload];
}

@end
