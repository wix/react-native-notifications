#import "RNPushKitEventHandler.h"
#import "RNEventEmitter.h"

@implementation RNPushKitEventHandler

- (void)registeredWithToken:(NSString *)token {
    [RNEventEmitter sendEvent:RNPushKitRegistered body:@{@"pushKitToken": token}];
}

- (void)didReceiveIncomingPushWithPayload:(NSDictionary *)payload {
    [RNEventEmitter sendEvent:RNPushKitNotificationReceived body:payload];
}

@end
