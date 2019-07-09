
#import <UIKit/UIKit.h>
#import <PushKit/PushKit.h>
#import <React/RCTBridge.h>
#import "RNNotifications.h"
#import "RNNotificationCenterListener.h"
#import "RNPushKit.h"

@implementation RNNotifications {
    RNPushKit* _pushKit;
    RNNotificationCenterListener* _notificationCenterListener;
    RNNotificationEventHandler* _notificationEventHandler;
    RNPushKitEventHandler* _pushKitEventHandler;
    RNEventEmitter* _eventEmitter;
    RNNotificationsStore* _store;
}

- (instancetype)init {
    self = [super init];
    _store = [RNNotificationsStore new];
    _notificationEventHandler = [[RNNotificationEventHandler alloc] initWithStore:_store];
    return self;
}

+ (instancetype)sharedInstance {
    static RNNotifications *sharedInstance = nil;
    static dispatch_once_t onceToken;
    
    dispatch_once(&onceToken, ^{
        sharedInstance = [[RNNotifications alloc] init];
    });
    return sharedInstance;
}

+ (void)startMonitorNotifications {
    [[self sharedInstance] startMonitorNotifications];
}

+ (void)startMonitorPushKitNotifications {
    [[self sharedInstance] startMonitorPushKitNotifications];
}

+ (void)didRegisterForRemoteNotificationsWithDeviceToken:(id)deviceToken {
    [[self sharedInstance] didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}

+ (void)didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
    [[self sharedInstance] didFailToRegisterForRemoteNotificationsWithError:error];
}

- (void)startMonitorNotifications {
    _notificationCenterListener = [[RNNotificationCenterListener alloc] initWithNotificationEventHandler:_notificationEventHandler];
}

- (void)startMonitorPushKitNotifications {
    _pushKitEventHandler = [RNPushKitEventHandler new];
    _pushKit = [[RNPushKit alloc] initWithEventHandler:_pushKitEventHandler];
}

- (void)didRegisterForRemoteNotificationsWithDeviceToken:(id)deviceToken {
    [_notificationEventHandler didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}

- (void)didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
    [_notificationEventHandler didFailToRegisterForRemoteNotificationsWithError:error];
}

- (void)setInitialNotification:(NSDictionary *)notification {
    [_store setInitialNotification:notification];
}

- (void)finishHandleActionKey:(NSString *)actionKey {
    [_store completeAction:actionKey];
}

- (void)finishHandleNotificationKey:(NSString *)notificationKey presentingOptions:(UNNotificationPresentationOptions)presentingOptions {
    [_store completePresentation:notificationKey withPresentationOptions:presentingOptions];
}

@end
