#import "RCTEventEmitter.h"

static NSString* const Registered                = @"remoteNotificationsRegistered";
static NSString* const RegistrationFailed            = @"remoteNotificationsRegistrationFailed";
static NSString* const PushKitRegistered        = @"pushKitRegistered";
static NSString* const NotificationReceivedForeground        = @"notificationReceivedForeground";
static NSString* const NotificationReceivedBackground    = @"notificationReceivedBackground";
static NSString* const NotificationOpened    = @"notificationOpened";
static NSString* const NotificationActionReceived            = @"notificationActionReceived";

@interface RNEventEmitter : RCTEventEmitter

+ (instancetype)sharedInstance;

+ (void)sendEvent:(NSString *)event body:(NSDictionary *)body;

@end
