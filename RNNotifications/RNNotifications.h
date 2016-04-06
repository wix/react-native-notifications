@import UIKit;

#import "RCTBridgeModule.h"

@interface RNNotifications : NSObject <RCTBridgeModule>

+ (void)didReceiveRemoteNotification:(NSDictionary *)notification;
+ (void)didReceiveLocalNotification:(UILocalNotification *)notification;

@end
