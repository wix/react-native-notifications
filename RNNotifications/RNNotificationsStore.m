#import "RNNotificationsStore.h"

@implementation RNNotificationsStore {
    NSMutableDictionary* actionCompletionHandlers;
}

- (instancetype)init {
    actionCompletionHandlers = [NSMutableDictionary new];
    
    return self;
}

@end
