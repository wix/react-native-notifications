#import <UIKit/UIKit.h>
#import "RNNotificationsBridgeQueue.h"

@implementation RNNotificationsBridgeQueue

NSMutableArray<NSDictionary *>* actionsQueue;
NSMutableArray<NSDictionary *>* notificationsQueue;
NSMutableDictionary* actionCompletionHandlers;
NSMutableDictionary* fetchCompletionHandlers;

+ (nonnull instancetype)sharedInstance {
    static RNNotificationsBridgeQueue* sharedInstance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        sharedInstance = [self new];
    });
    
    return sharedInstance;
}

- (instancetype)init
{
    actionsQueue = [NSMutableArray new];
    notificationsQueue = [NSMutableArray new];
    actionCompletionHandlers = [NSMutableDictionary new];
    fetchCompletionHandlers = [NSMutableDictionary new];
    self.jsIsReady = NO;

    return self;
}

- (void)postNotification:(NSDictionary *)notification
{
    if (!notificationsQueue) return;
    [notificationsQueue insertObject:notification atIndex:0];
}

- (void)postFetchHandler:(NSMutableDictionary *)notification completionKey:(NSString *)completionKey
    fetchCompletionHandler:(void (^)(UIBackgroundFetchResult result))completionHandler
{
    fetchCompletionHandlers[completionKey] = completionHandler;
}

- (NSDictionary *)dequeueSingleNotification
{
    if (!notificationsQueue || notificationsQueue.count == 0) return nil;

    NSDictionary* notification = [notificationsQueue lastObject];
    [notificationsQueue removeLastObject];

    return notification;
}

- (void)consumeNotificationsQueue:(void (^)(NSDictionary *))block
{
    NSDictionary* notification;

    while ((notification = [self dequeueSingleNotification]) != nil) {
        block(notification);
    }

    notificationsQueue = nil;
}

- (void)postAction:(NSDictionary *)action withCompletionKey:(NSString *)completionKey andCompletionHandler:(void (^)())completionHandler
{
    // store completion handler
    actionCompletionHandlers[completionKey] = completionHandler;

    if (!actionsQueue) return;
    [actionsQueue insertObject:action atIndex:0];
}

- (NSDictionary *)dequeueSingleAction
{
    if (!actionsQueue || actionsQueue.count == 0) return nil;

    NSDictionary* action = [actionsQueue lastObject];
    [actionsQueue removeLastObject];

    return action;
}

- (void)consumeActionsQueue:(void (^)(NSDictionary *))block
{
    NSDictionary* lastActionInfo;

    while ((lastActionInfo = [self dequeueSingleAction]) != nil) {
        block(lastActionInfo);
    }

    actionsQueue = nil;
}

- (void)completeAction:(NSString *)completionKey
{
    void (^completionHandler)() = (void (^)())[actionCompletionHandlers valueForKey:completionKey];
    if (completionHandler) {
        completionHandler();
        [actionCompletionHandlers removeObjectForKey:completionKey];
    }
}

- (void)completeFetch:(NSString *)completionKey fetchResult:(UIBackgroundFetchResult)result
{
    void (^completionHandler)(UIBackgroundFetchResult) =
        (void (^)(UIBackgroundFetchResult))[fetchCompletionHandlers valueForKey:completionKey];
    if (completionHandler) {
        [fetchCompletionHandlers removeObjectForKey:completionKey];
        completionHandler(result);
    }
}

@end
