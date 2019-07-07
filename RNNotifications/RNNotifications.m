
#import <UIKit/UIKit.h>
#import <PushKit/PushKit.h>
#import <React/RCTBridge.h>
#import "RNNotifications.h"
#import "RNNotificationCenterListener.h"

@implementation RNNotifications {
    RNNotificationCenterListener* _notificationCenterListener;
    RNNotificationEventHandler* _notificationEventHandler;
    RNEventEmitter* _eventEmitter;
    RNNotificationsStore* _store;
}

- (instancetype)init {
    self = [super init];
    _store = [RNNotificationsStore new];
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

- (void)initialize {
    _notificationEventHandler = [[RNNotificationEventHandler alloc] initWithStore:_store];
    _notificationCenterListener = [[RNNotificationCenterListener alloc] initWithNotificationEventHandler:_notificationEventHandler];
}

- (void)didRegisterForRemoteNotificationsWithDeviceToken:(id)deviceToken {
    [_notificationEventHandler didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}

- (void)didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
    [_notificationEventHandler didFailToRegisterForRemoteNotificationsWithError:error];
}

- (void)setBadgeForNotification:(NSDictionary *)notification {
    if ([[notification objectForKey:@"aps"] objectForKey:@"badge"]){
        [[UIApplication sharedApplication] setApplicationIconBadgeNumber:[[[notification objectForKey:@"aps"] objectForKey:@"badge"] intValue]];
    }
}

- (void)setInitialNotification:(NSDictionary *)notification {
    [_store setInitialNotification:notification];
}

- (void)finishHandleNotificationKey:(NSString *)notificationKey {
    [_store completeAction:notificationKey];
}

@end
