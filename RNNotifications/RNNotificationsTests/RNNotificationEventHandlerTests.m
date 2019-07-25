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


@end
