#import "RNPushKit.h"

@implementation RNPushKit {
    RNPushKitEventListener* _pushKitEventListener;
}

- (instancetype)initWithPushKitEventListener:(RNPushKitEventListener *)pushKitEventListener {
    self = [super init];
    
    _pushKitEventListener = pushKitEventListener;
    
    PKPushRegistry* pushKitRegistry = [[PKPushRegistry alloc] initWithQueue:dispatch_get_main_queue()];
    pushKitRegistry.delegate = pushKitEventListener;
    pushKitRegistry.desiredPushTypes = [NSSet setWithObject:PKPushTypeVoIP];
    
    return self;
}

@end
