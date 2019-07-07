#import <Foundation/Foundation.h>

@interface RNNotificationsStore : NSObject

@property NSDictionary* initialNotification;

- (void)completeAction:(NSString *)completionKey;
- (void)setCompletionHandler:(void (^)())completionHandler withCompletionKey:(NSString *)completionKey;

@end
