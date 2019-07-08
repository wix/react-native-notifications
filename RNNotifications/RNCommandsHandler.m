#import "RNCommandsHandler.h"
#import "RNNotifications.h"
#import "RCTConvert+Notifications.h"

@implementation RNCommandsHandler {
    RNNotificationCenter* _notificationCenter;
}

- (instancetype)init {
    self = [super init];
    _notificationCenter = [RNNotificationCenter new];
    return self;
}

- (void)requestPermissionsWithCategories:(NSArray *)json {
    [_notificationCenter requestPermissionsWithCategories:json];
}

- (void)getInitialNotification:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    resolve([[RNNotifications sharedInstance] initialNotification]);
}

- (void)finishHandlingAction:(NSString *)completionKey {
    [[RNNotifications sharedInstance] finishHandleActionKey:completionKey];
}

- (void)finishPresentingNotification:(NSString *)completionKey presentingOptions:(NSDictionary *)presentingOptions {
    [[RNNotifications sharedInstance] finishHandleNotificationKey:completionKey presentingOptions:[RCTConvert UNNotificationPresentationOptions:presentingOptions]];
}

- (void)abandonPermissions {
    [[UIApplication sharedApplication] unregisterForRemoteNotifications];
}

- (void)registerPushKit {
    [[RNNotifications sharedInstance] initializePushKit];
}

- (void)getBadgesCount:(RCTResponseSenderBlock)callback {
    NSInteger count = [UIApplication sharedApplication].applicationIconBadgeNumber;
    callback(@[ [NSNumber numberWithInteger:count] ]);
}

- (void)setBadgesCount:(int)count {
    [[UIApplication sharedApplication] setApplicationIconBadgeNumber:count];
}

- (void)sendLocalNotification:(NSDictionary *)notification withId:(NSString *)notificationId {
    [_notificationCenter sendLocalNotification:notification withId:notificationId];
}

- (void)cancelLocalNotification:(NSString *)notificationId {
    [_notificationCenter cancelLocalNotification:notificationId];
}

- (void)cancelAllLocalNotifications {
    [RCTSharedApplication() cancelAllLocalNotifications];
}

- (void)isRegisteredForRemoteNotifications:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    BOOL ans = [[[UIApplication sharedApplication] currentUserNotificationSettings] types] != 0;
    resolve(@(ans));
}

- (void)checkPermissions:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    UIUserNotificationSettings *currentSettings = [[UIApplication sharedApplication] currentUserNotificationSettings];
    resolve(@{
              @"badge": @((currentSettings.types & UIUserNotificationTypeBadge) > 0),
              @"sound": @((currentSettings.types & UIUserNotificationTypeSound) > 0),
              @"alert": @((currentSettings.types & UIUserNotificationTypeAlert) > 0),
              });
}

- (void)removeAllDeliveredNotifications {
    [_notificationCenter removeAllDeliveredNotifications];
}

- (void)removeDeliveredNotifications:(NSArray<NSString *> *)identifiers {
    [_notificationCenter removeDeliveredNotifications:identifiers];
}

- (void)getDeliveredNotifications:(RCTResponseSenderBlock)callback {
    [_notificationCenter getDeliveredNotifications:callback];
}

@end
