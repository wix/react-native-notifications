#import <XCTest/XCTest.h>
#import <OCMock/OCMock.h>
#import "RNNotificationsStore.h"

@interface RNNotificationsStoreTests : XCTestCase
@property (nonatomic, retain) RNNotificationsStore* store;
@end

@implementation RNNotificationsStoreTests

- (void)setUp {
    _store = [RNNotificationsStore sharedInstance];
}

- (void)testSetActionCompletionHandler_ShouldStoreBlock {
    void (^testBlock)(void) = ^void() {};
    [_store setActionCompletionHandler:testBlock withCompletionKey:@"actionTestBlock"];
    XCTAssertEqual(testBlock, [_store getActionCompletionHandler:@"actionTestBlock"]);
}

- (void)testCompleteAction_ShouldInvokeBlock {
    XCTestExpectation *expectation = [self expectationWithDescription:@"Testing Async Method"];
    void (^testBlock)(void) = ^void() {
      [expectation fulfill];
    };
    [_store setActionCompletionHandler:testBlock withCompletionKey:@"actionTestBlock"];
    [_store completeAction:@"actionTestBlock"];
    [self waitForExpectationsWithTimeout:1 handler:nil];
}

- (void)testCompleteAction_ShouldRemoveBlock {
    XCTestExpectation *expectation = [self expectationWithDescription:@"Testing Async Method"];
    void (^testBlock)(void) = ^void() {
        [expectation fulfill];
    };
    [_store setActionCompletionHandler:testBlock withCompletionKey:@"actionTestBlock"];
    [_store completeAction:@"actionTestBlock"];
    [self waitForExpectationsWithTimeout:1 handler:nil];
}


- (void)testSetPersentationCompletionHandler_ShouldStoreBlock {
    void (^testBlock)(UNNotificationPresentationOptions) = ^void(UNNotificationPresentationOptions options) {};
    [_store setPresentationCompletionHandler:testBlock withCompletionKey:@"presentationTestBlock"];
    XCTAssertEqual(testBlock, [_store getPresentationCompletionHandler:@"presentationTestBlock"]);
}

- (void)testCompletePresentation_ShouldInvokeBlockWithParams {
    XCTestExpectation *expectation = [self expectationWithDescription:@"Testing Async Method"];
    __block UNNotificationPresentationOptions presentationOptions;
    void (^testBlock)(UNNotificationPresentationOptions) = ^void(UNNotificationPresentationOptions options) {
        presentationOptions = options;
        [expectation fulfill];
    };
    [_store setPresentationCompletionHandler:testBlock withCompletionKey:@"presentationTestBlock"];
    [_store completePresentation:@"presentationTestBlock" withPresentationOptions:UNNotificationPresentationOptionAlert];
    [self waitForExpectationsWithTimeout:1 handler:nil];
    XCTAssertEqual(presentationOptions, UNNotificationPresentationOptionAlert);
}

- (void)testCompletePresentation_ShouldRemoveBlock {
    XCTestExpectation *expectation = [self expectationWithDescription:@"Testing Async Method"];
    __block UNNotificationPresentationOptions presentationOptions;
    void (^testBlock)(UNNotificationPresentationOptions) = ^void(UNNotificationPresentationOptions options) {
        presentationOptions = options;
        [expectation fulfill];
    };
    [_store setPresentationCompletionHandler:testBlock withCompletionKey:@"presentationTestBlock"];
    [_store completePresentation:@"presentationTestBlock" withPresentationOptions:UNNotificationPresentationOptionAlert];
    [self waitForExpectationsWithTimeout:1 handler:nil];
    XCTAssertNil([_store getPresentationCompletionHandler:@"presentationTestBlock"]);
}


@end
