#import <Foundation/Foundation.h>
@import PushKit;
#import "RNPushKitEventHandler.h"

@interface RNPushKitEventListener : NSObject <PKPushRegistryDelegate>

- (instancetype)initWithPushKitEventHandler:(RNPushKitEventHandler *)pushKitEventHandler;

@end
