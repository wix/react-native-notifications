#import "RNNotificationCenterMulticast.h"

@implementation RNNotificationCenterMulticast {
  NSHashTable *delegates;
}

- (id)init {
  self = [super init];
  if (self) {
    delegates = [NSHashTable weakObjectsHashTable];
  }
  return self;
}

- (void)addNativeDelegate:(id<UNUserNotificationCenterDelegate>)delegate {
  [delegates addObject:delegate];
}

- (void)removeNativeDelegate:(id<UNUserNotificationCenterDelegate>)delegate {
  [delegates removeObject:delegate];
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions options))completionHandler
{
  for (id<UNUserNotificationCenterDelegate> delegate in delegates) {
    if ([delegate respondsToSelector:@selector(userNotificationCenter:willPresentNotification:withCompletionHandler:)]) {
      [delegate userNotificationCenter:center willPresentNotification:notification withCompletionHandler:completionHandler];
    }
  }
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void(^)(void))completionHandler
{
  for (id<UNUserNotificationCenterDelegate> delegate in delegates) {
    if ([delegate respondsToSelector:@selector(userNotificationCenter:didReceiveNotificationResponse:withCompletionHandler:)]) {
      [delegate userNotificationCenter:center didReceiveNotificationResponse:response withCompletionHandler:completionHandler];
    }
  }
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center openSettingsForNotification:(nullable UNNotification *)notification
{
  for (id<UNUserNotificationCenterDelegate> delegate in delegates) {
    if ([delegate respondsToSelector:@selector(userNotificationCenter:openSettingsForNotification:)]) {
      if (@available(iOS 12.0, *)) {
        [delegate userNotificationCenter:center openSettingsForNotification:notification];
      }
    }
  }
}

@end
