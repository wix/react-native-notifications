#import <Foundation/Foundation.h>
@import UserNotifications;

@interface RNNotificationsStore : NSObject

@property NSDictionary* initialNotification;

- (void)completeAction:(NSString *)completionKey;
- (void)completePresentation:(NSString *)completionKey withPresentationOptions:(UNNotificationPresentationOptions)presentationOptions;
- (void)setActionCompletionHandler:(void (^)())completionHandler withCompletionKey:(NSString *)completionKey;
- (void)setPresentationCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler withCompletionKey:(NSString *)completionKey;


@end
