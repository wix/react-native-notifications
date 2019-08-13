
#import <UIKit/UIKit.h>
#import <PushKit/PushKit.h>
#import "RNNotifications.h"
#import "RNNotificationCenterListener.h"
#import "RNPushKit.h"

@implementation RNNotifications {
    RNPushKit* _pushKit;
    RNNotificationCenterListener* _notificationCenterListener;
    RNNotificationEventHandler* _notificationEventHandler;
    RNPushKitEventHandler* _pushKitEventHandler;
    RNEventEmitter* _eventEmitter;
}

- (instancetype)init {
    self = [super init];
    _notificationEventHandler = [[RNNotificationEventHandler alloc] initWithStore:[RNNotificationsStore new]];
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

@end
