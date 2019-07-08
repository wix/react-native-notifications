#import "RNNotificationsStore.h"

@implementation RNNotificationsStore {
    NSMutableDictionary* _actionCompletionHandlers;
    NSMutableDictionary* _presentationCompletionHandlers;
}

- (instancetype)init {
    self = [super init];
    _actionCompletionHandlers = [NSMutableDictionary new];
    _presentationCompletionHandlers = [NSMutableDictionary new];
    return self;
}

- (void)setActionCompletionHandler:(void (^)())completionHandler withCompletionKey:(NSString *)completionKey {
    _actionCompletionHandlers[completionKey] = completionHandler;
}

- (void)setPresentationCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler withCompletionKey:(NSString *)completionKey {
    _presentationCompletionHandlers[completionKey] = completionHandler;
}

- (void)completeAction:(NSString *)completionKey {
    void (^completionHandler)() = (void (^)())[_actionCompletionHandlers valueForKey:completionKey];
    if (completionHandler) {
        completionHandler();
        [_actionCompletionHandlers removeObjectForKey:completionKey];
    }
}

- (void)completePresentation:(NSString *)completionKey withPresentationOptions:(UNNotificationPresentationOptions)presentationOptions {
    void (^completionHandler)() = (void (^)(UNNotificationPresentationOptions))[_presentationCompletionHandlers valueForKey:completionKey];
    if (completionHandler) {
        completionHandler(presentationOptions);
        [_actionCompletionHandlers removeObjectForKey:completionKey];
    }
}

@end
