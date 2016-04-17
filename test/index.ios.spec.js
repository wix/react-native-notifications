"use strict";
let expect = require("chai").use(require("sinon-chai")).expect;
import proxyquire from "proxyquire";
import sinon from "sinon";

/* eslint-disable no-unused-vars */

describe("NotificationsIOS", () => {
  let deviceEvents = [
    "pushKitRegistered",
    "remoteNotificationsRegistered",
    "notificationReceivedForeground",
    "notificationReceivedBackground",
    "notificationOpened"
  ];

  /*eslint-disable indent*/
  let deviceAddEventListener,
      deviceRemoveEventListener,
      nativeAppAddEventListener,
      nativeAppRemoveEventListener,
      nativeRequestPermissionsWithCategories,
      nativeAbandonPermissions,
      nativeRegisterPushKit,
      nativeBackgroundTimeRemaining;
  let NotificationsIOS, NotificationAction, NotificationCategory;
  let someHandler = () => {};
  /*eslint-enable indent*/

  before(() => {
    deviceAddEventListener = sinon.spy();
    deviceRemoveEventListener = sinon.spy();
    nativeAppAddEventListener = sinon.spy();
    nativeAppRemoveEventListener = sinon.spy();
    nativeRequestPermissionsWithCategories = sinon.spy();
    nativeAbandonPermissions = sinon.spy();
    nativeRegisterPushKit = sinon.spy();
    nativeBackgroundTimeRemaining = sinon.spy();

    let libUnderTest = proxyquire("../index.ios", {
      "react-native": {
        NativeModules: {
          RNNotifications: {
            requestPermissionsWithCategories: nativeRequestPermissionsWithCategories,
            abandonPermissions: nativeAbandonPermissions,
            registerPushKit: nativeRegisterPushKit,
            backgroundTimeRemaining: nativeBackgroundTimeRemaining
          }
        },
        NativeAppEventEmitter: {
          addListener: (...args) => {
            nativeAppAddEventListener(...args);

            return { remove: nativeAppRemoveEventListener };
          }
        },
        DeviceEventEmitter: {
          addListener: (...args) => {
            deviceAddEventListener(...args);

            return { remove: deviceRemoveEventListener };
          }
        },
        "@noCallThru": true
      }
    });

    NotificationsIOS = libUnderTest.default;
    NotificationAction = libUnderTest.NotificationAction;
    NotificationCategory = libUnderTest.NotificationCategory;
  });

  afterEach(() => {
    deviceAddEventListener.reset();
    deviceRemoveEventListener.reset();
    nativeAppAddEventListener.reset();
    nativeAppRemoveEventListener.reset();
    nativeRequestPermissionsWithCategories.reset();
    nativeAbandonPermissions.reset();
    nativeRegisterPushKit.reset();
    nativeBackgroundTimeRemaining.reset();
  });

  after(() => {
    deviceAddEventListener = null;
    deviceRemoveEventListener = null;
    nativeAppAddEventListener = null;
    nativeAppRemoveEventListener = null;
    nativeRequestPermissionsWithCategories = null;
    nativeAbandonPermissions = null;
    nativeRegisterPushKit = null;
    nativeBackgroundTimeRemaining = null;

    NotificationsIOS = null;
    NotificationAction = null;
    NotificationCategory = null;
  });

  describe("Add Event Listener", () => {
    deviceEvents.forEach(event => {
      it(`should subscribe the given handler to device event: ${event}`, () => {
        NotificationsIOS.addEventListener(event, someHandler);

        expect(deviceAddEventListener).to.have.been.calledWith(event, sinon.match.func);
      });
    });

    it("should not subscribe to unknown device events", () => {
      NotificationsIOS.addEventListener("someUnsupportedEvent", someHandler);

      expect(deviceAddEventListener).to.not.have.been.called;
    });
  });

  describe("Remove Event Listener", () => {
    deviceEvents.forEach(event => {
      it(`should unsubscribe the given handler from device event: ${event}`, () => {
        NotificationsIOS.addEventListener(event, someHandler);
        NotificationsIOS.removeEventListener(event, someHandler);

        expect(deviceRemoveEventListener).to.have.been.calledOnce;
      });
    });

    it("should not unsubscribe to unknown device events", () => {
      let someUnsupportedEvent = "someUnsupportedEvent";
      NotificationsIOS.addEventListener(someUnsupportedEvent, someHandler);
      NotificationsIOS.removeEventListener(someUnsupportedEvent, someHandler);

      expect(deviceRemoveEventListener).to.not.have.been.called;
    });
  });

  describe("Notification actions handling", () => {
    let someAction, someCategory;

    let actionOpts = {
      activationMode: "foreground",
      title: "someAction",
      behavior: "default",
      identifier: "SOME_ACTION"
    };

    beforeEach(() => {
      someAction = new NotificationAction(actionOpts, () => {});

      someCategory = new NotificationCategory({
        identifier: "SOME_CATEGORY",
        actions: [someAction],
        context: "default"
      });
    });

    describe("register push notifications", () => {
      it("should call native request permissions with array of categories", () => {
        NotificationsIOS.requestPermissions([someCategory]);

        expect(nativeRequestPermissionsWithCategories).to.have.been.calledWith([{
          identifier: "SOME_CATEGORY",
          actions: [actionOpts],
          context: "default"
        }]);
      });

      it("should call native request permissions with empty array if no categories specified", () => {
        NotificationsIOS.requestPermissions();

        expect(nativeRequestPermissionsWithCategories).to.have.been.calledWith([]);
      });

      it("should subscribe to 'notificationActionReceived' event once, with a single event handler", () => {
        NotificationsIOS.requestPermissions([someCategory]);

        expect(nativeAppAddEventListener).to.have.been.calledOnce;
        expect(nativeAppAddEventListener).to.have.been.calledWith("notificationActionReceived", sinon.match.func);
      });
    });

    describe("reset categories", () => {
      it("should remove 'notificationActionReceived' event handler", () => {
        NotificationsIOS.resetCategories();

        expect(nativeAppRemoveEventListener).to.have.been.calledOnce;
      });
    });
  });

  describe("register push kit for background notifications", function () {
    it("should call native register push kit method", function () {
      NotificationsIOS.registerPushKit();

      expect(nativeRegisterPushKit).to.have.been.called;
    });
  });

  describe("Abandon push notifications permissions", () => {
    it("should call native abandon permissions method", () => {
      NotificationsIOS.abandonPermissions();

      expect(nativeAbandonPermissions).to.have.been.called;
    });
  });

  describe("Get background remaining time", () => {
    it("should call native background remaining time method", () => {
      let someCallback = (time) => { };

      NotificationsIOS.backgroundTimeRemaining(someCallback);

      expect(nativeBackgroundTimeRemaining).to.have.been.calledWith(someCallback);
    });
  });
});
