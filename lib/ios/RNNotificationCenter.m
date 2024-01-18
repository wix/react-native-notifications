#import "RNEventEmitter.h"
#import "RNNotificationCenter.h"
#import "RCTConvert+RNNotifications.h"

@implementation RNNotificationCenter

- (void)requestPermissions:(NSDictionary *)options {
    BOOL carPlay = [options[@"carPlay"] boolValue];
    BOOL criticalAlert = [options[@"criticalAlert"] boolValue];
    BOOL providesAppNotificationSettings = [options[@"providesAppNotificationSettings"] boolValue];
    BOOL provisional = [options[@"provisional"] boolValue];
    BOOL announcement = [options[@"announcement"] boolValue];
    UNAuthorizationOptions authOptions = (UNAuthorizationOptionBadge | UNAuthorizationOptionSound | UNAuthorizationOptionAlert);
    if (carPlay) {
        authOptions = authOptions | UNAuthorizationOptionCarPlay;
    }
    if (@available(iOS 12.0, *)) {
        if (criticalAlert) {
            authOptions = authOptions | UNAuthorizationOptionCriticalAlert;
        }
        if (providesAppNotificationSettings) {
            authOptions = authOptions | UNAuthorizationOptionProvidesAppNotificationSettings;
        }
        if (provisional) {
            authOptions = authOptions | UNAuthorizationOptionProvisional;
        }
    }
    if (@available(iOS 13.0, *)) {
        if (announcement) {
            authOptions = authOptions | UNAuthorizationOptionAnnouncement;
        }
    }
    
    [UNUserNotificationCenter.currentNotificationCenter requestAuthorizationWithOptions:authOptions completionHandler:^(BOOL granted, NSError * _Nullable error) {
        if (!error && granted) {
            [UNUserNotificationCenter.currentNotificationCenter getNotificationSettingsWithCompletionHandler:^(UNNotificationSettings * _Nonnull settings) {
                if (settings.authorizationStatus == UNAuthorizationStatusAuthorized || settings.authorizationStatus == UNAuthorizationStatusProvisional) {
                    dispatch_async(dispatch_get_main_queue(), ^{
                        [[UIApplication sharedApplication] registerForRemoteNotifications];
                    });
                }
            }];
        }
        if (!error && !granted) {
          [RNEventEmitter sendEvent:RNRegistrationDenied body:nil];
        }
    }];
}

- (void)setCategories:(NSArray *)json {
    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];

    [center getNotificationCategoriesWithCompletionHandler:^(NSSet<UNNotificationCategory *> * _Nonnull existingCategories) {
        NSMutableSet<UNNotificationCategory *> *updatedCategories = [existingCategories mutableCopy];

        for (NSDictionary* categoryJson in json) {
            UNNotificationCategory *newCategory = [RCTConvert UNMutableUserNotificationCategory:categoryJson];
            if (newCategory) {
                [updatedCategories addObject:newCategory];
            }
        }

        [center setNotificationCategories:updatedCategories];
    }];
}

- (void)postLocalNotification:(NSDictionary *)notification withId:(NSNumber *)notificationId {
    UNNotificationRequest* localNotification = [RCTConvert UNNotificationRequest:notification withId:notificationId];
    [[UNUserNotificationCenter currentNotificationCenter] addNotificationRequest:localNotification withCompletionHandler:nil];
}

- (void)cancelLocalNotification:(NSNumber *)notificationId {
    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
    [center removePendingNotificationRequestsWithIdentifiers:@[[notificationId stringValue]]];
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
        NSMutableDictionary* allSettings = [NSMutableDictionary new];
        [allSettings addEntriesFromDictionary:@{
            @"badge": [NSNumber numberWithBool:settings.badgeSetting == UNNotificationSettingEnabled],
            @"sound": [NSNumber numberWithBool:settings.soundSetting == UNNotificationSettingEnabled],
            @"alert": [NSNumber numberWithBool:settings.alertSetting == UNNotificationSettingEnabled],
            @"carPlay": [NSNumber numberWithBool:settings.carPlaySetting == UNNotificationSettingEnabled],
            @"notificationCenter": [NSNumber numberWithBool:settings.notificationCenterSetting == UNNotificationSettingEnabled],
            @"lockScreen": [NSNumber numberWithBool:settings.lockScreenSetting == UNNotificationSettingEnabled],
        }];
        if (@available(iOS 12.0, *)) {
            allSettings[@"criticalAlert"] = [NSNumber numberWithBool:settings.criticalAlertSetting == UNNotificationSettingEnabled];
            allSettings[@"providesAppNotificationSettings"] = [NSNumber numberWithBool:settings.providesAppNotificationSettings];
            allSettings[@"provisional"] = [NSNumber numberWithBool:settings.authorizationStatus == UNAuthorizationStatusProvisional];
        }
        if (@available(iOS 13.0, *)) {
            allSettings[@"announcement"] = [NSNumber numberWithBool:settings.announcementSetting == UNNotificationSettingEnabled];
        }
        resolve(allSettings);
    }];
}
@end
