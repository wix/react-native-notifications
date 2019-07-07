#import <Foundation/Foundation.h>
@import UserNotifications;

@interface RNNotificationEventHandler : NSObject

- (void)didReceiveForegroundPayload:(NSDictionary *)payload;
- (void)didOpenNotificationPayload:(NSDictionary *)payload;
- (void)handleActionWithIdentifier:(NSString *)identifier forPayload:(NSDictionary *)payload withResponse:(NSString *)response completionHandler:(void (^)())completionHandler;

@end
