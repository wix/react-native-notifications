#import <Foundation/Foundation.h>

@interface RNNotificationsBridgeQueue : NSObject

@property (nonatomic, retain) NSDictionary* lastAction;
@property (nonatomic, copy) void (^lastCompletionHandler)();

+ (nonnull instancetype)sharedInstance;

@end