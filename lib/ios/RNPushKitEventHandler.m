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

- (void)didReceiveIncomingPushWithPayload:(NSDictionary *)payload withCompletionHandler:(void (^)(void))completionHandler {
  NSString *completionKey = [payload objectForKey:@"uuid"];

  [_store setActionCompletionHandler:completionHandler withCompletionKey:completionKey];
  [RNEventEmitter sendEvent:RNPushKitNotificationReceived body:payload];
}

@end
