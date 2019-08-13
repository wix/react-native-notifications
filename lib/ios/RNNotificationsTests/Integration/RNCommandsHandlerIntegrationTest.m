#import <XCTest/XCTest.h>
#import <OCMock/OCMock.h>
#import <objc/runtime.h>
#import "RNCommandsHandler.h"
#import "RNNotificationsStore.h"

@interface RNCommandsHandlerIntegrationTest : XCTestCase
@property (nonatomic, retain) RNCommandsHandler* uut;
@property (nonatomic, retain) id notificationCenter;
@property (nonatomic, retain) id mockUserNotifications;
@end

@implementation RNCommandsHandlerIntegrationTest

- (void)setUp {
    _mockUserNotifications = [OCMockObject mockForProtocol:[self getMockUserNotificationCenterProtocol]];
    id notificationCenterMock = OCMClassMock([UNUserNotificationCenter class]);
    OCMStub(ClassMethod([notificationCenterMock currentNotificationCenter])).andReturn(_mockUserNotifications);
    
    UIApplication* sharedApplication = [OCMockObject mockForClass:[UIApplication class]];
    id mockedApplicationClass = OCMClassMock([UIApplication class]);
    OCMStub(ClassMethod([mockedApplicationClass sharedApplication])).andReturn(sharedApplication);
    
    _uut = [RNCommandsHandler new];
    _notificationCenter = [UNUserNotificationCenter currentNotificationCenter];
}

- (void)testRequestPermissions_userAuthorizedPermissions {
    UNAuthorizationOptions authOptions = (UNAuthorizationOptionBadge | UNAuthorizationOptionSound | UNAuthorizationOptionAlert);
    UNNotificationSettings* settings = [UNNotificationSettings new];
    [settings setValue:@(UNAuthorizationStatusAuthorized) forKey:@"authorizationStatus"];

    [[_notificationCenter expect] requestAuthorizationWithOptions:authOptions completionHandler:[OCMArg invokeBlockWithArgs:@(YES), [NSNull null], nil]];
    [[_notificationCenter expect] getNotificationSettingsWithCompletionHandler:[OCMArg invokeBlockWithArgs:settings, nil]];
    [[(id)[UIApplication sharedApplication] expect] registerForRemoteNotifications];
    
    [_uut requestPermissions];
    [_notificationCenter verify];
}

- (void)testRequestPermissions_userDeniedPermissions {
    UNAuthorizationOptions authOptions = (UNAuthorizationOptionBadge | UNAuthorizationOptionSound | UNAuthorizationOptionAlert);
    UNNotificationSettings* settings = [UNNotificationSettings new];
    [settings setValue:@(UNAuthorizationStatusDenied) forKey:@"authorizationStatus"];
    
    [[_notificationCenter expect] requestAuthorizationWithOptions:authOptions completionHandler:[OCMArg invokeBlockWithArgs:@(YES), [NSNull null], nil]];
    [[_notificationCenter expect] getNotificationSettingsWithCompletionHandler:[OCMArg invokeBlockWithArgs:settings, nil]];
    [[(id)[UIApplication sharedApplication] reject] registerForRemoteNotifications];
    
    [_uut requestPermissions];
    [_notificationCenter verify];
}

- (void)testSetCategories_shouldSetCategories {
    NSArray* json = @[@{@"identifier": @"categoryId", @"actions": @[@{@"identifier" : @"actionId", @"activationMode": @"foreground"}]}];
    [[_notificationCenter expect] setNotificationCategories:[OCMArg checkWithBlock:^BOOL(NSMutableSet<UNNotificationCategory *>* categories) {
        UNNotificationCategory* category = categories.allObjects.firstObject;
        UNNotificationAction* action = category.actions.firstObject;
        return ([category.identifier isEqualToString:@"categoryId"] &&
                [action.identifier isEqualToString:@"actionId"] &&
                action.options == UNNotificationActionOptionForeground);
    }]];
    
    [_uut setCategories:json];
    [_notificationCenter verify];
}

- (void)testGetInitialNotification {
    NSDictionary* initialNotification = @{};
    [[RNNotificationsStore sharedInstance] setInitialNotification:initialNotification];
    
    [self.uut getInitialNotification:^(id result) {
        XCTAssertEqual(result, initialNotification);
    } reject:^(NSString *code, NSString *message, NSError *error) {
        
    }];
}


- (Protocol *)getMockUserNotificationCenterProtocol {
    Protocol *aProtocol = objc_getProtocol("MockUserNotificationCenter");
    if (!aProtocol) {
        aProtocol = objc_allocateProtocol("MockUserNotificationCenter");
        unsigned int methodCount = 0;
        Method *methods = class_copyMethodList([UNUserNotificationCenter class], &methodCount);
        
        for (unsigned int i = 0; i < methodCount; i++) {
            Method method = methods[i];
            protocol_addMethodDescription(aProtocol, method_getName(method), method_getTypeEncoding(method), YES, YES);
        }
        
        free(methods);
        objc_registerProtocol(aProtocol);
    }
    
    return aProtocol;
}

@end
