#import "RNPushKitEventListener.h"
#import "RNNotificationUtils.h"

@implementation RNPushKitEventListener {
    PKPushRegistry* _pushRegistry;
    RNPushKitEventHandler* _pushKitEventHandler;
}

- (instancetype)initWithPushKitEventHandler:(RNPushKitEventHandler *)pushKitEventHandler {
    self = [super init];
    
    _pushRegistry = [[PKPushRegistry alloc] initWithQueue:dispatch_get_main_queue()];
    _pushKitEventHandler = pushKitEventHandler;
    
    return self;
}

- (void)pushRegistry:(PKPushRegistry *)registry didUpdatePushCredentials:(PKPushCredentials *)credentials forType:(NSString *)type {
    [_pushKitEventHandler registeredWithToken:[RNNotificationUtils deviceTokenToString:credentials.token]];
}

- (void)pushRegistry:(PKPushRegistry *)registry didReceiveIncomingPushWithPayload:(PKPushPayload *)payload forType:(NSString *)type {
    [_pushKitEventHandler didReceiveIncomingPushWithPayload:payload.dictionaryPayload];
}

@end
