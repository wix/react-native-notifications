#import <XCTest/XCTest.h>
#import <OCMock/OCMock.h>
#import "RNNotificationEventHandler.h"
#import "RNNotificationUtils.h"

@interface RNNotificationEventHandlerTests : XCTestCase
@property (nonatomic, retain) RNNotificationEventHandler* uut;
@property (nonatomic, retain) RNNotificationsStore* store;
@property (nonatomic, retain) id mockedNotificationCenter;
@end

@implementation RNNotificationEventHandlerTests

- (void)setUp {
    _store = [RNNotificationsStore sharedInstance];
    _uut = [[RNNotificationEventHandler alloc] initWithStore:_store];

    _mockedNotificationCenter = [OCMockObject partialMockForObject:[NSNotificationCenter new]];
    [[[[[OCMockObject niceMockForClass:NSNotificationCenter.class] stub] classMethod] andReturn:_mockedNotificationCenter] defaultCenter];
}

- (void)testDidRegisterForRemoteNotifications_ShouldEmitEventWithDeviceTokenDataString {
    NSData* deviceToken = [@"740f4707 bebcf74f 9b7c25d4 8e335894 5f6aa01d a5ddb387 462c7eaf 61bb78ad" dataUsingEncoding:NSUTF32StringEncoding];
    [[_mockedNotificationCenter expect] postNotificationName:RNRegistered object:[OCMArg any] userInfo:[OCMArg checkWithBlock:^BOOL(id obj) {
        return ([[obj objectForKey:@"deviceToken"] isEqualToString:[RNNotificationUtils deviceTokenToString:deviceToken]]);
    }]];
    [_uut didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
    [_mockedNotificationCenter verify];
}

- (void)testDidRegisterForRemoteNotifications_ShouldEmitEventWithDeviceTokenString {
    NSString* deviceToken = @"740f4707 bebcf74f 9b7c25d4 8e335894 5f6aa01d a5ddb387 462c7eaf 61bb78ad";
    [[_mockedNotificationCenter expect] postNotificationName:RNRegistered object:[OCMArg any] userInfo:[OCMArg checkWithBlock:^BOOL(id obj) {
        return ([[obj objectForKey:@"deviceToken"] isEqualToString:deviceToken]);
    }]];
    [_uut didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
    [_mockedNotificationCenter verify];
}

- (void)testDidFailToRegisterForRemoteNotifications_ShouldEmitEvent {
    NSError* error = [NSError errorWithDomain:@"domain" code:1 userInfo:nil];
    [[_mockedNotificationCenter expect] postNotificationName:RNRegistrationFailed object:[OCMArg any] userInfo:[OCMArg checkWithBlock:^BOOL(id obj) {
        return ([[obj valueForKey:@"code"] isEqualToNumber:@(1)] &&
                [[obj valueForKey:@"domain"] isEqualToString:@"domain"]);
    }]];
    
    [_uut didFailToRegisterForRemoteNotificationsWithError:error];
    [_mockedNotificationCenter verify];
}

- (void)testDidReceiveForegroundNotification_ShouldSaveCompletionBlockToStore {
    UNNotification* notification = [self createNotificationWithIdentifier:@"id" andUserInfo:@{}];
    void (^testBlock)(UNNotificationPresentationOptions) = ^void(UNNotificationPresentationOptions options) {};
    
    [_uut didReceiveForegroundNotification:notification withCompletionHandler:testBlock];
    XCTAssertEqual([_store getPresentationCompletionHandler:@"id"], testBlock);
}

- (void)testDidReceiveForegroundNotification_ShouldEmitEvent {
    UNNotification* notification = [self createNotificationWithIdentifier:@"id" andUserInfo:@{@"extraKey": @"extraValue"}];
    void (^testBlock)(UNNotificationPresentationOptions) = ^void(UNNotificationPresentationOptions options) {};
    
    [[_mockedNotificationCenter expect] postNotificationName:RNNotificationReceived object:[OCMArg any] userInfo:[OCMArg checkWithBlock:^BOOL(id obj) {
        return ([[obj valueForKey:@"identifier"] isEqualToString:@"id"] &&
                [[obj valueForKey:@"extraKey"] isEqualToString:@"extraValue"]);
    }]];
    [_uut didReceiveForegroundNotification:notification withCompletionHandler:testBlock];
    [_mockedNotificationCenter verify];
}

- (void)testDidReceiveNotificationResponse_ShouldEmitEvent {
    UNNotification* notification = [self createNotificationWithIdentifier:@"id" andUserInfo:@{@"extraKey": @"extraValue"}];
    UNNotificationResponse* response = [self createNotificationResponseWithIdentifier:@"actionId" andNotification:notification];
    void (^testBlock)(void) = ^void() {};
    
    [[_mockedNotificationCenter expect] postNotificationName:RNNotificationOpened object:[OCMArg any] userInfo:[OCMArg checkWithBlock:^BOOL(id response) {
        NSDictionary* notification = response[@"notification"];
        NSDictionary* action = response[@"action"];
        return ([[notification valueForKey:@"identifier"] isEqualToString:@"id"] &&
                [[notification valueForKey:@"extraKey"] isEqualToString:@"extraValue"] && [action[@"identifier"] isEqualToString:@"actionId"]);
    }]];
    [_uut didReceiveNotificationResponse:response completionHandler:testBlock];
    [_mockedNotificationCenter verify];
}

- (void)testDidReceiveNotificationResponse_ShouldSaveCompletionBlockToStore {
    UNNotification* notification = [self createNotificationWithIdentifier:@"id" andUserInfo:@{@"extraKey": @"extraValue"}];
    UNNotificationResponse* response = [self createNotificationResponseWithIdentifier:@"id" andNotification:notification];
    void (^testBlock)(void) = ^void() {};
    
    [_uut didReceiveNotificationResponse:response completionHandler:testBlock];
    XCTAssertEqual([_store getActionCompletionHandler:@"id"], testBlock);
}

- (UNNotification *)createNotificationWithIdentifier:(NSString *)identifier andUserInfo:(NSDictionary *)userInfo {
    UNNotification* notification = [OCMockObject niceMockForClass:[UNNotification class]];
    UNNotificationContent* content = [OCMockObject niceMockForClass:[UNNotificationContent class]];
    OCMStub([content userInfo]).andReturn(userInfo);
    UNNotificationRequest* request = [OCMockObject partialMockForObject:[UNNotificationRequest requestWithIdentifier:identifier content:content trigger:nil]];
    OCMStub(notification.request).andReturn(request);
    OCMStub(request.content).andReturn(content);
    
    return notification;
}

- (UNNotificationResponse *)createNotificationResponseWithIdentifier:(NSString *)identifier andNotification:(UNNotification *)notification {
    UNNotificationResponse* notificationResponse = [OCMockObject niceMockForClass:[UNNotificationResponse class]];
    OCMStub(notificationResponse.actionIdentifier).andReturn(identifier);
    OCMStub(notificationResponse.notification).andReturn(notification);
    
    return notificationResponse;
}



@end
