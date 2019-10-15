#import <Foundation/Foundation.h>

typedef void (^RCTPromiseResolveBlock)(id result);
typedef void (^RCTResponseSenderBlock)(NSArray *response);
typedef void (^RCTPromiseRejectBlock)(NSString *code, NSString *message, NSError *error);

@import UserNotifications;

@interface RNNotificationCenter : NSObject

- (void)isRegisteredForRemoteNotifications:(RCTPromiseResolveBlock)resolve;

- (void)requestPermissionsWithCategories:(NSArray *)json;

- (void)checkPermissions:(RCTPromiseResolveBlock)resolve;

- (void)sendLocalNotification:(NSDictionary *)notification withId:(NSString *)notificationId;

- (void)cancelLocalNotification:(NSString *)notificationId;

- (void)removeAllDeliveredNotifications;

- (void)removeDeliveredNotifications:(NSArray<NSString *> *)identifiers;

- (void)getDeliveredNotifications:(RCTResponseSenderBlock)callback;

- (void)cancelAllLocalNotifications;

@end
