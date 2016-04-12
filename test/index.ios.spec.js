"use strict";
let expect = require("chai").use(require("sinon-chai")).expect;
import proxyquire from "proxyquire";
import sinon from "sinon";

describe("NotificationsIOS", () => {
  let deviceEvents = [
    "notificationReceivedForeground",
    "notificationReceivedBackground",
    "notificationOpened"
  ];

  let addEventListenerSpy, removeEventListenerSpy;
  let notificationIOS;
  let someHandler = () => {};

  before(() => {
    addEventListenerSpy = sinon.spy();
    removeEventListenerSpy = sinon.spy();
    notificationIOS = proxyquire("../index.ios", {
      "react-native": {
        NativeModules: {
          RNNotifications: { }
        },
        DeviceEventEmitter: {
          addListener: (...args) => {
            addEventListenerSpy(...args);

            return { remove: removeEventListenerSpy };
          }
        },
        "@noCallThru": true
      }
    }).default;
  });

  afterEach(() => {
    addEventListenerSpy.reset();
    removeEventListenerSpy.reset();
  });

  after(() => {
    addEventListenerSpy = null;
    removeEventListenerSpy = null;
    notificationIOS = null;
  });

  describe("Add Event Listener", () => {
    deviceEvents.forEach(event => {
      it(`should subscribe the given handler to device event: ${event}`, () => {
        notificationIOS.addEventListener(event, someHandler);

        expect(addEventListenerSpy).to.have.been.calledWith(event, sinon.match.func);
      });
    });

    it("should not subscribe to unknown device events", () => {
      notificationIOS.addEventListener("someUnsupportedEvent", someHandler);

      expect(addEventListenerSpy).to.not.have.been.called;
    });
  });

  describe("Remove Event Listener", () => {
    deviceEvents.forEach(event => {
      it(`should unsubscribe the given handler from device event: ${event}`, () => {
        notificationIOS.addEventListener(event, someHandler);
        notificationIOS.removeEventListener(event, someHandler);

        expect(removeEventListenerSpy).to.have.been.calledOnce;
      });
    });

    it("should not unsubscribe to unknown device events", () => {
      let someUnsupportedEvent = "someUnsupportedEvent";
      notificationIOS.addEventListener(someUnsupportedEvent, someHandler);
      notificationIOS.removeEventListener(someUnsupportedEvent, someHandler);

      expect(removeEventListenerSpy).to.not.have.been.called;
    });
  });

  // TODO: Test handle notification with IOSNotification object
});
