//
//  NRNNManager.m
//  NRNNOtifications
//
//  Created by Muhammad Abed El Razek on 09/01/2019.
//  Copyright © 2019 Wix. All rights reserved.
//

#import "RNNRouter.h"
#import "RNNotifications.h"
//RNNNotifications's router (delegater) :::  singleton which routes all the static, system functions delegate calls to RNNNotifications insatnce ; can't have and RNNNotifications instance from outside of it's class




@interface RNNRouter()

@property(nonatomic,strong) NSMutableArray* pendingDelegateCalls;

@end

@implementation RNNRouter

+ (nonnull instancetype)sharedInstance
{
    static RNNRouter* sharedInstance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        sharedInstance = [self new];
    });
    return sharedInstance;
}



- (instancetype)init
{
    self = [super init];
    if(self)
    {
        _pendingDelegateCalls = [NSMutableArray new];
        
    }
    return self;
}


- (void)setDelegate:(id<RNNRerouterDelegate,UNUserNotificationCenterDelegate>)delegate
{
    _delegate = delegate;
    
    while (self.pendingDelegateCalls.count > 0)
    {
        void(^block)(void) = _pendingDelegateCalls.lastObject;
        block();
        [_pendingDelegateCalls removeLastObject];
    }
    
    
}


/*
 ______           ______            _   _
 | ___ \          | ___ \          | | (_)
 | |_/ /___ ______| |_/ /___  _   _| |_ _ _ __   __ _
 |    // _ \______|    // _ \| | | | __| | '_ \ / _` |
 | |\ \  __/      | |\ \ (_) | |_| | |_| | | | | (_| |
 \_| \_\___|      \_| \_\___/ \__,_|\__|_|_| |_|\__, |
                                                 __/ |
                                                 |___/
 */
/////////////////////////////////////////////////////////////////
#pragma mark static calls for RNNNotifications rerouting purpous functions
////////////////////////////////////////////////////////////////
- (void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler
{
    void(^callLaterBlock)(void) = ^{
        [self->_delegate userNotificationCenter:center willPresentNotification:notification withCompletionHandler:completionHandler];
    };
    
    if(_delegate)
    {
        callLaterBlock();
    }
    else // //called and _delegate is not set yet, need to store to call later
    {
        [_pendingDelegateCalls insertObject:callLaterBlock atIndex:0];
    }
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void (^)(void))completionHandler
{
    void(^callLaterBlock)(void) = ^{
        [self->_delegate userNotificationCenter:center didReceiveNotificationResponse:response withCompletionHandler:completionHandler];
    };
    
    if(_delegate)
    {
        callLaterBlock();
    }
    else //called and _delegate is not set yet, need to store to call later
    {
        [_pendingDelegateCalls insertObject:callLaterBlock atIndex:0];
    }
}

- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
{
    if (self.delegate != nil)
    {
        [self.delegate application:application didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
    }
}

- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error
{
    if (self.delegate != nil)
    {
        [self.delegate application:application didFailToRegisterForRemoteNotificationsWithError:error];
    }
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler
{
    if (self.delegate != nil)
    {
        [self.delegate application:application didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];
    }
}


- (void)didUpdatePushCredentials:(PKPushCredentials *)credentials forType:(NSString *)type
{
    if(self.delegate != nil)
    {
        [self.delegate handlePushKitRegistered:@{@"pushKitToken": [RNNotifications deviceTokenToString:credentials.token]}];
    }
}

- (void)pushRegistry:(PKPushRegistry *)registry didReceiveIncomingPushWithPayload:(PKPushPayload *)payload forType:(NSString *)type
{
    if (self.delegate != nil)
    {
        [self.delegate application:nil didReceiveRemoteNotification:payload.dictionaryPayload fetchCompletionHandler:nil];
    }
}

@end
