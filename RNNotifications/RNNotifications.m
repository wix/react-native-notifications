
#import <UIKit/UIKit.h>
#import "RCTBridge.h"
#import "RCTEventDispatcher.h"
#import "RNNotifications.h"

#import "RCTUtils.h"

NSString *const RNNotificationCreateAction = @"CREATE";
NSString *const RNNotificationClearAction = @"CLEAR";

NSString *const RNNotificationReceivedForeground = @"RNNotificationReceivedForeground";
NSString *const RNNotificationReceivedBackground = @"RNNotificationReceivedBackground";
NSString *const RNNotificationOpened = @"RNNotificationOpened";

@implementation RNNotifications

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
                                                 name:RNNotificationReceivedForeground
                                               object:nil];

    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(handleNotificationReceivedBackground:)
                                                 name:RNNotificationReceivedBackground
                                               object:nil];

    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(handleNotificationOpened:)
                                                 name:RNNotificationOpened
                                               object:nil];
}

/*
 * API Methods
 */
+ (void)didReceiveRemoteNotification:(NSDictionary *)notification
{
    UIApplicationState state = [UIApplication sharedApplication].applicationState;

    if (state == UIApplicationStateActive) {
        // Notification received foreground
        [self didReceiveNotificationOnForegroundState:notification];
    } else if (state == UIApplicationStateInactive) {
        // Notification opened
        [self didNotificationOpen:notification];
    } else {
        // Notification received background
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
    [[NSNotificationCenter defaultCenter] postNotificationName:RNNotificationReceivedForeground
                                                        object:self
                                                      userInfo:notification];
}

+ (void)didReceiveNotificationOnBackgroundState:(NSDictionary *)notification
{
    NSDictionary* managedAps  = [notification objectForKey:@"managedAps"];
    NSDictionary* alert = [managedAps objectForKey:@"alert"];
    NSString* action = [managedAps objectForKey:@"action"];
    NSString* notificationId = [managedAps objectForKey:@"notificationId"];

    if (action) {
        // create or delete notification
        if ([action isEqualToString: RNNotificationCreateAction]
            && notificationId
            && alert) {
            [self dispatchLocalNotificationFromNotification:notification];

        } else if ([action isEqualToString: RNNotificationClearAction] && notificationId) {
            [self clearNotificationFromNotificationsCenter:notificationId];
        }
    }

    [[NSNotificationCenter defaultCenter] postNotificationName:RNNotificationReceivedBackground
                                                        object:self
                                                      userInfo:notification];
}

+ (void)didNotificationOpen:(NSDictionary *)notification
{
    [[NSNotificationCenter defaultCenter] postNotificationName:RNNotificationOpened
                                                        object:self
                                                      userInfo:notification];
}

/*
 * Helper methods
 */

+ (void)dispatchLocalNotificationFromNotification:(NSDictionary *)notification
{
    NSDictionary* managedAps  = [notification objectForKey:@"managedAps"];
    NSDictionary* alert = [managedAps objectForKey:@"alert"];
    NSString* action = [managedAps objectForKey:@"action"];
    NSString* notificationId = [managedAps objectForKey:@"notificationId"];

    if ([action isEqualToString: RNNotificationCreateAction]
        && notificationId
        && alert) {

        // trigger new client push notification
        UILocalNotification* note = [[UILocalNotification alloc] init];
        note.alertTitle = [alert objectForKey:@"title"];
        note.alertBody = [alert objectForKey:@"body"];
        note.userInfo = notification;
        note.soundName = [managedAps objectForKey:@"sound"];
        note.category = [managedAps objectForKey:@"category"];

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

        // delete the notification
        [[UIApplication sharedApplication] cancelLocalNotification:notification];
        [[NSUserDefaults standardUserDefaults] removeObjectForKey:notificationKey];

        NSLog(@"Local notification removed: %@", notificationKey);

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
    [RNNotifications dispatchLocalNotificationFromNotification:notification];
}

RCT_EXPORT_METHOD(clearNotificationFromNotificationsCenter:(NSString *)notificationId)
{
    [RNNotifications clearNotificationFromNotificationsCenter:notificationId];
}

@end
