
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

NSString* const RNNotificationCreateAction = @"CREATE";
NSString* const RNNotificationClearAction = @"CLEAR";

@implementation RNNotifications

RCT_EXPORT_MODULE()

@synthesize bridge = _bridge;

+ (instancetype)sharedInstance {
    static RNNotifications *sharedInstance = nil;
    static dispatch_once_t onceToken;
    
    dispatch_once(&onceToken, ^{
        sharedInstance = [[RNNotifications alloc] init];
    });
    return sharedInstance;
}

- (void)dealloc
{
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

- (void)setBridge:(RCTBridge *)bridge
{
    _bridge = bridge;
    [RNNotificationsBridgeQueue sharedInstance].openedRemoteNotification = [_bridge.launchOptions objectForKey:UIApplicationLaunchOptionsRemoteNotificationKey];
    UILocalNotification *localNotification = [_bridge.launchOptions objectForKey:UIApplicationLaunchOptionsLocalNotificationKey];
    [RNNotificationsBridgeQueue sharedInstance].openedLocalNotification = localNotification ? localNotification.userInfo : nil;
}

/*
 * Public Methods
 */

- (void)didRegisterForRemoteNotificationsWithDeviceToken:(id)deviceToken {
    NSString *tokenRepresentation = [deviceToken isKindOfClass:[NSString class]] ? deviceToken : [self deviceTokenToString:deviceToken];
    [RNEventEmitter sendEvent:Registered body:@{@"deviceToken": tokenRepresentation}];
}

- (void)didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
    [RNEventEmitter sendEvent:RegistrationFailed body:@{@"code": [NSNumber numberWithInteger:error.code], @"domain": error.domain, @"localizedDescription": error.localizedDescription}];
}

- (void)didReceiveForegroundNotification:(UNNotification *)notification {
    if ([RNNotificationsBridgeQueue sharedInstance].jsIsReady == YES) {
        [self didReceiveNotificationOnForegroundState:notification];
    }
}

- (void)didReceiveNotificationResponse:(UNNotificationResponse *)response {
    if ([RNNotificationsBridgeQueue sharedInstance].jsIsReady == YES && [response.actionIdentifier isEqualToString:UNNotificationDefaultActionIdentifier]) {
        [self didNotificationOpen:response.notification.request.content.userInfo];
    }
}

- (void)handleActionWithIdentifier:(NSString *)identifier forLocalNotification:(UILocalNotification *)notification withResponseInfo:(NSDictionary *)responseInfo completionHandler:(void (^)())completionHandler
{
    [self emitNotificationActionForIdentifier:identifier responseInfo:responseInfo userInfo:notification.userInfo completionHandler:completionHandler];
}

- (void)handleActionWithIdentifier:(NSString *)identifier forRemoteNotification:(NSDictionary *)userInfo withResponseInfo:(NSDictionary *)responseInfo completionHandler:(void (^)())completionHandler
{
    [self emitNotificationActionForIdentifier:identifier responseInfo:responseInfo userInfo:userInfo completionHandler:completionHandler];
}

- (void)setBadgeForNotification:(NSDictionary *)notification {
    if ([[notification objectForKey:@"aps"] objectForKey:@"badge"]){
        [[UIApplication sharedApplication] setApplicationIconBadgeNumber:[[[notification objectForKey:@"aps"] objectForKey:@"badge"] intValue]];
    }
}

/*
 * Notification handlers
 */
- (void)didReceiveNotificationOnForegroundState:(UNNotification *)notification {
    [RNEventEmitter sendEvent:NotificationReceivedForeground body:notification.request.content.userInfo];
}

- (void)didReceiveNotificationOnBackgroundState:(NSDictionary *)notification {
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

    [RNEventEmitter sendEvent:NotificationReceivedBackground body:notification];
}

- (void)didNotificationOpen:(NSDictionary *)notification {
    [RNEventEmitter sendEvent:NotificationOpened body:notification];
}

/*
 * Helper methods
 */
- (void)dispatchLocalNotificationFromNotification:(NSDictionary *)notification {
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

- (void)clearNotificationFromNotificationsCenter:(NSString *)notificationId {
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

- (NSString *)buildNotificationKeyfromNotification:(NSString *)notificationId {
    return [NSString stringWithFormat:@"%@.%@", [[NSBundle mainBundle] bundleIdentifier], notificationId];
}

- (NSString *)deviceTokenToString:(NSData *)deviceToken {
    NSMutableString *result = [NSMutableString string];
    NSUInteger deviceTokenLength = deviceToken.length;
    const unsigned char *bytes = deviceToken.bytes;
    for (NSUInteger i = 0; i < deviceTokenLength; i++) {
        [result appendFormat:@"%02x", bytes[i]];
    }

    return [result copy];
}

- (void)requestPermissionsWithCategories:(NSMutableSet *)categories {
    UNAuthorizationOptions authOptions = (UNAuthorizationOptionBadge | UNAuthorizationOptionSound | UNAuthorizationOptionAlert);
    [UNUserNotificationCenter.currentNotificationCenter requestAuthorizationWithOptions:authOptions completionHandler:^(BOOL granted, NSError * _Nullable error) {
        if (error) {
            
        } else {
            if (granted) {
                [UNUserNotificationCenter.currentNotificationCenter getNotificationSettingsWithCompletionHandler:^(UNNotificationSettings * _Nonnull settings) {
                    if (settings.authorizationStatus == UNAuthorizationStatusAuthorized) {
                        [[UIApplication sharedApplication] registerForRemoteNotifications];
                    }
                }];
            } else {
                
            }
        }
    }];
}

- (void)emitNotificationActionForIdentifier:(NSString *)identifier responseInfo:(NSDictionary *)responseInfo userInfo:(NSDictionary *)userInfo  completionHandler:(void (^)())completionHandler {
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
        [RNEventEmitter sendEvent:NotificationActionReceived body:userInfo];
    }
}

- (void)registerPushKit {
    // Create a push registry object
    PKPushRegistry* pushKitRegistry = [[PKPushRegistry alloc] initWithQueue:dispatch_get_main_queue()];

    // Set the registry delegate to app delegate
    pushKitRegistry.delegate = [[UIApplication sharedApplication] delegate];
    pushKitRegistry.desiredPushTypes = [NSSet setWithObject:PKPushTypeVoIP];
}

- (void)didUpdatePushCredentials:(PKPushCredentials *)credentials forType:(NSString *)type {
    [RNEventEmitter sendEvent:PushKitRegistered body:@{@"pushKitToken": [self deviceTokenToString:credentials.token]}];
}

- (void)pushRegistry:(PKPushRegistry *)registry didReceiveIncomingPushWithPayload:(PKPushPayload *)payload forType:(NSString *)type {
//    [RNNotifications didReceiveRemoteNotification:payload.dictionaryPayload];
}

@end
