#import "RNNotificationCenter.h"
#import "RCTConvert+Notifications.h"

@implementation RNNotificationCenter

- (void)requestPermissionsWithCategories:(NSArray *)json {
    NSMutableSet<UNNotificationCategory *>* categories = nil;
    
    if ([json count] > 0) {
        categories = [NSMutableSet new];
        for (NSDictionary* categoryJson in json) {
            [categories addObject:[RCTConvert UNMutableUserNotificationCategory:categoryJson]];
        }
    }
    [[UNUserNotificationCenter currentNotificationCenter] setNotificationCategories:categories];
    UNAuthorizationOptions authOptions = (UNAuthorizationOptionBadge | UNAuthorizationOptionSound | UNAuthorizationOptionAlert);
    [UNUserNotificationCenter.currentNotificationCenter requestAuthorizationWithOptions:authOptions completionHandler:^(BOOL granted, NSError * _Nullable error) {
        if (error) {
            
        } else {
            if (granted) {
                [UNUserNotificationCenter.currentNotificationCenter getNotificationSettingsWithCompletionHandler:^(UNNotificationSettings * _Nonnull settings) {
                    if (settings.authorizationStatus == UNAuthorizationStatusAuthorized) {
                        dispatch_async(dispatch_get_main_queue(), ^{
                            [[UIApplication sharedApplication] registerForRemoteNotifications];
                        });
                    }
                }];
            } else {
                
            }
        }
    }];
}

- (void)sendLocalNotification:(NSDictionary *)notification withId:(NSString *)notificationId {
    UNNotificationRequest* localNotification = [RCTConvert UNNotificationRequest:notification withId:notificationId];
    [[UNUserNotificationCenter currentNotificationCenter] addNotificationRequest:localNotification withCompletionHandler:nil];
}

- (void)cancelLocalNotification:(NSString *)notificationId {
    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
    [center removePendingNotificationRequestsWithIdentifiers:@[notificationId]];
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
            [formattedNotifications addObject:[RCTConvert UNNotificationPayload:notification]];
        }
        callback(@[formattedNotifications]);
    }];
}

- (void)cancelAllLocalNotifications {
    [[UNUserNotificationCenter currentNotificationCenter] removeAllPendingNotificationRequests];
}

- (void)isRegisteredForRemoteNotifications:(RCTPromiseResolveBlock)resolve {
    [[UNUserNotificationCenter currentNotificationCenter] getNotificationSettingsWithCompletionHandler:^(UNNotificationSettings * _Nonnull settings) {
        if (settings.alertSetting == UNNotificationSettingEnabled || settings.soundSetting == UNNotificationSettingEnabled || settings.badgeSetting == UNNotificationSettingEnabled) {
            resolve(@(YES));
        } else {
            resolve(@(NO));
        }
    }];
}

- (void)checkPermissions:(RCTPromiseResolveBlock)resolve {
    [[UNUserNotificationCenter currentNotificationCenter] getNotificationSettingsWithCompletionHandler:^(UNNotificationSettings * _Nonnull settings) {
        resolve(@{
                  @"badge": @(settings.badgeSetting == UNNotificationSettingEnabled),
                  @"sound": @(settings.soundSetting == UNNotificationSettingEnabled),
                  @"alert": @(settings.alertSetting == UNNotificationSettingEnabled),
                  });
    }];
}

@end
