
#import <UIKit/UIKit.h>
#import <PushKit/PushKit.h>
#import <React/RCTBridge.h>
#import <React/RCTEventDispatcher.h>
#import "RNNotifications.h"
#import <React/RCTConvert.h>
#import <React/RCTUtils.h>
#import "RNNotificationsBridgeQueue.h"
#import <UserNotifications/UserNotifications.h>
#import "RNEventEmitter.h"
#import "RNNotificationEventHandler.h"
#import "RNUtils.h"

NSString* const RNNotificationCreateAction = @"CREATE";
NSString* const RNNotificationClearAction = @"CLEAR";

@implementation RNNotifications {
    RNNotificationEventHandler* _notificationEventHandler;
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
    _notificationEventHandler = [RNNotificationEventHandler new];
}

- (void)didRegisterForRemoteNotificationsWithDeviceToken:(id)deviceToken {
    NSString *tokenRepresentation = [deviceToken isKindOfClass:[NSString class]] ? deviceToken : [RNUtils deviceTokenToString:deviceToken];
    [RNEventEmitter sendEvent:Registered body:@{@"deviceToken": tokenRepresentation}];
}

- (void)didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
    [RNEventEmitter sendEvent:RegistrationFailed body:@{@"code": [NSNumber numberWithInteger:error.code], @"domain": error.domain, @"localizedDescription": error.localizedDescription}];
}

- (void)setBadgeForNotification:(NSDictionary *)notification {
    if ([[notification objectForKey:@"aps"] objectForKey:@"badge"]){
        [[UIApplication sharedApplication] setApplicationIconBadgeNumber:[[[notification objectForKey:@"aps"] objectForKey:@"badge"] intValue]];
    }
}

@end
