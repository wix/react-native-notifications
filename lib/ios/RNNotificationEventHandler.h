#import <Foundation/Foundation.h>
@import UserNotifications;
#import "RNNotificationsStore.h"
#import "RNEventEmitter.h"

@interface RNNotificationEventHandler : NSObject

- (instancetype)initWithStore:(RNNotificationsStore *)store;

- (void)didRegisterForRemoteNotificationsWithDeviceToken:(id)deviceToken;
- (void)didFailToRegisterForRemoteNotificationsWithError:(NSError *)error;

- (void)didReceiveForegroundNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler;
- (void)didReceiveNotificationResponse:(UNNotificationResponse *)notificationResponse completionHandler:(void (^)(void))completionHandler;
- (void)didReceiveBackgroundNotification:(NSDictionary *)userInfo withCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler;

@end
