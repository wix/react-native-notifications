let expect = require("chai").use(require("sinon-chai")).expect;
let proxyquire = require("proxyquire");
let sinon = require("sinon");

describe("NotificationsIOS", function () {
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

  describe("Add Event Listener", function () {
    deviceEvents.forEach(function(event) {
      it(`should subscribe the given handler to device event: ${event}`, function () {
        notificationIOS.addEventListener(event, someHandler);

        expect(addEventListenerSpy).to.have.been.calledWith(event, sinon.match.func);
      });
    });

    it("should not subscribe to unknown device events", function () {
      notificationIOS.addEventListener("someUnsupportedEvent", someHandler);

      expect(addEventListenerSpy).to.not.have.been.called;
    });
  });

  describe("Remove Event Listener", function () {
    deviceEvents.forEach(function(event) {
      it(`should unsubscribe the given handler from device event: ${event}`, function () {
        notificationIOS.addEventListener(event, someHandler);
        notificationIOS.removeEventListener(event, someHandler);

        expect(removeEventListenerSpy).to.have.been.calledOnce;
      });
    });

    it("should not unsubscribe to unknown device events", function () {
      let someUnsupportedEvent = "someUnsupportedEvent";
      notificationIOS.addEventListener(someUnsupportedEvent, someHandler);
      notificationIOS.removeEventListener(someUnsupportedEvent, someHandler);

      expect(removeEventListenerSpy).to.not.have.been.called;
    });
  });
});
