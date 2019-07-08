#import <Foundation/Foundation.h>
#import <React/RCTBridge.h>
@import UserNotifications;

@interface RNNotificationCenter : NSObject

- (void)requestPermissionsWithCategories:(NSArray *)json;
- (void)sendLocalNotification:(NSDictionary *)notification withId:(NSString *)notificationId;
- (void)cancelLocalNotification:(NSString *)notificationId;
- (void)removeAllDeliveredNotifications;
- (void)removeDeliveredNotifications:(NSArray<NSString *> *)identifiers;
- (void)getDeliveredNotifications:(RCTResponseSenderBlock)callback;

@end
