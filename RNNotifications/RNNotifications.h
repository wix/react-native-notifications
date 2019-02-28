@import UIKit;

#import <React/RCTBridgeModule.h>
#import <PushKit/PushKit.h>
#import "RNNRouter.h"
#import <React/RCTEventEmitter.h>


@interface RNNotifications : RCTEventEmitter <RCTBridgeModule, RNNRerouterDelegate>
+ (NSString *)deviceTokenToString:(NSData *)deviceToken;
@end
