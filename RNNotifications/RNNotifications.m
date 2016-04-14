
#import <UIKit/UIKit.h>
#import "RCTBridge.h"
#import "RCTEventDispatcher.h"
#import "RNNotifications.h"
#import "RCTConvert.h"
#import "RCTUtils.h"
#import "RNNotificationsBridgeQueue.h"

NSString* const RNNotificationCreateAction = @"CREATE";
NSString* const RNNotificationClearAction = @"CLEAR";

NSString* const RNNotificationReceivedForeground = @"RNNotificationReceivedForeground";
NSString* const RNNotificationReceivedBackground = @"RNNotificationReceivedBackground";
NSString* const RNNotificationOpened = @"RNNotificationOpened";
NSString* const RNNotificationActionTriggered = @"RNNotificationActionTriggered";

/*
 * Converters for Interactive Notifications
 */
@implementation RCTConvert (UIUserNotificationActivationMode)
RCT_ENUM_CONVERTER(UIUserNotificationActivationMode, (@{
                                                        @"foreground": @(UIUserNotificationActivationModeForeground),
                                                        @"background": @(UIUserNotificationActivationModeBackground)
                                                        }), UIUserNotificationActivationModeForeground, integerValue)
@end

@implementation RCTConvert (UIUserNotificationActionContext)
RCT_ENUM_CONVERTER(UIUserNotificationActionContext, (@{
                                                       @"default": @(UIUserNotificationActionContextDefault),
                                                       @"minimal": @(UIUserNotificationActionContextMinimal)
                                                       }), UIUserNotificationActionContextDefault, integerValue)
@end

@implementation RCTConvert (UIUserNotificationActionBehavior)
/* iOS 9 only */
RCT_ENUM_CONVERTER(UIUserNotificationActionBehavior, (@{
                                                        @"default": @(UIUserNotificationActionBehaviorDefault),
                                                        @"textInput": @(UIUserNotificationActionBehaviorTextInput)
                                                        }), UIUserNotificationActionBehaviorDefault, integerValue)
@end

@implementation RCTConvert (UIMutableUserNotificationAction)
+ (UIMutableUserNotificationAction *)UIMutableUserNotificationAction:(id)json
{
    NSDictionary<NSString *, id> *details = [self NSDictionary:json];

    UIMutableUserNotificationAction* action =[[UIMutableUserNotificationAction alloc] init];
    action.activationMode = [RCTConvert UIUserNotificationActivationMode:details[@"activationMode"]];
    action.behavior = [RCTConvert UIUserNotificationActionBehavior:details[@"behavior"]];
    action.authenticationRequired = [RCTConvert BOOL:details[@"authenticationRequired"]];
    action.destructive = [RCTConvert BOOL:details[@"destructive"]];
    action.title = [RCTConvert NSString:details[@"title"]];
    action.identifier = [RCTConvert NSString:details[@"identifier"]];

    return action;
}
@end

@implementation RCTConvert (UIMutableUserNotificationCategory)
+ (UIMutableUserNotificationCategory *)UIMutableUserNotificationCategory:(id)json
{
    NSDictionary<NSString *, id> *details = [self NSDictionary:json];

    UIMutableUserNotificationCategory* category = [[UIMutableUserNotificationCategory alloc] init];
    category.identifier = details[@"identifier"];

    // category actions
    NSMutableArray* actions = [[NSMutableArray alloc] init];
    for (NSDictionary* actionJson in [RCTConvert NSArray:details[@"actions"]]) {
        [actions addObject:[RCTConvert UIMutableUserNotificationAction:actionJson]];
    }

    [category setActions:actions forContext:[RCTConvert UIUserNotificationActionContext:details[@"context"]]];

    return category;
}
@end

@implementation RNNotifications

RCT_EXPORT_MODULE()

@synthesize bridge = _bridge;

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

    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(handleNotificationActionTriggered:)
                                                 name:RNNotificationActionTriggered
                                               object:nil];
    
    NSDictionary* lastActionInfo = [RNNotificationsBridgeQueue sharedInstance].lastAction;
    if (lastActionInfo) {
        [[NSNotificationCenter defaultCenter] postNotificationName:RNNotificationActionTriggered
                                                            object:self
                                                          userInfo:lastActionInfo];
        [RNNotificationsBridgeQueue sharedInstance].lastAction = nil;
    }
    
}

/*
 * Public Methods
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

+ (void)application:(UIApplication *)application handleActionWithIdentifier:(NSString *)identifier forLocalNotification:(UILocalNotification *)notification withResponseInfo:(NSDictionary *)responseInfo completionHandler:(void (^)())completionHandler
{
    [self emitNotificationActionForIdentifier:identifier responseInfo:responseInfo userInfo:notification.userInfo completionHandler:completionHandler];
}

+ (void)application:(UIApplication *)application handleActionWithIdentifier:(NSString *)identifier forRemoteNotification:(NSDictionary *)userInfo withResponseInfo:(NSDictionary *)responseInfo completionHandler:(void (^)())completionHandler
{
    [self emitNotificationActionForIdentifier:identifier responseInfo:responseInfo userInfo:userInfo completionHandler:completionHandler];
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

+ (void)updateNotificationCategories:(NSArray *)json
{
    NSMutableSet* categories = nil;

    if ([json count] > 0) {
        categories = [[NSMutableSet alloc] init];
        for (NSDictionary* categoryJson in json) {
            [categories addObject:[RCTConvert UIMutableUserNotificationCategory:categoryJson]];
        }
    }

    UIUserNotificationType types = (UIUserNotificationType) (UIUserNotificationTypeBadge | UIUserNotificationTypeSound | UIUserNotificationTypeAlert);
    UIUserNotificationSettings* settings = [UIUserNotificationSettings settingsForTypes:types categories:categories];

    [[UIApplication sharedApplication] registerUserNotificationSettings:settings];
}

+ (void)emitNotificationActionForIdentifier:(NSString *)identifier responseInfo:(NSDictionary *)responseInfo userInfo:(NSDictionary *)userInfo  completionHandler:(void (^)())completionHandler
{
    NSMutableDictionary* info = [[NSMutableDictionary alloc] initWithDictionary:@{ @"identifier": identifier }];

    // add text
    NSString* text = [responseInfo objectForKey:UIUserNotificationActionResponseTypedTextKey];
    if (text != NULL) {
        info[@"text"] = text;
    }

    // add notification custom data
    if (userInfo != NULL) {
        info[@"notification"] = userInfo;
    }

    // Emit event
    [[NSNotificationCenter defaultCenter] postNotificationName:RNNotificationActionTriggered
                                                        object:self
                                                      userInfo:info];
    
    [RNNotificationsBridgeQueue sharedInstance].lastAction = info;
    [RNNotificationsBridgeQueue sharedInstance].lastCompletionHandler = completionHandler;
}

/*
 * Javascript events
 */
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

- (void)handleNotificationActionTriggered:(NSNotification *)notification
{
    [_bridge.eventDispatcher sendAppEventWithName:@"notificationActionReceived" body:notification.userInfo];
}

/*
 * React Native exported methods
 */
RCT_EXPORT_METHOD(updateNotificationCategories:(NSArray *)json)
{
    [RNNotifications updateNotificationCategories:json];
}

RCT_EXPORT_METHOD(log:(NSString *)message)
{
    NSLog(message);
}

RCT_EXPORT_METHOD(completionHandler)
{
    void (^completionHandler)() = [RNNotificationsBridgeQueue sharedInstance].lastCompletionHandler;
    if (completionHandler) {
        completionHandler();
        [RNNotificationsBridgeQueue sharedInstance].lastCompletionHandler = nil;
    }
}

@end
