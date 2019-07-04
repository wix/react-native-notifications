'use strict';
let expect = require('chai').use(require('sinon-chai')).expect;
import proxyquire from 'proxyquire';
import sinon from 'sinon';

describe('Notifications-Android > ', () => {
  proxyquire.noCallThru();

  let refreshTokenStub;
  let getInitialNotificationStub;
  let postLocalNotificationStub;
  let cancelLocalNotificationStub;
  let deviceEventEmitterListenerStub;
  let libUnderTest;
  beforeEach(() => {
    refreshTokenStub = sinon.stub();
    getInitialNotificationStub = sinon.stub();
    postLocalNotificationStub = sinon.stub();
    cancelLocalNotificationStub = sinon.stub();
    deviceEventEmitterListenerStub = sinon.stub();

    libUnderTest = proxyquire('../index.android', {
      'react-native': {
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
      },
      './notification': require('../notification.android')
    });
  });

  describe('Registration token API', () => {
    it('should assign callback to native event upon listener registration', () => {
      expect(deviceEventEmitterListenerStub).to.not.have.been.called;
      const userListener = () => {};

      libUnderTest.NotificationsAndroid.setRegistrationTokenUpdateListener(userListener);

      expect(deviceEventEmitterListenerStub).to.have.been.calledWith('remoteNotificationsRegistered', userListener);
      expect(deviceEventEmitterListenerStub).to.have.been.calledOnce;
    });

    it('should clear native event listener upon listener deregister', () => {
      expect(deviceEventEmitterListenerStub).to.not.have.been.called;
      const userListener = () => {};
      const nativeListener = {
        remove: sinon.spy()
      };
      deviceEventEmitterListenerStub.returns(nativeListener);

      libUnderTest.NotificationsAndroid.setRegistrationTokenUpdateListener(userListener);
      libUnderTest.NotificationsAndroid.clearRegistrationTokenUpdateListener();

      expect(nativeListener.remove).to.have.been.calledOnce;
    });

    it('shouldn`t fail if deregister without registering', () => {
      libUnderTest.NotificationsAndroid.clearRegistrationTokenUpdateListener();

      expect(deviceEventEmitterListenerStub).to.not.have.been.called;
    });
  });

  describe('notification-opening API', () => {
    it('should assign callback to native event upon registration', () => {
      expect(deviceEventEmitterListenerStub).to.not.have.been.called;
      const userListenerStub = sinon.stub();

      libUnderTest.NotificationsAndroid.setNotificationOpenedListener(userListenerStub);

      expect(deviceEventEmitterListenerStub).to.have.been.calledOnce;
      expect(deviceEventEmitterListenerStub).to.have.been.calledWith('notificationOpened', sinon.match.func);
    });

    it('should assign a wrapper-callback upon registration', () => {
      expect(deviceEventEmitterListenerStub).to.not.have.been.called;
      const userListenerStub = sinon.stub();
      const notification = { foo: 'bar' };

      libUnderTest.NotificationsAndroid.setNotificationOpenedListener(userListenerStub);

      expect(userListenerStub).to.not.have.been.called;
      deviceEventEmitterListenerStub.args[0][1](notification);
      expect(userListenerStub).to.have.been.calledOnce;
      expect(userListenerStub.args[0][0].getData()).to.equal(notification);
    });

    it('should clear native event listener upon listener deregister', () => {
      expect(deviceEventEmitterListenerStub).to.not.have.been.called;
      const userListener = () => {};
      const nativeListener = {
        remove: sinon.spy()
      };
      deviceEventEmitterListenerStub.returns(nativeListener);

      libUnderTest.NotificationsAndroid.setNotificationOpenedListener(userListener);
      libUnderTest.NotificationsAndroid.clearNotificationOpenedListener();

      expect(nativeListener.remove).to.have.been.calledOnce;
    });

    it('shouldnt fail if deregister without registering', () => {
      libUnderTest.NotificationsAndroid.clearNotificationOpenedListener();

      expect(deviceEventEmitterListenerStub).to.not.have.been.called;
    });
  });

  describe('notification-receive API', () => {
    it('should assign callback to native event upon registration', () => {
      expect(deviceEventEmitterListenerStub).to.not.have.been.called;
      const userListenerStub = sinon.stub();

      libUnderTest.NotificationsAndroid.setNotificationReceivedListener(userListenerStub);

      expect(deviceEventEmitterListenerStub).to.have.been.calledOnce;
      expect(deviceEventEmitterListenerStub).to.have.been.calledWith('notificationReceived', sinon.match.func);
    });

    it('should assign a wrapper-callback upon registration', () => {
      expect(deviceEventEmitterListenerStub).to.not.have.been.called;
      const userListenerStub = sinon.stub();
      const notification = { foo: 'bar' };

      libUnderTest.NotificationsAndroid.setNotificationReceivedListener(userListenerStub);

      expect(userListenerStub).to.not.have.been.called;
      deviceEventEmitterListenerStub.args[0][1](notification);
      expect(userListenerStub).to.have.been.calledOnce;
      expect(userListenerStub.args[0][0].getData()).to.equal(notification);
    });

    it('should clear native event listener upon listener deregister', () => {
      expect(deviceEventEmitterListenerStub).to.not.have.been.called;
      const userListener = () => {};
      const nativeListener = {
        remove: sinon.spy()
      };
      deviceEventEmitterListenerStub.returns(nativeListener);

      libUnderTest.NotificationsAndroid.setNotificationReceivedListener(userListener);
      libUnderTest.NotificationsAndroid.clearNotificationReceivedListener();

      expect(nativeListener.remove).to.have.been.calledOnce;
    });

    it('shouldn`t fail if deregister without registering', () => {
      libUnderTest.NotificationsAndroid.clearNotificationReceivedListener();

      expect(deviceEventEmitterListenerStub).to.not.have.been.called;
    });
  });

  describe('Notification token', () => {
    it('should refresh notification token upon refreshing request by the user', () => {
      expect(refreshTokenStub).to.not.have.been.called;
      libUnderTest.NotificationsAndroid.refreshToken();
      expect(refreshTokenStub).to.have.been.calledOnce;
    });
  });

  describe('Initial notification API', () => {
    it('should return initial notification data if available', (done) => {
      expect(getInitialNotificationStub).to.not.have.been.called;
      const rawNotification = {foo: 'bar'};
      getInitialNotificationStub.returns(Promise.resolve(rawNotification));

      libUnderTest.PendingNotifications.getInitialNotification()
        .then((notification) => {
          expect(notification.getData()).to.equal(rawNotification);
          done();
        })
        .catch((err) => done(err));
    });

    it('should return empty notification if not available', (done) => {
      expect(getInitialNotificationStub).to.not.have.been.called;
      getInitialNotificationStub.returns(Promise.resolve(null));

      libUnderTest.PendingNotifications.getInitialNotification()
        .then((notification) => {
          expect(notification).to.be.undefined;
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
      expect(postLocalNotificationStub).to.not.have.been.called;

      const id = libUnderTest.NotificationsAndroid.localNotification(notification);
      expect(id).to.not.be.undefined;
      expect(postLocalNotificationStub).to.have.been.calledWith(notification, id);
    });

    it('should be called with a unique ID', () => {
      expect(postLocalNotificationStub).to.not.have.been.called;

      const id = libUnderTest.NotificationsAndroid.localNotification(notification);
      const id2 = libUnderTest.NotificationsAndroid.localNotification(notification);
      expect(id).to.not.be.undefined;
      expect(id2).to.not.be.undefined;
      expect(id).to.not.equal(id2);
    });

    it('should be cancellable with an ID', () => {
      expect(cancelLocalNotificationStub).to.not.have.been.called;

      libUnderTest.NotificationsAndroid.cancelLocalNotification(666);

      expect(cancelLocalNotificationStub).to.have.been.calledWith(666);
    });
  });
});
