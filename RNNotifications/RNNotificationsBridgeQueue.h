#import <Foundation/Foundation.h>

@interface RNNotificationsBridgeQueue : NSObject

@property BOOL jsIsReady;
@property NSDictionary* openedRemoteNotification;
@property NSDictionary* openedLocalNotification;

+ (nonnull instancetype)sharedInstance;

- (void)postAction:(NSDictionary *)action withCompletionKey:(NSString *)completionKey andCompletionHandler:(void (^)())completionHandler;
- (void)postNotification:(NSDictionary *)notification;
- (void)postFetchHandler:(NSDictionary *)notification completionKey:(NSString *)completionKey
    fetchCompletionHandler:(void (^)(UIBackgroundFetchResult result))completionHandler;

- (void)consumeActionsQueue:(void (^)(NSDictionary *))block;
- (void)consumeNotificationsQueue:(void (^)(NSDictionary *))block;

- (void)completeAction:(NSString *)completionKey;
- (void)completeFetch:(NSString *)completionKey fetchResult:(UIBackgroundFetchResult)result;

@end
