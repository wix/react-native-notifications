"use strict";
let expect = require("chai").use(require("sinon-chai")).expect;
import proxyquire from "proxyquire";
import sinon from "sinon";

/* eslint-disable no-unused-vars */

describe("NotificationsIOS", () => {
  let deviceEvents = [
    "notificationReceivedForeground",
    "notificationReceivedBackground",
    "notificationOpened"
  ];

  let deviceAddEventListener, deviceRemoveEventListener, nativeAppAddEventListener, nativeAppRemoveEventListener, nativeUpdateNotificationCategories;
  let NotificationsIOS, NotificationAction, NotificationCategory;
  let someHandler = () => {};

  before(() => {
    deviceAddEventListener = sinon.spy();
    deviceRemoveEventListener = sinon.spy();
    nativeAppAddEventListener = sinon.spy();
    nativeAppRemoveEventListener = sinon.spy();
    nativeUpdateNotificationCategories = sinon.spy();

    let libUnderTest = proxyquire("../index.ios", {
      "react-native": {
        NativeModules: {
          RNNotifications: {
            updateNotificationCategories: nativeUpdateNotificationCategories
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
    nativeUpdateNotificationCategories.reset();
  });

  after(() => {
    deviceAddEventListener = null;
    deviceRemoveEventListener = null;
    nativeAppAddEventListener = null;
    nativeAppRemoveEventListener = null;
    nativeUpdateNotificationCategories = null;

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

    describe("register categories", () => {
      it("should call native update categories with array of categories", () => {
        NotificationsIOS.setCategories([someCategory]);

        expect(nativeUpdateNotificationCategories).to.have.been.calledWith([{
          identifier: "SOME_CATEGORY",
          actions: [actionOpts],
          context: "default"
        }]);
      });

      it("should call native update categories with empty array if no categories specified", () => {
        NotificationsIOS.setCategories();

        expect(nativeUpdateNotificationCategories).to.have.been.calledWith([]);
      });

      it("should subscribe to 'notificationActionReceived' event once, with a single event handler", () => {
        NotificationsIOS.setCategories([someCategory]);

        expect(nativeAppAddEventListener).to.have.been.calledOnce;
        expect(nativeAppAddEventListener).to.have.been.calledWith("notificationActionReceived", sinon.match.func);
      });
    });

    describe("reset categories", () => {
      it("should remove 'notificationActionReceived' event handler", function () {
        NotificationsIOS.resetCategories();

        expect(nativeAppRemoveEventListener).to.have.been.calledOnce;
      });
    });
  });
});
