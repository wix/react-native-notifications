#import "RNBridgeModule.h"
#import "RNCommandsHandler.h"
#import "RCTConvert+RNNotifications.h"
#import "RNNotificationsStore.h"
#import <React/RCTBridgeDelegate.h>
#import <React/RCTBridge.h>

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

RCT_EXPORT_METHOD(requestPermissions) {
    [_commandsHandler requestPermissions];
}

RCT_EXPORT_METHOD(setCategories:(NSArray *)categories) {
    [_commandsHandler setCategories:categories];
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

RCT_EXPORT_METHOD(getBadgeCount:(RCTResponseSenderBlock)callback) {
    [_commandsHandler getBadgeCount:callback];
}

RCT_EXPORT_METHOD(setBadgeCount:(int)count) {
    [_commandsHandler setBadgeCount:count];
}

RCT_EXPORT_METHOD(postLocalNotification:(NSDictionary *)notification withId:(nonnull NSNumber *)notificationId) {
    [_commandsHandler postLocalNotification:notification withId:notificationId];
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

