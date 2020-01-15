#import "RNPushKit.h"

@implementation RNPushKit {
    RNPushKitEventListener* _pushKitEventListener;
}

- (instancetype)initWithEventHandler:(RNPushKitEventHandler *)pushKitEventHandler {
    self = [super init];
    
    _pushKitEventListener = [[RNPushKitEventListener alloc] initWithPushKitEventHandler:pushKitEventHandler];
    
    PKPushRegistry* pushKitRegistry = [[PKPushRegistry alloc] initWithQueue:dispatch_get_main_queue()];
    pushKitRegistry.delegate = _pushKitEventListener;
    pushKitRegistry.desiredPushTypes = [NSSet setWithObject:PKPushTypeVoIP];
    
    return self;
}

@end
