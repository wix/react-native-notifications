#import "RNNotificationEventHandler.h"
#import "RNNotificationsBridgeQueue.h"
#import "RNEventEmitter.h"

@implementation RNNotificationEventHandler

- (void)didReceiveForegroundPayload:(NSDictionary *)payload {
//    if ([RNNotificationsBridgeQueue sharedInstance].jsIsReady == YES) {
        [RNEventEmitter sendEvent:NotificationReceivedForeground body:payload];
//    }
}

- (void)didOpenNotificationPayload:(NSDictionary *)payload {
//    if ([RNNotificationsBridgeQueue sharedInstance].jsIsReady == YES) {
        [RNEventEmitter sendEvent:NotificationOpened body:payload];
//    }
}

- (void)handleActionWithIdentifier:(NSString *)identifier forPayload:(NSDictionary *)payload withResponse:(NSString *)response completionHandler:(void (^)())completionHandler {
    [self emitNotificationActionForIdentifier:identifier response:response userInfo:payload completionHandler:completionHandler];
}

- (void)emitNotificationActionForIdentifier:(NSString *)identifier response:(NSString *)response userInfo:(NSDictionary *)userInfo  completionHandler:(void (^)())completionHandler {
    NSString* completionKey = [NSString stringWithFormat:@"%@.%@", identifier, [NSString stringWithFormat:@"%ldd", (long)[[NSDate date] timeIntervalSince1970]]];
    NSMutableDictionary* info = [[NSMutableDictionary alloc] initWithDictionary:@{ @"identifier": identifier, @"completionKey": completionKey }];
    
    if (response != NULL) {
        info[@"text"] = response;
    }
    
    // add notification custom data
    if (userInfo != NULL) {
        info[@"notification"] = userInfo;
    }
    
    // Emit event to the queue (in order to store the completion handler). if JS thread is ready, post it also to the notification center (to the bridge).
    [[RNNotificationsBridgeQueue sharedInstance] postAction:info withCompletionKey:completionKey andCompletionHandler:completionHandler];
    
    //    if ([RNNotificationsBridgeQueue sharedInstance].jsIsReady == YES) {
    [RNEventEmitter sendEvent:NotificationActionReceived body:userInfo];
    //    }
}

@end
