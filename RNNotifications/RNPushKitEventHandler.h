#import <Foundation/Foundation.h>
#import "RNNotificationEventHandler.h"

@interface RNPushKitEventHandler : RNNotificationEventHandler

- (void)registeredWithToken:(NSString *)token;

- (void)didReceiveIncomingPushWithPayload:(NSDictionary *)payload;

@end
