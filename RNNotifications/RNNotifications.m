
#import <UIKit/UIKit.h>
#import <PushKit/PushKit.h>
#import <React/RCTBridge.h>
#import <React/RCTEventDispatcher.h>
#import "RNNotifications.h"
#import <React/RCTConvert.h>
#import <React/RCTUtils.h>
#import "RNNotificationsBridgeQueue.h"
#import <UserNotifications/UserNotifications.h>

#define SYSTEM_VERSION_GREATER_THAN_OR_EQUAL_TO(v)  ([[[UIDevice currentDevice] systemVersion] compare:v options:NSNumericSearch] != NSOrderedAscending)

NSString* const RNNotificationCreateAction = @"CREATE";
NSString* const RNNotificationClearAction = @"CLEAR";

NSString* const RNNotificationsRegistered = @"RNNotificationsRegistered";
NSString* const RNNotificationsRegistrationFailed = @"RNNotificationsRegistrationFailed";
NSString* const RNPushKitRegistered = @"RNPushKitRegistered";
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

    UIMutableUserNotificationAction* action =[UIMutableUserNotificationAction new];
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

    UIMutableUserNotificationCategory* category = [UIMutableUserNotificationCategory new];
    category.identifier = details[@"identifier"];

    // category actions
    NSMutableArray* actions = [NSMutableArray new];
    for (NSDictionary* actionJson in [RCTConvert NSArray:details[@"actions"]]) {
        [actions addObject:[RCTConvert UIMutableUserNotificationAction:actionJson]];
    }

    [category setActions:actions forContext:[RCTConvert UIUserNotificationActionContext:details[@"context"]]];

    return category;
}
@end

@implementation RCTConvert (UILocalNotification)
+ (UILocalNotification *)UILocalNotification:(id)json
{
    NSDictionary<NSString *, id> *details = [self NSDictionary:json];

    UILocalNotification* notification = [UILocalNotification new];
    notification.fireDate = [RCTConvert NSDate:details[@"fireDate"]];
    notification.alertBody = [RCTConvert NSString:details[@"alertBody"]];
    notification.alertTitle = [RCTConvert NSString:details[@"alertTitle"]];
    notification.alertAction = [RCTConvert NSString:details[@"alertAction"]];
    notification.soundName = [RCTConvert NSString:details[@"soundName"]] ?: UILocalNotificationDefaultSoundName;
    if ([RCTConvert BOOL:details[@"silent"]]) {
        notification.soundName = nil;
    }
    notification.userInfo = [RCTConvert NSDictionary:details[@"userInfo"]] ?: @{};
    notification.category = [RCTConvert NSString:details[@"category"]];

    return notification;
}
@end

@implementation RCTConvert (UNNotificationRequest)
+ (UNNotificationRequest *)UNNotificationRequest:(id)json withId:(NSString*)notificationId
{
    NSDictionary<NSString *, id> *details = [self NSDictionary:json];

    UNMutableNotificationContent *content = [UNMutableNotificationContent new];
    content.body = [RCTConvert NSString:details[@"alertBody"]];
    content.title = [RCTConvert NSString:details[@"alertTitle"]];
    content.sound = [RCTConvert NSString:details[@"soundName"]]
        ? [UNNotificationSound soundNamed:[RCTConvert NSString:details[@"soundName"]]]
        : [UNNotificationSound defaultSound];
    if ([RCTConvert BOOL:details[@"silent"]]) {
        content.sound = nil;
    }
    content.userInfo = [RCTConvert NSDictionary:details[@"userInfo"]] ?: @{};
    content.categoryIdentifier = [RCTConvert NSString:details[@"category"]];

    NSDate *triggerDate = [RCTConvert NSDate:details[@"fireDate"]];
    UNCalendarNotificationTrigger *trigger = nil;
    if (triggerDate != nil) {
        NSDateComponents *triggerDateComponents = [[NSCalendar currentCalendar]
                                                   components:NSCalendarUnitYear +
                                                   NSCalendarUnitMonth + NSCalendarUnitDay +
                                                   NSCalendarUnitHour + NSCalendarUnitMinute +
                                                   NSCalendarUnitSecond + NSCalendarUnitTimeZone
                                                   fromDate:triggerDate];
        trigger = [UNCalendarNotificationTrigger triggerWithDateMatchingComponents:triggerDateComponents
                                                                           repeats:NO];
    }

    return [UNNotificationRequest requestWithIdentifier:notificationId
                                                content:content trigger:trigger];
}
@end

static NSDictionary *RCTFormatUNNotification(UNNotification *notification)
{
  NSMutableDictionary *formattedNotification = [NSMutableDictionary dictionary];
  UNNotificationContent *content = notification.request.content;

  formattedNotification[@"identifier"] = notification.request.identifier;

  if (notification.date) {
    NSDateFormatter *formatter = [NSDateFormatter new];
    [formatter setDateFormat:@"yyyy-MM-dd'T'HH:mm:ss.SSSZZZZZ"];
    NSString *dateString = [formatter stringFromDate:notification.date];
    formattedNotification[@"fireDate"] = dateString;
  }

  formattedNotification[@"alertTitle"] = RCTNullIfNil(content.title);
  formattedNotification[@"alertBody"] = RCTNullIfNil(content.body);
  formattedNotification[@"category"] = RCTNullIfNil(content.categoryIdentifier);
  formattedNotification[@"thread-id"] = RCTNullIfNil(content.threadIdentifier);
  formattedNotification[@"userInfo"] = RCTNullIfNil(RCTJSONClean(content.userInfo));

  return formattedNotification;
}

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
                                             selector:@selector(handleNotificationsRegistered:)
                                                 name:RNNotificationsRegistered
                                               object:nil];

    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(handleNotificationsRegistrationFailed:)
                                                 name:RNNotificationsRegistrationFailed
                                               object:nil];

    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(handlePushKitRegistered:)
                                                 name:RNPushKitRegistered
                                               object:nil];

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

    [RNNotificationsBridgeQueue sharedInstance].openedRemoteNotification = [_bridge.launchOptions objectForKey:UIApplicationLaunchOptionsRemoteNotificationKey];
    [RNNotificationsBridgeQueue sharedInstance].openedLocalNotification = [_bridge.launchOptions objectForKey:UIApplicationLaunchOptionsLocalNotificationKey];
}

/*
 * Public Methods
 */
+ (void)didRegisterUserNotificationSettings:(UIUserNotificationSettings *)notificationSettings
{
    if ([UIApplication instancesRespondToSelector:@selector(registerForRemoteNotifications)]) {
        [[UIApplication sharedApplication] registerForRemoteNotifications];
    }
}

+ (void)didRegisterForRemoteNotificationsWithDeviceToken:(id)deviceToken
{
    NSString *tokenRepresentation = [deviceToken isKindOfClass:[NSString class]] ? deviceToken : [self deviceTokenToString:deviceToken];
    [[NSNotificationCenter defaultCenter] postNotificationName:RNNotificationsRegistered
                                                        object:self
                                                      userInfo:@{@"deviceToken": tokenRepresentation}];
}

+ (void)didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
    [[NSNotificationCenter defaultCenter] postNotificationName:RNNotificationsRegistrationFailed
                                                        object:self
                                                      userInfo:@{@"code": [NSNumber numberWithInteger:error.code], @"domain": error.domain, @"localizedDescription": error.localizedDescription}];
}

+ (void)didReceiveRemoteNotification:(NSDictionary *)notification
{
    UIApplicationState state = [UIApplication sharedApplication].applicationState;

    if ([RNNotificationsBridgeQueue sharedInstance].jsIsReady == YES) {
        // JS thread is ready, push the notification to the bridge

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
    } else {
        // JS thread is not ready - store it in the native notifications queue
        [[RNNotificationsBridgeQueue sharedInstance] postNotification:notification];
    }
}

+ (void)didReceiveLocalNotification:(UILocalNotification *)notification
{
    UIApplicationState state = [UIApplication sharedApplication].applicationState;

    NSMutableDictionary* newUserInfo = notification.userInfo.mutableCopy;
    [newUserInfo removeObjectForKey:@"__id"];
    notification.userInfo = newUserInfo;

    if (state == UIApplicationStateActive) {
        [self didReceiveNotificationOnForegroundState:notification.userInfo];
    } else if (state == UIApplicationStateInactive) {
        NSString* notificationId = [notification.userInfo objectForKey:@"notificationId"];
        if (notificationId) {
            [self clearNotificationFromNotificationsCenter:notificationId];
        }
        [self didNotificationOpen:notification.userInfo];
    }
}

+ (void)handleActionWithIdentifier:(NSString *)identifier forLocalNotification:(UILocalNotification *)notification withResponseInfo:(NSDictionary *)responseInfo completionHandler:(void (^)())completionHandler
{
    [self emitNotificationActionForIdentifier:identifier responseInfo:responseInfo userInfo:notification.userInfo completionHandler:completionHandler];
}

+ (void)handleActionWithIdentifier:(NSString *)identifier forRemoteNotification:(NSDictionary *)userInfo withResponseInfo:(NSDictionary *)responseInfo completionHandler:(void (^)())completionHandler
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
        UILocalNotification* note = [UILocalNotification new];
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

+ (NSString *)deviceTokenToString:(NSData *)deviceToken
{
    NSMutableString *result = [NSMutableString string];
    NSUInteger deviceTokenLength = deviceToken.length;
    const unsigned char *bytes = deviceToken.bytes;
    for (NSUInteger i = 0; i < deviceTokenLength; i++) {
        [result appendFormat:@"%02x", bytes[i]];
    }

    return [result copy];
}

+ (void)requestPermissionsWithCategories:(NSMutableSet *)categories
{
    UIUserNotificationType types = (UIUserNotificationType) (UIUserNotificationTypeBadge | UIUserNotificationTypeSound | UIUserNotificationTypeAlert);
    UIUserNotificationSettings* settings = [UIUserNotificationSettings settingsForTypes:types categories:categories];

    [[UIApplication sharedApplication] registerUserNotificationSettings:settings];
}

+ (void)emitNotificationActionForIdentifier:(NSString *)identifier responseInfo:(NSDictionary *)responseInfo userInfo:(NSDictionary *)userInfo  completionHandler:(void (^)())completionHandler
{
    NSString* completionKey = [NSString stringWithFormat:@"%@.%@", identifier, [NSString stringWithFormat:@"%d", (long)[[NSDate date] timeIntervalSince1970]]];
    NSMutableDictionary* info = [[NSMutableDictionary alloc] initWithDictionary:@{ @"identifier": identifier, @"completionKey": completionKey }];

    // add text
    NSString* text = [responseInfo objectForKey:UIUserNotificationActionResponseTypedTextKey];
    if (text != NULL) {
        info[@"text"] = text;
    }

    // add notification custom data
    if (userInfo != NULL) {
        info[@"notification"] = userInfo;
    }

    // Emit event to the queue (in order to store the completion handler). if JS thread is ready, post it also to the notification center (to the bridge).
    [[RNNotificationsBridgeQueue sharedInstance] postAction:info withCompletionKey:completionKey andCompletionHandler:completionHandler];

    if ([RNNotificationsBridgeQueue sharedInstance].jsIsReady == YES) {
        [[NSNotificationCenter defaultCenter] postNotificationName:RNNotificationActionTriggered
                                                            object:self
                                                          userInfo:info];
    }
}

+ (void)registerPushKit
{
    // Create a push registry object
    PKPushRegistry* pushKitRegistry = [[PKPushRegistry alloc] initWithQueue:dispatch_get_main_queue()];

    // Set the registry delegate to app delegate
    pushKitRegistry.delegate = [[UIApplication sharedApplication] delegate];
    pushKitRegistry.desiredPushTypes = [NSSet setWithObject:PKPushTypeVoIP];
}

+ (void)didUpdatePushCredentials:(PKPushCredentials *)credentials forType:(NSString *)type
{
    [[NSNotificationCenter defaultCenter] postNotificationName:RNPushKitRegistered
                                                        object:self
                                                      userInfo:@{@"pushKitToken": [self deviceTokenToString:credentials.token]}];
}

- (void)pushRegistry:(PKPushRegistry *)registry didReceiveIncomingPushWithPayload:(PKPushPayload *)payload forType:(NSString *)type
{
    [RNNotifications didReceiveRemoteNotification:payload.dictionaryPayload];
}

/*
 * Javascript events
 */
- (void)handleNotificationsRegistered:(NSNotification *)notification
{
    [_bridge.eventDispatcher sendDeviceEventWithName:@"remoteNotificationsRegistered" body:notification.userInfo];
}

- (void)handleNotificationsRegistrationFailed:(NSNotification *)notification
{
    [_bridge.eventDispatcher sendDeviceEventWithName:@"remoteNotificationsRegistrationFailed" body:notification.userInfo];
}

- (void)handlePushKitRegistered:(NSNotification *)notification
{
    [_bridge.eventDispatcher sendDeviceEventWithName:@"pushKitRegistered" body:notification.userInfo];
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

- (void)handleNotificationActionTriggered:(NSNotification *)notification
{
    [_bridge.eventDispatcher sendAppEventWithName:@"notificationActionReceived" body:notification.userInfo];
}

/*
 * React Native exported methods
 */
RCT_EXPORT_METHOD(requestPermissionsWithCategories:(NSArray *)json)
{
    NSMutableSet* categories = nil;

    if ([json count] > 0) {
        categories = [NSMutableSet new];
        for (NSDictionary* categoryJson in json) {
            [categories addObject:[RCTConvert UIMutableUserNotificationCategory:categoryJson]];
        }
    }

    [RNNotifications requestPermissionsWithCategories:categories];
}

RCT_EXPORT_METHOD(log:(NSString *)message)
{
    NSLog(message);
}

RCT_EXPORT_METHOD(completionHandler:(NSString *)completionKey)
{
    [[RNNotificationsBridgeQueue sharedInstance] completeAction:completionKey];
}

RCT_EXPORT_METHOD(abandonPermissions)
{
    [[UIApplication sharedApplication] unregisterForRemoteNotifications];
}

RCT_EXPORT_METHOD(registerPushKit)
{
    [RNNotifications registerPushKit];
}

RCT_EXPORT_METHOD(getBadgesCount:(RCTResponseSenderBlock)callback)
{
    NSInteger count = [UIApplication sharedApplication].applicationIconBadgeNumber;
    callback(@[ [NSNumber numberWithInteger:count] ]);
}

RCT_EXPORT_METHOD(setBadgesCount:(int)count)
{
    [[UIApplication sharedApplication] setApplicationIconBadgeNumber:count];
}

RCT_EXPORT_METHOD(backgroundTimeRemaining:(RCTResponseSenderBlock)callback)
{
    NSTimeInterval remainingTime = [UIApplication sharedApplication].backgroundTimeRemaining;
    callback(@[ [NSNumber numberWithDouble:remainingTime] ]);
}

RCT_EXPORT_METHOD(consumeBackgroundQueue)
{
    // Mark JS Thread as ready
    [RNNotificationsBridgeQueue sharedInstance].jsIsReady = YES;

    // Push actions to JS
    [[RNNotificationsBridgeQueue sharedInstance] consumeActionsQueue:^(NSDictionary* action) {
        [[NSNotificationCenter defaultCenter] postNotificationName:RNNotificationActionTriggered
                                                            object:self
                                                          userInfo:action];
    }];

    // Push background notifications to JS
    [[RNNotificationsBridgeQueue sharedInstance] consumeNotificationsQueue:^(NSDictionary* notification) {
        [RNNotifications didReceiveRemoteNotification:notification];
    }];

    // Push opened local notifications
    NSDictionary* openedLocalNotification = [RNNotificationsBridgeQueue sharedInstance].openedLocalNotification;
    if (openedLocalNotification) {
        [RNNotificationsBridgeQueue sharedInstance].openedLocalNotification = nil;
        [RNNotifications didNotificationOpen:openedLocalNotification];
    }

    // Push opened remote notifications
    NSDictionary* openedRemoteNotification = [RNNotificationsBridgeQueue sharedInstance].openedRemoteNotification;
    if (openedRemoteNotification) {
        [RNNotificationsBridgeQueue sharedInstance].openedRemoteNotification = nil;
        [RNNotifications didNotificationOpen:openedRemoteNotification];
    }
}

RCT_EXPORT_METHOD(localNotification:(NSDictionary *)notification withId:(NSString *)notificationId)
{
    if (SYSTEM_VERSION_GREATER_THAN_OR_EQUAL_TO(@"10")) {
        UNNotificationRequest* localNotification = [RCTConvert UNNotificationRequest:notification withId:notificationId];
        [[UNUserNotificationCenter currentNotificationCenter] addNotificationRequest:localNotification withCompletionHandler:nil];
    } else {
        UILocalNotification* localNotification = [RCTConvert UILocalNotification:notification];
        NSMutableArray* userInfo = localNotification.userInfo.mutableCopy;
        [userInfo setValue:notificationId forKey:@"__id"];
        localNotification.userInfo = userInfo;

        if ([notification objectForKey:@"fireDate"] != nil) {
            [[UIApplication sharedApplication] scheduleLocalNotification:localNotification];
        } else {
            [[UIApplication sharedApplication] presentLocalNotificationNow:localNotification];
        }
    }
}

RCT_EXPORT_METHOD(cancelLocalNotification:(NSString *)notificationId)
{
    if (SYSTEM_VERSION_GREATER_THAN_OR_EQUAL_TO(@"10")) {
        UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
        [center removePendingNotificationRequestsWithIdentifiers:@[notificationId]];
    } else {
        for (UILocalNotification* notification in [UIApplication sharedApplication].scheduledLocalNotifications) {
            NSDictionary* notificationInfo = notification.userInfo;

            if ([[notificationInfo objectForKey:@"__id"] isEqualToString:notificationId]) {
                [[UIApplication sharedApplication] cancelLocalNotification:notification];
            }
        }
    }
}

RCT_EXPORT_METHOD(cancelAllLocalNotifications)
{
    [RCTSharedApplication() cancelAllLocalNotifications];
}

RCT_EXPORT_METHOD(isRegisteredForRemoteNotifications:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
{
    BOOL ans;

    if (TARGET_IPHONE_SIMULATOR) {
        ans = [[[UIApplication sharedApplication] currentUserNotificationSettings] types] != 0;
    }
    else {
        ans = [[UIApplication sharedApplication] isRegisteredForRemoteNotifications];
    }
    resolve(@(ans));
}

RCT_EXPORT_METHOD(checkPermissions:(RCTPromiseResolveBlock) resolve
                  reject:(RCTPromiseRejectBlock) reject) {
    UIUserNotificationSettings *currentSettings = [[UIApplication sharedApplication] currentUserNotificationSettings];
    resolve(@{
              @"badge": @((currentSettings.types & UIUserNotificationTypeBadge) > 0),
              @"sound": @((currentSettings.types & UIUserNotificationTypeSound) > 0),
              @"alert": @((currentSettings.types & UIUserNotificationTypeAlert) > 0),
              });
}

#if !TARGET_OS_TV

RCT_EXPORT_METHOD(removeAllDeliveredNotifications)
{
  if ([UNUserNotificationCenter class]) {
    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
    [center removeAllDeliveredNotifications];
  }
}

RCT_EXPORT_METHOD(removeDeliveredNotifications:(NSArray<NSString *> *)identifiers)
{
  if ([UNUserNotificationCenter class]) {
    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
    [center removeDeliveredNotificationsWithIdentifiers:identifiers];
  }
}

RCT_EXPORT_METHOD(getDeliveredNotifications:(RCTResponseSenderBlock)callback)
{
  if ([UNUserNotificationCenter class]) {
    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
    [center getDeliveredNotificationsWithCompletionHandler:^(NSArray<UNNotification *> * _Nonnull notifications) {
      NSMutableArray<NSDictionary *> *formattedNotifications = [NSMutableArray new];

      for (UNNotification *notification in notifications) {
        [formattedNotifications addObject:RCTFormatUNNotification(notification)];
      }
      callback(@[formattedNotifications]);
    }];
  }
}

#endif !TARGET_OS_TV

@end
