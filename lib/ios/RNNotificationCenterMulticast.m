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
  dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
    dispatch_group_t completionGroup = dispatch_group_create();
      
    __block UNNotificationPresentationOptions allOptions = UNNotificationPresentationOptionNone;
    void (^myCompletion)(UNNotificationPresentationOptions);
    myCompletion = ^(UNNotificationPresentationOptions options){
      allOptions |= options;
      dispatch_group_leave(completionGroup);
    };
    
    for (id<UNUserNotificationCenterDelegate> delegate in delegates) {
      if ([delegate respondsToSelector:@selector(userNotificationCenter:willPresentNotification:withCompletionHandler:)]) {
        dispatch_group_enter(completionGroup);
        [delegate userNotificationCenter:center willPresentNotification:notification withCompletionHandler:myCompletion];
      }
    }
    
    dispatch_group_wait(completionGroup, dispatch_time(DISPATCH_TIME_NOW, 30 * NSEC_PER_SEC));

    dispatch_async(dispatch_get_main_queue(), ^{
      completionHandler(allOptions);
    });
  });
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void(^)(void))completionHandler
{
  dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
    dispatch_group_t completionGroup = dispatch_group_create();
      
    void (^myCompletion)(void) = ^{
      dispatch_group_leave(completionGroup);
    };
    
    for (id<UNUserNotificationCenterDelegate> delegate in delegates) {
      if ([delegate respondsToSelector:@selector(userNotificationCenter:didReceiveNotificationResponse:withCompletionHandler:)]) {
        dispatch_group_enter(completionGroup);
        [delegate userNotificationCenter:center didReceiveNotificationResponse:response withCompletionHandler:myCompletion];
      }
    }
    
    dispatch_group_wait(completionGroup, dispatch_time(DISPATCH_TIME_NOW, 30 * NSEC_PER_SEC));

    dispatch_async(dispatch_get_main_queue(), ^{
      completionHandler();
    });
  });
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
