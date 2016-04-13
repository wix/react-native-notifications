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

  let nativeAddEventListener, nativeRemoveEventListener, nativeUpdateNotificationCategories;
  let NotificationIOS, NotificationAction, NotificationCategory;
  let someHandler = () => {};

  before(() => {
    nativeAddEventListener = sinon.spy();
    nativeRemoveEventListener = sinon.spy();
    nativeUpdateNotificationCategories = sinon.spy();

    let libUnderTest = proxyquire("../index.ios", {
      "react-native": {
        NativeModules: {
          RNNotifications: {
            updateNotificationCategories: nativeUpdateNotificationCategories
          }
        },
        DeviceEventEmitter: {
          addListener: (...args) => {
            nativeAddEventListener(...args);

            return { remove: nativeRemoveEventListener };
          }
        },
        "@noCallThru": true
      }
    });

    NotificationIOS = libUnderTest.default;
    NotificationAction = libUnderTest.NotificationAction;
    NotificationCategory = libUnderTest.NotificationCategory;
  });

  afterEach(() => {
    nativeAddEventListener.reset();
    nativeRemoveEventListener.reset();
    nativeUpdateNotificationCategories.reset();
  });

  after(() => {
    nativeAddEventListener = null;
    nativeRemoveEventListener = null;
    nativeUpdateNotificationCategories = null;
    NotificationIOS = null;
    NotificationAction = null;
    NotificationCategory = null;
  });

  describe("Add Event Listener", () => {
    deviceEvents.forEach(event => {
      it(`should subscribe the given handler to device event: ${event}`, () => {
        NotificationIOS.addEventListener(event, someHandler);

        expect(nativeAddEventListener).to.have.been.calledWith(event, sinon.match.func);
      });
    });

    it("should not subscribe to unknown device events", () => {
      NotificationIOS.addEventListener("someUnsupportedEvent", someHandler);

      expect(nativeAddEventListener).to.not.have.been.called;
    });
  });

  describe("Remove Event Listener", () => {
    deviceEvents.forEach(event => {
      it(`should unsubscribe the given handler from device event: ${event}`, () => {
        NotificationIOS.addEventListener(event, someHandler);
        NotificationIOS.removeEventListener(event, someHandler);

        expect(nativeRemoveEventListener).to.have.been.calledOnce;
      });
    });

    it("should not unsubscribe to unknown device events", () => {
      let someUnsupportedEvent = "someUnsupportedEvent";
      NotificationIOS.addEventListener(someUnsupportedEvent, someHandler);
      NotificationIOS.removeEventListener(someUnsupportedEvent, someHandler);

      expect(nativeRemoveEventListener).to.not.have.been.called;
    });
  });

  describe("Update notification categories", () => {
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

    it("should call native update categories with array of categories", () => {
      NotificationIOS.setCategories([someCategory]);

      expect(nativeUpdateNotificationCategories).to.have.been.calledWith([{
        identifier: "SOME_CATEGORY",
        actions: [actionOpts],
        context: "default"
      }]);
    });

    it("should call native update categories with empty array if no categories specified", () => {
      NotificationIOS.setCategories();

      expect(nativeUpdateNotificationCategories).to.have.been.calledWith([]);
    });

    it("should subscribe to 'notificationActionReceived' event for each action identifier", () => {
      NotificationIOS.setCategories([someCategory]);

      expect(nativeAddEventListener).to.have.been.calledOnce;
      expect(nativeAddEventListener).to.have.been.calledWith("notificationActionReceived", sinon.match.func);
    });
  });
});
