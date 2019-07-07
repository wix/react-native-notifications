#import "RNPushKitEventHandler.h"
#import "RNEventEmitter.h"

@implementation RNPushKitEventHandler

- (void)registeredWithToken:(NSString *)token {
    [RNEventEmitter sendEvent:PushKitRegistered body:@{@"pushKitToken": token}];
}

@end
