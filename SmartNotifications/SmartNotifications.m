
#import <UIKit/UIKit.h>
#import "RCTBridge.h"
#import "RCTEventDispatcher.h"
#import "SmartNotifications.h"

#import "RCTUtils.h"

NSString *const SmartNotificationCreateAction = @"CREATE";
NSString *const SmartNotificationClearAction = @"CLEAR";

NSString *const SmartNotificationReceivedForeground = @"SmartNotificationReceivedForeground";
NSString *const SmartNotificationReceivedBackground = @"SmartNotificationReceivedBackground";
NSString *const SmartNotificationOpened = @"SmartNotificationOpened";

@implementation SmartNotifications

RCT_EXPORT_MODULE()

@synthesize bridge = _bridge;

static NSString* username;

- (void)dealloc
{
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (void)setBridge:(RCTBridge *)bridge
{
    _bridge = bridge;
    
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(handleNotificationReceivedForeground:)
                                                 name:SmartNotificationReceivedForeground
                                               object:nil];
    
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(handleNotificationReceivedBackground:)
                                                 name:SmartNotificationReceivedBackground
                                               object:nil];
    
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(handleNotificationOpened:)
                                                 name:SmartNotificationOpened
                                               object:nil];
}

/*
 * API Methods
 */
+ (void)didReceiveRemoteNotification:(NSDictionary *)notification
{
    UIApplicationState state = [UIApplication sharedApplication].applicationState;
    
    if (state == UIApplicationStateActive) {
        [self didReceiveNotificationOnForegroundState:notification];
    } else if (state == UIApplicationStateInactive) {
        [self didNotificationOpen:notification];
    } else {
        [self didReceiveNotificationOnBackgroundState:notification];
    }
}

+ (void)didReceiveLocalNotification:(UILocalNotification *)notification
{
    UIApplicationState state = [UIApplication sharedApplication].applicationState;
    
    if (state == UIApplicationStateInactive) {
        NSString* notificationId = [notification.userInfo objectForKey:@"notificationId"];
        if (notificationId) {
            [self clearNotificationFromNotificationsCenter:notificationId];
        }
        [self didNotificationOpen:notification.userInfo];
    }
}

/*
 * Notification handlers
 */
+ (void)didReceiveNotificationOnForegroundState:(NSDictionary *)notification
{
    [[NSNotificationCenter defaultCenter] postNotificationName:SmartNotificationReceivedForeground
                                                        object:self
                                                      userInfo:notification];
}

+ (void)didReceiveNotificationOnBackgroundState:(NSDictionary *)notification
{
    NSDictionary* customData  = [notification objectForKey:@"customData"];
    NSDictionary* alert = [customData objectForKey:@"alert"];
    NSString* action = [customData objectForKey:@"action"];
    NSString* notificationId = [customData objectForKey:@"notificationId"];

    if (action) {
        // create or delete notification
        if ([action isEqualToString: SmartNotificationCreateAction]
            && notificationId
            && alert) {
            [self dispatchLocalNotificationFromNotification:notification];
            
        } else if ([action isEqualToString: SmartNotificationClearAction] && notificationId) {
            [self clearNotificationFromNotificationsCenter:notificationId];
        }
    }
    
    [[NSNotificationCenter defaultCenter] postNotificationName:SmartNotificationReceivedBackground
                                                        object:self
                                                      userInfo:notification];
}

+ (void)didNotificationOpen:(NSDictionary *)notification
{
    [[NSNotificationCenter defaultCenter] postNotificationName:SmartNotificationOpened
                                                        object:self
                                                      userInfo:notification];
}

/*
 * Helper methods
 */

+ (void)dispatchLocalNotificationFromNotification:(NSDictionary *)notification
{
    NSDictionary* customData  = [notification objectForKey:@"customData"];
    NSDictionary* alert = [customData objectForKey:@"alert"];
    NSString* action = [customData objectForKey:@"action"];
    NSString* notificationId = [customData objectForKey:@"notificationId"];
    
    if ([action isEqualToString: SmartNotificationCreateAction]
        && notificationId
        && alert) {
    
        // trigger new client push notification
        UILocalNotification* note = [[UILocalNotification alloc] init];
        note.alertTitle = [alert objectForKey:@"title"];
        note.alertBody = [alert objectForKey:@"body"];
        note.userInfo = customData;
        note.soundName = [customData objectForKey:@"sound"];
    
        NSLog(@"Presenting local notification...");
        [[UIApplication sharedApplication] presentLocalNotificationNow:note];
    
        // Serialize it and store so we can delete it later
        NSData* data = [NSKeyedArchiver archivedDataWithRootObject:note];
        NSString* notificationKey = [self buildNotificationKeyfromNotification:notificationId];
        [[NSUserDefaults standardUserDefaults] setObject:data forKey:notificationKey];
        [[NSUserDefaults standardUserDefaults] synchronize];
    
        NSLog(@"Local notification was triggered: %@", notificationKey);
    }
}

+ (void)clearNotificationFromNotificationsCenter:(NSString *)notificationId
{
    NSString* notificationKey = [self buildNotificationKeyfromNotification:notificationId];
    NSData* data = [[NSUserDefaults standardUserDefaults] objectForKey:notificationKey];
    if (data) {
        UILocalNotification* notification = [NSKeyedUnarchiver unarchiveObjectWithData: data];
        NSLog(@"Remove local notification: %@", notificationKey);
        
        // delete the notification
        [[UIApplication sharedApplication] cancelLocalNotification:notification];
        [[NSUserDefaults standardUserDefaults] removeObjectForKey:notificationKey];
        
        return;
    }
}

+ (NSString *)buildNotificationKeyfromNotification:(NSString *)notificationId
{
    return [NSString stringWithFormat:@"%@.%@", [[NSBundle mainBundle] bundleIdentifier], notificationId];
}

- (void)handleNotificationReceivedForeground:(NSNotification *)notification
{
    [_bridge.eventDispatcher sendDeviceEventWithName:@"notificationReceivedForeground" body:notification.userInfo];
}

- (void)handleNotificationReceivedBackground:(NSNotification *)notification
{
    [_bridge.eventDispatcher sendDeviceEventWithName:@"notificationReceivedBackground" body:notification.userInfo];
}

- (void)handleNotificationOpened:(NSNotification *)notification
{
    [_bridge.eventDispatcher sendDeviceEventWithName:@"notificationOpened" body:notification.userInfo];
}

/*
 * React Native exported methods
 */

RCT_EXPORT_METHOD(dispatchLocalNotificationFromNotification:(NSDictionary *)notification)
{
    [SmartNotifications dispatchLocalNotificationFromNotification:notification];
}

RCT_EXPORT_METHOD(clearNotificationFromNotificationsCenter:(NSString *)notificationId)
{
    [SmartNotifications clearNotificationFromNotificationsCenter:notificationId];
}

@end
