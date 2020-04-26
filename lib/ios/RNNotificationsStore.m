#import "RNNotificationsStore.h"

@implementation RNNotificationsStore
NSMutableDictionary* _actionCompletionHandlers;
NSMutableDictionary* _presentationCompletionHandlers;
NSMutableDictionary* _backgroundActionCompletionHandlers;

+ (instancetype)sharedInstance {
    static RNNotificationsStore *sharedInstance = nil;
    static dispatch_once_t onceToken;
    
    dispatch_once(&onceToken, ^{
        sharedInstance = [[RNNotificationsStore alloc] init];
    });
    return sharedInstance;
}

- (instancetype)init {
    self = [super init];
    _actionCompletionHandlers = [NSMutableDictionary new];
    _presentationCompletionHandlers = [NSMutableDictionary new];
    _backgroundActionCompletionHandlers = [NSMutableDictionary new];
    return self;
}

- (void)setActionCompletionHandler:(void (^)(void))completionHandler withCompletionKey:(NSString *)completionKey {
    _actionCompletionHandlers[completionKey] = completionHandler;
}

- (void)setPresentationCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler withCompletionKey:(NSString *)completionKey {
    _presentationCompletionHandlers[completionKey] = completionHandler;
}

- (void)setBackgroundActionCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler withCompletionKey:(NSString *)completionKey {
    _backgroundActionCompletionHandlers[completionKey] = completionHandler;
}

- (void (^)(void))getActionCompletionHandler:(NSString *)key {
    return _actionCompletionHandlers[key];
}

- (void (^)(UNNotificationPresentationOptions))getPresentationCompletionHandler:(NSString *)key {
    return _presentationCompletionHandlers[key];
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
        [_presentationCompletionHandlers removeObjectForKey:completionKey];
    }
}

- (void)completeBackgroundAction:(NSString *)completionKey withBackgroundFetchResult:(UIBackgroundFetchResult)backgroundFetchResult {
    void (^completionHandler)() = (void (^)(UIBackgroundFetchResult))[_backgroundActionCompletionHandlers valueForKey:completionKey];
    if (completionHandler) {
        completionHandler(backgroundFetchResult);
        [_backgroundActionCompletionHandlers removeObjectForKey:completionKey];
    }
}

@end
