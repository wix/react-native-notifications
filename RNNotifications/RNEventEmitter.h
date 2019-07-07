#import "RCTEventEmitter.h"

static NSString* const RNRegistered                = @"RNNotificationsRegistered";
static NSString* const RNRegistrationFailed            = @"RNNotificationsRegistrationFailed";
static NSString* const RNPushKitRegistered        = @"RNPushKitRegistered";
static NSString* const RNNotificationReceivedForeground        = @"RNNotificationReceivedForeground";
static NSString* const RNNotificationReceivedBackground    = @"RNNotificationReceivedBackground";
static NSString* const RNNotificationOpened    = @"RNNotificationOpened";
static NSString* const RNActionTriggered            = @"RNNotificationActionTriggered";


@interface RNEventEmitter : RCTEventEmitter

+ (instancetype)sharedInstance;

+ (void)sendEvent:(NSString *)event body:(NSDictionary *)body;

@end
