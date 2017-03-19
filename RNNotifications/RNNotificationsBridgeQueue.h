#import <Foundation/Foundation.h>

@interface RNNotificationsBridgeQueue : NSObject

@property BOOL jsIsReady;
@property (nullable) NSDictionary* openedRemoteNotification;
@property (nullable) NSDictionary* openedLocalNotification;

// Fix nullibility errors in Xcode7+ https://developer.apple.com/swift/blog/?id=25
+ (nonnull instancetype)sharedInstance;

- (void)postAction:(nonnull NSDictionary *)action withCompletionKey:(nonnull NSString *)completionKey andCompletionHandler:(nullable void (^)())completionHandler;
- (void)postNotification:(nonnull NSDictionary *)notification;

- (void)consumeActionsQueue:(nullable void (^)(NSDictionary * _Nonnull))block;
- (void)consumeNotificationsQueue:(nullable void (^)(NSDictionary * _Nonnull))block;

- (void)completeAction:(nonnull NSString *)completionKey;
@end