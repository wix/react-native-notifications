#import "RNNotificationsBridgeQueue.h"

@implementation RNNotificationsBridgeQueue

NSMutableArray<NSDictionary *>* actionsQueue;
NSMutableArray<NSDictionary *>* backgroundNotificationsQueue;
NSMutableDictionary* actionCompletionHandlers;

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
    backgroundNotificationsQueue = [NSMutableArray new];
    actionCompletionHandlers = [NSMutableDictionary new];
    self.jsIsReady = NO;

    return self;
}

- (void)postNotification:(NSDictionary *)notification
{
    if (!backgroundNotificationsQueue) return;
    [backgroundNotificationsQueue insertObject:notification atIndex:0];
}

- (NSDictionary *)dequeueSingleNotification
{
    if (!backgroundNotificationsQueue || backgroundNotificationsQueue.count == 0) return nil;

    NSDictionary* notification = [backgroundNotificationsQueue lastObject];
    [backgroundNotificationsQueue removeLastObject];

    return notification;
}

- (void)consumeNotificationsQueue:(void (^)(NSDictionary *))block
{
    NSDictionary* notification;

    while ((notification = [self dequeueSingleNotification]) != nil) {
        block(notification);
    }

    backgroundNotificationsQueue = nil;
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

@end