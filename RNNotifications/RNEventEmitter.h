#import <React/RCTEventEmitter.h>

static NSString* const RNRegistered                     = @"remoteNotificationsRegistered";
static NSString* const RNRegistrationFailed             = @"remoteNotificationsRegistrationFailed";
static NSString* const RNPushKitRegistered              = @"pushKitRegistered";
static NSString* const RNNotificationReceivedForeground = @"notificationReceivedForeground";
static NSString* const RNNotificationOpened             = @"notificationOpened";
static NSString* const RNPushKitNotificationReceived    = @"pushKitNotificationReceived";


@interface RNEventEmitter : RCTEventEmitter <RCTBridgeModule>

+ (void)sendEvent:(NSString *)event body:(NSDictionary *)body;

@end
