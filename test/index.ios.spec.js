
describe.only('NotificationsIOS', () => {
  let deviceEvents = [
    'pushKitRegistered',
    'remoteNotificationsRegistered',
    'remoteNotificationsRegistrationFailed',
    'notificationReceivedForeground',
    'notificationReceivedBackground',
    'notificationOpened'
  ];

  let NotificationsIOS, NotificationAction, NotificationCategory;
  let constantGuid = 'some-random-uuid';
  let identifiers = ['some-random-uuid', 'other-random-uuid'];
  let someHandler = () => {};
  let nativeAppAddEventListener;
  let deviceAddEventListener;
  let deviceRemoveEventListener;
  let nativeAppRemoveEventListener;
  let nativeModule;

  beforeEach(() => {
    deviceRemoveEventListener = jest.fn();
    nativeAppRemoveEventListener = jest.fn();
    nativeAppAddEventListener = jest.fn(() => {
      return {
        remove: nativeAppRemoveEventListener
      };
    });

    deviceAddEventListener = jest.fn(() => {
      return {
        remove: deviceRemoveEventListener
      };
    });
    const RNBridgeModule = {
      requestPermissionsWithCategories: jest.fn(),
      abandonPermissions: jest.fn(),
      registerPushKit: jest.fn(),
      backgroundTimeRemaining: jest.fn(),
      consumeBackgroundQueue: jest.fn(),
      localNotification: jest.fn(),
      cancelLocalNotification: jest.fn(),
      cancelAllLocalNotifications: jest.fn(),
      getBadgesCount: jest.fn(),
      setBadgesCount: jest.fn(),
      isRegisteredForRemoteNotifications: jest.fn(),
      checkPermissions: jest.fn(),
      removeAllDeliveredNotifications: jest.fn(),
      removeDeliveredNotifications: jest.fn(),
      getDeliveredNotifications: jest.fn()
    };

    jest.mock('react-native', () => {
      return {
        NativeModules: {
          RNBridgeModule
        },
        NativeAppEventEmitter: {
          addListener: nativeAppAddEventListener
        },
        DeviceEventEmitter: {
          addListener: deviceAddEventListener
        }
      };
    });
    nativeModule = RNBridgeModule;

    jest.mock('uuid', () => {
      return {
        v4: () => constantGuid
      };
    });

    let libUnderTest = require('../lib/src/index.ios');
    NotificationsIOS = libUnderTest.default;
    NotificationAction = libUnderTest.NotificationAction;
    NotificationCategory = libUnderTest.NotificationCategory;
  });

  describe('Add Event Listener', () => {
    deviceEvents.forEach(event => {
      it(`should subscribe the given handler to device event: ${event}`, () => {
        NotificationsIOS.addEventListener(event, someHandler);

        expect(deviceAddEventListener).toHaveBeenCalledWith(event, expect.any(Function));
      });
    });

    it('should not subscribe to unknown device events', () => {
      NotificationsIOS.addEventListener('someUnsupportedEvent', someHandler);

      expect(deviceAddEventListener).toHaveBeenCalledTimes(0);
    });
  });

  describe('Remove Event Listener', () => {
    deviceEvents.forEach(event => {
      it(`should unsubscribe the given handler from device event: ${event}`, () => {
        NotificationsIOS.addEventListener(event, someHandler);
        NotificationsIOS.removeEventListener(event, someHandler);

        expect(deviceRemoveEventListener).toHaveBeenCalledTimes(1);
      });
    });

    it('should not unsubscribe to unknown device events', () => {
      let someUnsupportedEvent = 'someUnsupportedEvent';
      NotificationsIOS.addEventListener(someUnsupportedEvent, someHandler);
      NotificationsIOS.removeEventListener(someUnsupportedEvent, someHandler);

      expect(deviceRemoveEventListener).toHaveBeenCalledTimes(0);
    });
  });

  describe('Notification actions handling', () => {
    let someAction, someCategory;

    let actionOpts = {
      activationMode: 'foreground',
      title: 'someAction',
      behavior: 'default',
      identifier: 'SOME_ACTION'
    };

    beforeEach(() => {
      someAction = new NotificationAction(actionOpts, () => {});

      someCategory = new NotificationCategory({
        identifier: 'SOME_CATEGORY',
        actions: [someAction],
        context: 'default'
      });
    });

    describe('register push notifications', () => {
      it('should call native request permissions with array of categories', () => {
        NotificationsIOS.requestPermissions([someCategory]);

        expect(nativeModule.requestPermissionsWithCategories).toHaveBeenCalledWith([{
          identifier: 'SOME_CATEGORY',
          actions: [actionOpts],
          context: 'default'
        }]);
      });

      it('should call native request permissions with empty array if no categories specified', () => {
        NotificationsIOS.requestPermissions();

        expect(nativeModule.requestPermissionsWithCategories).toHaveBeenCalledWith([]);
      });

      it('should subscribe to notificationActionReceived event once, with a single event handler', () => {
        NotificationsIOS.requestPermissions([someCategory]);

        expect(nativeAppAddEventListener).toHaveBeenCalledTimes(1);
        expect(nativeAppAddEventListener).toHaveBeenCalledWith('notificationActionReceived', expect.any(Function));
      });
    });

    describe('reset categories', () => {
      it('should remove notificationActionReceived event handler', () => {
        NotificationsIOS.requestPermissions([someCategory]);
        NotificationsIOS.resetCategories();

        expect(nativeAppRemoveEventListener).toHaveBeenCalledTimes(1);
      });
    });

    describe('get badges count', () => {
      it('should call native getBadgesCount', () => {
        const callback = (count) => console.log(count);
        NotificationsIOS.getBadgesCount(callback);

        expect(nativeModule.getBadgesCount).toHaveBeenCalledWith(callback);
      });
    });

    describe('set badges count', () => {
      it('should call native setBadgesCount', () => {
        NotificationsIOS.setBadgesCount(44);

        expect(nativeModule.setBadgesCount).toHaveBeenCalledWith(44);
      });
    });

  });

  describe('register push kit for background notifications', function () {
    it('should call native register push kit method', function () {
      NotificationsIOS.registerPushKit();

      expect(nativeModule.registerPushKit).toHaveBeenCalledTimes(1);
    });
  });

  describe('Abandon push notifications permissions', () => {
    it('should call native abandon permissions method', () => {
      NotificationsIOS.abandonPermissions();

      expect(nativeModule.abandonPermissions).toHaveBeenCalledTimes(1);
    });
  });

  describe('Get background remaining time', () => {
    it('should call native background remaining time method', () => {
      let someCallback = () => {};

      NotificationsIOS.backgroundTimeRemaining(someCallback);

      expect(nativeModule.backgroundTimeRemaining).toHaveBeenCalledWith(someCallback);
    });
  });

  describe('Dispatch local notification', () => {
    it('should return generated notification guid', () => {
      expect(NotificationsIOS.localNotification({})).toEqual(constantGuid);
    });

    it('should call native local notification method with generated notification guid and notification object', () => {
      let someLocalNotification = {
        alertBody: 'some body',
        alertTitle: 'some title',
        alertAction: 'some action',
        soundName: 'sound',
        category: 'SOME_CATEGORY',
        userInfo: {
          'key': 'value'
        }
      };

      NotificationsIOS.localNotification(someLocalNotification);

      expect(nativeModule.localNotification).toHaveBeenCalledWith(someLocalNotification, constantGuid);
    });
  });

  describe('Cancel local notification', () => {
    it('should call native cancel local notification method', () => {
      NotificationsIOS.cancelLocalNotification(constantGuid);

      expect(nativeModule.cancelLocalNotification).toHaveBeenCalledWith(constantGuid);
    });
  });

  describe('Cancel all local notifications', () => {
    it('should call native cancel all local notifications method', () => {
      NotificationsIOS.cancelAllLocalNotifications();

      expect(nativeModule.cancelAllLocalNotifications).toHaveBeenCalledWith();
    });
  });

  describe('Is registered for remote notifications ', () => {
    it('should call native is registered for remote notifications', () => {
      NotificationsIOS.isRegisteredForRemoteNotifications();
      expect(nativeModule.isRegisteredForRemoteNotifications).toHaveBeenCalledWith();

    });
  });

  describe('Check permissions ', () => {
    it('should call native check permissions', () => {
      NotificationsIOS.checkPermissions();
      expect(nativeModule.checkPermissions).toHaveBeenCalledWith();

    });
  });

  describe('Remove all delivered notifications', () => {
    it('should call native remove all delivered notifications method', () => {
      NotificationsIOS.removeAllDeliveredNotifications();

      expect(nativeModule.removeAllDeliveredNotifications).toHaveBeenCalledWith();
    });
  });

  describe('Remove delivered notifications', () => {
    it('should call native remove delivered notifications method', () => {
      NotificationsIOS.removeDeliveredNotifications(identifiers);

      expect(nativeModule.removeDeliveredNotifications).toHaveBeenCalledWith(identifiers);
    });
  });

  describe('Get delivered notifications', () => {
    it('should call native get delivered notifications method', () => {
      const callback = (notifications) => console.log(notifications);
      NotificationsIOS.getDeliveredNotifications(callback);

      expect(nativeModule.getDeliveredNotifications).toHaveBeenCalledWith(callback);
    });
  });
});
