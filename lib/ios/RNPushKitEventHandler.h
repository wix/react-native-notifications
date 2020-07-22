#import <Foundation/Foundation.h>
#import "RNNotificationEventHandler.h"

@interface RNPushKitEventHandler : RNNotificationEventHandler

- (instancetype)initWithStore:(RNNotificationsStore *)store;

- (void)registeredWithToken:(NSString *)token;

- (void)didReceiveIncomingPushWithPayload:(NSDictionary *)payload withCompletionHandler:(void (^)(void))completion;

@end
