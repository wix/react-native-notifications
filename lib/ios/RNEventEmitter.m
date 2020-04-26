#import "RNEventEmitter.h"

@implementation RNEventEmitter

RCT_EXPORT_MODULE();

-(NSArray<NSString *> *)supportedEvents {
    return @[RNRegistered,
             RNRegistrationFailed,
             RNPushKitRegistered,
             RNNotificationReceived,
             RNNotificationReceivedBackground,
             RNNotificationOpened,
             RNPushKitNotificationReceived];
}

- (instancetype)init {
    self = [super init];
    for (NSString *event in [self supportedEvents]) {
        [self addListener:event];
    }
    return self;
}

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

# pragma mark public

+ (void)sendEvent:(NSString *)event body:(NSDictionary *)body {
    [[NSNotificationCenter defaultCenter] postNotificationName:event
                                                        object:self
                                                      userInfo:body];
}

# pragma mark private

- (void)startObserving {
    for (NSString *event in [self supportedEvents]) {
        [[NSNotificationCenter defaultCenter] addObserver:self
                                                 selector:@selector(handleNotification:)
                                                     name:event
                                                   object:nil];
    }
}

- (void)stopObserving {
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (void)handleNotification:(NSNotification *)notification {
    [self sendEventWithName:notification.name body:notification.userInfo];
}


@end
