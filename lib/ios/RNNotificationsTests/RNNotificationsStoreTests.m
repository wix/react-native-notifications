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
    __block BOOL blockInvoked = NO;
    void (^testBlock)(void) = ^void() {
        blockInvoked = YES;
    };
    [_store setActionCompletionHandler:testBlock withCompletionKey:@"actionTestBlock"];
    [_store completeAction:@"actionTestBlock"];
    XCTAssertTrue(blockInvoked);
}

- (void)testCompleteAction_ShouldRemoveBlock {
    __block BOOL blockInvoked = NO;
    void (^testBlock)(void) = ^void() {
        blockInvoked = YES;
    };
    [_store setActionCompletionHandler:testBlock withCompletionKey:@"actionTestBlock"];
    [_store completeAction:@"actionTestBlock"];
    XCTAssertNil([_store getActionCompletionHandler:@"actionTestBlock"]);
}


- (void)testSetPersentationCompletionHandler_ShouldStoreBlock {
    void (^testBlock)(UNNotificationPresentationOptions) = ^void(UNNotificationPresentationOptions options) {};
    [_store setPresentationCompletionHandler:testBlock withCompletionKey:@"presentationTestBlock"];
    XCTAssertEqual(testBlock, [_store getPresentationCompletionHandler:@"presentationTestBlock"]);
}

- (void)testCompletePresentation_ShouldInvokeBlockWithParams {
    __block UNNotificationPresentationOptions presentationOptions;
    void (^testBlock)(UNNotificationPresentationOptions) = ^void(UNNotificationPresentationOptions options) {
        presentationOptions = options;
    };
    [_store setPresentationCompletionHandler:testBlock withCompletionKey:@"presentationTestBlock"];
    [_store completePresentation:@"presentationTestBlock" withPresentationOptions:UNNotificationPresentationOptionAlert];
    XCTAssertEqual(presentationOptions, UNNotificationPresentationOptionAlert);
}

- (void)testCompletePresentation_ShouldRemoveBlock {
    __block UNNotificationPresentationOptions presentationOptions;
    void (^testBlock)(UNNotificationPresentationOptions) = ^void(UNNotificationPresentationOptions options) {
        presentationOptions = options;
    };
    [_store setPresentationCompletionHandler:testBlock withCompletionKey:@"presentationTestBlock"];
    [_store completePresentation:@"presentationTestBlock" withPresentationOptions:UNNotificationPresentationOptionAlert];
    XCTAssertNil([_store getPresentationCompletionHandler:@"presentationTestBlock"]);
}


@end
