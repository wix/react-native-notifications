#import "RCTEventEmitter.h"

static NSString* const RNRegistered                     = @"notificationsRegistered";
static NSString* const RNRegistrationFailed             = @"notificationsRegistrationFailed";
static NSString* const RNPushKitRegistered              = @"pushKitRegistered";
static NSString* const RNNotificationReceivedForeground = @"notificationReceivedForeground";
static NSString* const RNNotificationReceivedBackground = @"notificationReceivedBackground";
static NSString* const RNNotificationOpened             = @"notificationOpened";
static NSString* const RNActionTriggered                = @"notificationActionTriggered";


@interface RNEventEmitter : RCTEventEmitter

+ (instancetype)sharedInstance;

+ (void)sendEvent:(NSString *)event body:(NSDictionary *)body;

@end
