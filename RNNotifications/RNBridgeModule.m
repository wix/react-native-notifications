#import "RNBridgeModule.h"
#import "RNCommandsHandler.h"
#import "RCTConvert+Notifications.h"
#import "RNNotificationsStore.h"
#import <React/RCTBridgeDelegate.h>

@implementation RNBridgeModule {
    RNCommandsHandler* _commandsHandler;
}

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();

- (instancetype)init {
    self = [super init];
    _commandsHandler = [[RNCommandsHandler alloc] init];
    return self;
}

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

- (void)setBridge:(RCTBridge *)bridge {
    _bridge = bridge;
    if ([_bridge.launchOptions objectForKey:UIApplicationLaunchOptionsRemoteNotificationKey]) {
        [[RNNotificationsStore sharedInstance] setInitialNotification:[_bridge.launchOptions objectForKey:UIApplicationLaunchOptionsRemoteNotificationKey]];
    }
}

#pragma mark - JS interface

RCT_EXPORT_METHOD(requestPermissionsWithCategories:(NSArray *)json) {
    [_commandsHandler requestPermissionsWithCategories:json];
}

RCT_EXPORT_METHOD(getInitialNotification:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    [_commandsHandler getInitialNotification:resolve reject:reject];
}

RCT_EXPORT_METHOD(finishHandlingAction:(NSString *)completionKey) {
    [_commandsHandler finishHandlingAction:completionKey];
}

RCT_EXPORT_METHOD(finishPresentingNotification:(NSString *)completionKey presentingOptions:(NSDictionary *)presentingOptions) {
    [_commandsHandler finishPresentingNotification:completionKey presentingOptions:presentingOptions];
}

RCT_EXPORT_METHOD(abandonPermissions) {
    [_commandsHandler abandonPermissions];
}

RCT_EXPORT_METHOD(registerPushKit) {
    [_commandsHandler registerPushKit];
}

RCT_EXPORT_METHOD(getBadgesCount:(RCTResponseSenderBlock)callback) {
    [_commandsHandler getBadgesCount:callback];
}

RCT_EXPORT_METHOD(setBadgesCount:(int)count) {
    [_commandsHandler setBadgesCount:count];
}

RCT_EXPORT_METHOD(localNotification:(NSDictionary *)notification withId:(NSString *)notificationId) {
    [_commandsHandler sendLocalNotification:notification withId:notificationId];
}

RCT_EXPORT_METHOD(cancelLocalNotification:(NSString *)notificationId) {
    [_commandsHandler cancelLocalNotification:notificationId];
}

RCT_EXPORT_METHOD(cancelAllLocalNotifications) {
    [_commandsHandler cancelAllLocalNotifications];
}

RCT_EXPORT_METHOD(isRegisteredForRemoteNotifications:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    [_commandsHandler isRegisteredForRemoteNotifications:resolve reject:reject];
}

RCT_EXPORT_METHOD(checkPermissions:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
    [_commandsHandler checkPermissions:resolve reject:reject];
}

#if !TARGET_OS_TV

RCT_EXPORT_METHOD(removeAllDeliveredNotifications) {
    [_commandsHandler removeAllDeliveredNotifications];
}

RCT_EXPORT_METHOD(removeDeliveredNotifications:(NSArray<NSString *> *)identifiers) {
    [_commandsHandler removeDeliveredNotifications:identifiers];
}

RCT_EXPORT_METHOD(getDeliveredNotifications:(RCTResponseSenderBlock)callback) {
    [_commandsHandler getDeliveredNotifications:callback];
}

#endif

@end

