#import "RNEventEmitter.h"

@implementation RNEventEmitter

RCT_EXPORT_MODULE();

-(NSArray<NSString *> *)supportedEvents {
    return @[Registered,
             RegistrationFailed,
             PushKitRegistered,
             NotificationReceivedForeground,
             NotificationReceivedBackground,
             NotificationOpened,
             NotificationActionReceived];
}

# pragma mark public

+ (instancetype)sharedInstance {
    static RNEventEmitter *sharedInstance = nil;
    static dispatch_once_t onceToken;
    
    dispatch_once(&onceToken, ^{
        sharedInstance = [[RNEventEmitter alloc] init];
    });
    return sharedInstance;
}

+ (void)sendEvent:(NSString *)event body:(NSDictionary *)body {
    [[self sharedInstance] send:event body:body];
}


# pragma mark private

- (void)send:(NSString *)eventName body:(id)body {
    if (self.bridge == nil) {
        return;
    }
    [self sendEventWithName:eventName body:body];
}

@end
