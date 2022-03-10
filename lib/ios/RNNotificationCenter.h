#import <Foundation/Foundation.h>

typedef void (^RCTPromiseResolveBlock)(id result);
typedef void (^RCTResponseSenderBlock)(NSArray *response);
typedef void (^RCTPromiseRejectBlock)(NSString *code, NSString *message, NSError *error);

@import UserNotifications;

@interface RNNotificationCenter : NSObject

- (void)isRegisteredForRemoteNotifications:(RCTPromiseResolveBlock)resolve;

- (void)requestPermissions:(NSDictionary *)options;

- (void)setCategories:(NSArray *)json;

- (void)checkPermissions:(RCTPromiseResolveBlock)resolve;

- (void)postLocalNotification:(NSDictionary *)notification withId:(NSNumber *)notificationId;

- (void)cancelLocalNotification:(NSNumber *)notificationId;

- (void)removeAllDeliveredNotifications;

- (void)removeDeliveredNotifications:(NSArray<NSString *> *)identifiers;

- (void)getDeliveredNotifications:(RCTPromiseResolveBlock)resolve;

- (void)cancelAllLocalNotifications;

@end
