#import <Foundation/Foundation.h>
#import <UserNotifications/UserNotifications.h>

@interface RNNotificationCenterMulticast : NSObject<UNUserNotificationCenterDelegate>

- (void)addNativeDelegate:(id<UNUserNotificationCenterDelegate>)delegate;
- (void)removeNativeDelegate:(id<UNUserNotificationCenterDelegate>)delegate;

@end

