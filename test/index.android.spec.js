describe('Notifications-Android', () => {
  let refreshTokenStub;
  let getInitialNotificationStub;
  let postLocalNotificationStub;
  let cancelLocalNotificationStub;
  let deviceEventEmitterListenerStub;
  let libUnderTest;

  beforeEach(() => {
    refreshTokenStub = jest.fn();
    getInitialNotificationStub = jest.fn();
    postLocalNotificationStub = jest.fn();
    cancelLocalNotificationStub = jest.fn();
    deviceEventEmitterListenerStub = jest.fn();

    jest.mock('react-native', () => {
      return {
        NativeModules: {
          WixRNNotifications: {
            refreshToken: refreshTokenStub,
            getInitialNotification: getInitialNotificationStub,
            postLocalNotification: postLocalNotificationStub,
            cancelLocalNotification: cancelLocalNotificationStub
          }
        },
        DeviceEventEmitter: {
          addListener: deviceEventEmitterListenerStub
        }
      };
    });
    libUnderTest = require('../lib/src/index.android');
  });

  describe('Registration token API', () => {
    it('should assign callback to native event upon listener registration', () => {
      expect(deviceEventEmitterListenerStub).toHaveBeenCalledTimes(0);
      const userListener = () => {};
      console.log(libUnderTest);
      libUnderTest.NotificationsAndroid.setRegistrationTokenUpdateListener(userListener);

      expect(deviceEventEmitterListenerStub).toHaveBeenCalledWith('remoteNotificationsRegistered', userListener);
      expect(deviceEventEmitterListenerStub).toHaveBeenCalledTimes(1);
    });

    it('should clear native event listener upon listener deregister', () => {
      expect(deviceEventEmitterListenerStub).toHaveBeenCalledTimes(0);
      const userListener = () => {};
      const nativeListener = {
        remove: jest.fn()
      };
      deviceEventEmitterListenerStub.mockReturnValueOnce(nativeListener);

      libUnderTest.NotificationsAndroid.setRegistrationTokenUpdateListener(userListener);
      libUnderTest.NotificationsAndroid.clearRegistrationTokenUpdateListener();

      expect(nativeListener.remove).toHaveBeenCalledTimes(1);
    });

    it('shouldn`t fail if deregister without registering', () => {
      libUnderTest.NotificationsAndroid.clearRegistrationTokenUpdateListener();

      expect(deviceEventEmitterListenerStub).toHaveBeenCalledTimes(0);
    });
  });

  describe('notification-opening API', () => {
    it('should assign callback to native event upon registration', () => {
      expect(deviceEventEmitterListenerStub).toHaveBeenCalledTimes(0);
      const userListenerStub = jest.fn();

      libUnderTest.NotificationsAndroid.setNotificationOpenedListener(userListenerStub);

      expect(deviceEventEmitterListenerStub).toHaveBeenCalledTimes(1);
      expect(deviceEventEmitterListenerStub).toHaveBeenCalledWith('notificationOpened', expect.any(Function));
    });

    it('should assign a wrapper-callback upon registration', () => {
      expect(deviceEventEmitterListenerStub).toHaveBeenCalledTimes(0);
      const userListenerStub = jest.fn();
      const notification = { foo: 'bar' };

      libUnderTest.NotificationsAndroid.setNotificationOpenedListener(userListenerStub);

      expect(userListenerStub).toHaveBeenCalledTimes(0);
      deviceEventEmitterListenerStub.mock.calls[0][1](notification);
      expect(userListenerStub).toHaveBeenCalledTimes(1);
      expect(userListenerStub.mock.calls[0][0].getData()).toEqual(notification);
    });

    it('should clear native event listener upon listener deregister', () => {
      expect(deviceEventEmitterListenerStub).toHaveBeenCalledTimes(0);
      const userListener = () => {};
      const nativeListener = {
        remove: jest.fn()
      };
      deviceEventEmitterListenerStub.mockReturnValueOnce(nativeListener);

      libUnderTest.NotificationsAndroid.setNotificationOpenedListener(userListener);
      libUnderTest.NotificationsAndroid.clearNotificationOpenedListener();

      expect(nativeListener.remove).toHaveBeenCalledTimes(1);
    });

    it('shouldnt fail if deregister without registering', () => {
      libUnderTest.NotificationsAndroid.clearNotificationOpenedListener();

      expect(deviceEventEmitterListenerStub).toHaveBeenCalledTimes(0);
    });
  });

  describe('notification-receive API', () => {
    it('should assign callback to native event upon registration', () => {
      expect(deviceEventEmitterListenerStub).toHaveBeenCalledTimes(0);
      const userListenerStub = jest.fn();

      libUnderTest.NotificationsAndroid.setNotificationReceivedListener(userListenerStub);

      expect(deviceEventEmitterListenerStub).toHaveBeenCalledTimes(1);
      expect(deviceEventEmitterListenerStub).toHaveBeenCalledWith('notificationReceived', expect.any(Function));
    });

    it('should assign a wrapper-callback upon registration', () => {
      expect(deviceEventEmitterListenerStub).toHaveBeenCalledTimes(0);
      const userListenerStub = jest.fn();
      const notification = { foo: 'bar' };

      libUnderTest.NotificationsAndroid.setNotificationReceivedListener(userListenerStub);

      expect(userListenerStub).toHaveBeenCalledTimes(0);
      deviceEventEmitterListenerStub.mock.calls[0][1](notification);
      expect(userListenerStub).toHaveBeenCalledTimes(1);
      expect(userListenerStub.mock.calls[0][0].getData()).toEqual(notification);
    });

    it('should clear native event listener upon listener deregister', () => {
      expect(deviceEventEmitterListenerStub).toHaveBeenCalledTimes(0);
      const userListener = () => {};
      const nativeListener = {
        remove: jest.fn()
      };
      deviceEventEmitterListenerStub.mockReturnValueOnce(nativeListener);

      libUnderTest.NotificationsAndroid.setNotificationReceivedListener(userListener);
      libUnderTest.NotificationsAndroid.clearNotificationReceivedListener();

      expect(nativeListener.remove).toHaveBeenCalledTimes(1);
    });

    it('shouldn`t fail if deregister without registering', () => {
      libUnderTest.NotificationsAndroid.clearNotificationReceivedListener();

      expect(deviceEventEmitterListenerStub).toHaveBeenCalledTimes(0);
    });
  });

  describe('Notification token', () => {
    it('should refresh notification token upon refreshing request by the user', () => {
      expect(refreshTokenStub).toHaveBeenCalledTimes(0);
      libUnderTest.NotificationsAndroid.refreshToken();
      expect(refreshTokenStub).toHaveBeenCalledTimes(1);
    });
  });

  describe('Initial notification API', () => {
    it('should return initial notification data if available', (done) => {
      expect(getInitialNotificationStub).toHaveBeenCalledTimes(0);
      const rawNotification = {foo: 'bar'};
      getInitialNotificationStub.mockReturnValueOnce(Promise.resolve(rawNotification));

      libUnderTest.PendingNotifications.getInitialNotification()
        .then((notification) => {
          expect(notification.getData()).toEqual(rawNotification);
          done();
        })
        .catch((err) => done(err));
    });

    it('should return empty notification if not available', (done) => {
      expect(getInitialNotificationStub).toHaveBeenCalledTimes(0);
      getInitialNotificationStub.mockReturnValueOnce(Promise.resolve(null));

      libUnderTest.PendingNotifications.getInitialNotification()
        .then((notification) => {
          expect(notification).toBeUndefined();
          done();
        })
        .catch((err) => done(err));
    });

  });

  describe('Local notification', () => {
    const notification = {
      title: 'notification-title',
      body: 'notification-body'
    };

    it('should get published when posted manually', () => {
      expect(postLocalNotificationStub).toHaveBeenCalledTimes(0);

      const id = libUnderTest.NotificationsAndroid.localNotification(notification);
      expect(id).toBeDefined();
      expect(postLocalNotificationStub).toHaveBeenCalledWith(notification, id);
    });

    it('should be called with a unique ID', () => {
      expect(postLocalNotificationStub).toHaveBeenCalledTimes(0);

      const id = libUnderTest.NotificationsAndroid.localNotification(notification);
      const id2 = libUnderTest.NotificationsAndroid.localNotification(notification);
      expect(id).toBeDefined();
      expect(id2).toBeDefined();
      expect(id).not.toBe(id2);
    });

    it('should be cancellable with an ID', () => {
      expect(cancelLocalNotificationStub).toHaveBeenCalledTimes(0);

      libUnderTest.NotificationsAndroid.cancelLocalNotification(666);

      expect(cancelLocalNotificationStub).toHaveBeenCalledWith(666);
    });
  });
});
