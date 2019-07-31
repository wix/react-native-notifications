#import <Foundation/Foundation.h>
#import "RNNotificationCenter.h"

@interface RNCommandsHandler : NSObject

- (instancetype)init;

- (void)requestPermissions;

- (void)setCategories:(NSArray *)categories;

- (void)getInitialNotification:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject;

- (void)finishHandlingAction:(NSString *)completionKey;

- (void)finishPresentingNotification:(NSString *)completionKey presentingOptions:(NSDictionary *)presentingOptions;

- (void)abandonPermissions;

- (void)registerPushKit;

- (void)getBadgesCount:(RCTResponseSenderBlock)callback;

- (void)setBadgesCount:(int)count;

- (void)sendLocalNotification:(NSDictionary *)notification withId:(NSString *)notificationId;

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
