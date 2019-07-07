#import <UIKit/UIKit.h>
#import "RNPushKitEventListener.h"
@import PushKit;

@interface RNPushKit : NSObject

- (instancetype)initWithPushKitEventListener:(RNPushKitEventListener *)pushKitEventListener;

@end
