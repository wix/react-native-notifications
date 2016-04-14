#import "RNNotificationsBridgeQueue.h"

@implementation RNNotificationsBridgeQueue

+ (nonnull instancetype)sharedInstance {
    static RNNotificationsBridgeQueue* sharedInstance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        sharedInstance = [self new];
    });
    
    return sharedInstance;
}
@end