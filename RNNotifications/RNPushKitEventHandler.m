#import "RNPushKitEventHandler.h"
#import "RNEventEmitter.h"

@implementation RNPushKitEventHandler

- (void)registeredWithToken:(NSString *)token {
    [RNEventEmitter sendEvent:RNPushKitRegistered body:@{@"pushKitToken": token}];
}

@end
