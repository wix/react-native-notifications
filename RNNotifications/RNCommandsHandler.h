#import <Foundation/Foundation.h>
#import <React/RCTBridge.h>

@interface RNCommandsHandler : NSObject

- (void)requestPermissionsWithCategories:(NSArray *)json;

- (void)getInitialNotification:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject;

- (void)completionHandler:(NSString *)completionKey;

- (void)abandonPermissions;

- (void)registerPushKit;

- (void)getBadgesCount:(RCTResponseSenderBlock)callback;

- (void)setBadgesCount:(int)count;

- (void)localNotification:(NSDictionary *)notification withId:(NSString *)notificationId;

- (void)cancelLocalNotification:(NSString *)notificationId;

- (void)cancelAllLocalNotifications;

- (void)isRegisteredForRemoteNotifications:(RCTPromiseResolveBlock)resolve
                                    reject:(RCTPromiseRejectBlock)reject;

- (void)checkPermissions:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject;

- (void)removeAllDeliveredNotifications;

- (void)removeDeliveredNotifications:(NSArray<NSString *> *)identifiers;

- (void)getDeliveredNotifications:(RCTResponseSenderBlock)callback;

@end
