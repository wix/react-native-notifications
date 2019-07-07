#import "RNNotificationsStore.h"

@implementation RNNotificationsStore {
    NSMutableDictionary* _actionCompletionHandlers;
}

- (instancetype)init {
    self = [super init];
    _actionCompletionHandlers = [NSMutableDictionary new];
    return self;
}

- (void)setCompletionHandler:(void (^)())completionHandler withCompletionKey:(NSString *)completionKey {
    _actionCompletionHandlers[completionKey] = completionHandler;
}

- (void)completeAction:(NSString *)completionKey {
    void (^completionHandler)() = (void (^)())[_actionCompletionHandlers valueForKey:completionKey];
    if (completionHandler) {
        completionHandler();
        [_actionCompletionHandlers removeObjectForKey:completionKey];
    }
}
@end
