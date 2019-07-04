#import "RNCommandsHandler.h"
#import "RNNotifications.h"
#import "RNNotificationsBridgeQueue.h"
#import "RCTConvert+Notifications.h"

@implementation RNCommandsHandler

- (instancetype)init {
    self = [super init];
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(onJavaScriptLoaded)
                                                 name:RCTJavaScriptDidLoadNotification
                                               object:nil];
    return self;
}

- (void)onJavaScriptLoaded {
    [RNNotificationsBridgeQueue sharedInstance].jsIsReady = YES;
}

- (void)requestPermissionsWithCategories:(NSArray *)json {
    NSMutableSet* categories = nil;
    
    if ([json count] > 0) {
        categories = [NSMutableSet new];
        for (NSDictionary* categoryJson in json) {
            [categories addObject:[RCTConvert UIMutableUserNotificationCategory:categoryJson]];
        }
    }
    
    [[RNNotifications sharedInstance] requestPermissionsWithCategories:categories];
}

- (void)getInitialNotification:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    NSDictionary * notification = nil;
    notification = [RNNotificationsBridgeQueue sharedInstance].openedRemoteNotification ?
    [RNNotificationsBridgeQueue sharedInstance].openedRemoteNotification :
    [RNNotificationsBridgeQueue sharedInstance].openedLocalNotification;
    [RNNotificationsBridgeQueue sharedInstance].openedRemoteNotification = nil;
    [RNNotificationsBridgeQueue sharedInstance].openedLocalNotification = nil;
    resolve(notification);
}

- (void)completionHandler:(NSString *)completionKey {
    [[RNNotificationsBridgeQueue sharedInstance] completeAction:completionKey];
}

- (void)abandonPermissions {
    [[UIApplication sharedApplication] unregisterForRemoteNotifications];
}

- (void)registerPushKit {
    [[RNNotifications sharedInstance] registerPushKit];
}

- (void)getBadgesCount:(RCTResponseSenderBlock)callback {
    NSInteger count = [UIApplication sharedApplication].applicationIconBadgeNumber;
    callback(@[ [NSNumber numberWithInteger:count] ]);
}

- (void)setBadgesCount:(int)count {
    [[UIApplication sharedApplication] setApplicationIconBadgeNumber:count];
}

- (void)localNotification:(NSDictionary *)notification withId:(NSString *)notificationId {
    UNNotificationRequest* localNotification = [RCTConvert UNNotificationRequest:notification withId:notificationId];
    [[UNUserNotificationCenter currentNotificationCenter] addNotificationRequest:localNotification withCompletionHandler:nil];
}

- (void)cancelLocalNotification:(NSString *)notificationId {
    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
    [center removePendingNotificationRequestsWithIdentifiers:@[notificationId]];
}

- (void)cancelAllLocalNotifications {
    [RCTSharedApplication() cancelAllLocalNotifications];
}

- (void)isRegisteredForRemoteNotifications:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    BOOL ans = [[[UIApplication sharedApplication] currentUserNotificationSettings] types] != 0;
    resolve(@(ans));
}

- (void)checkPermissions:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    UIUserNotificationSettings *currentSettings = [[UIApplication sharedApplication] currentUserNotificationSettings];
    resolve(@{
              @"badge": @((currentSettings.types & UIUserNotificationTypeBadge) > 0),
              @"sound": @((currentSettings.types & UIUserNotificationTypeSound) > 0),
              @"alert": @((currentSettings.types & UIUserNotificationTypeAlert) > 0),
              });
}

- (void)removeAllDeliveredNotifications {
    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
    [center removeAllDeliveredNotifications];
}

- (void)removeDeliveredNotifications:(NSArray<NSString *> *)identifiers {
    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
    [center removeDeliveredNotificationsWithIdentifiers:identifiers];
}

- (void)getDeliveredNotifications:(RCTResponseSenderBlock)callback {
    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
    [center getDeliveredNotificationsWithCompletionHandler:^(NSArray<UNNotification *> * _Nonnull notifications) {
        NSMutableArray<NSDictionary *> *formattedNotifications = [NSMutableArray new];
        
        for (UNNotification *notification in notifications) {
            [formattedNotifications addObject:RCTFormatUNNotification(notification)];
        }
        callback(@[formattedNotifications]);
    }];
}

@end
