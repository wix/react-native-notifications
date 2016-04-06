@import UIKit;

#import "RCTBridgeModule.h"

@interface SmartNotifications : NSObject <RCTBridgeModule>

+ (void)didReceiveRemoteNotification:(NSDictionary *)notification;
+ (void)didReceiveLocalNotification:(UILocalNotification *)notification;

@end
