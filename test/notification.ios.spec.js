"use strict";
import { expect } from "chai";
import proxyquire from "proxyquire";

describe("iOS Notification Object", () => {
  let IOSNotification;

  before(() => {
    let libUnderTest = proxyquire("../notification.ios", {
      "react-native": {
        NativeModules: {
          RNNotifications: {
          }
        },
        "@noCallThru": true
      }
    });

    IOSNotification = libUnderTest.default;
  });

  after(() => {
    IOSNotification = null;
  });

  let notification;
  let someBadgeCount = 123, someSound = "someSound", someCategory = "some_notification_category";

  describe("for a regular iOS push notification", () => {
    let regularNativeNotifications = [
      // basic example, without content-available = 1 (aka silent notification)
      {
        aps: {
          alert: {
            title: "some title",
            body: "some body"
          },
          badge: someBadgeCount,
          sound: someSound,
          category: someCategory
        },
        key1: "value1",
        key2: "value2"
      },

      // another example, with content-available but also with alert object (should not be a silent notification)
      {
        aps: {
          "content-available": 1,
          alert: {
            title: "some title",
            body: "some body"
          },
          badge: someBadgeCount,
          sound: someSound,
          category: someCategory
        },
        key1: "value1",
        key2: "value2"
      }
    ];

    regularNativeNotifications.forEach(nativeNotification => {
      beforeEach(() => {
        notification = new IOSNotification(nativeNotification);
      });

      it("should return 'regular' type", function () {
        expect(notification.getType()).to.equal("regular");
      });

      it("should return the alert object", () => {
        expect(notification.getMessage()).to.deep.equal(nativeNotification.aps.alert);
      });

      it("should return the sound", () => {
        expect(notification.getSound()).to.equal(someSound);
      });

      it("should return the badge count", () => {
        expect(notification.getBadgeCount()).to.equal(someBadgeCount);
      });

      it("should return the category", () => {
        expect(notification.getCategory()).to.equal(someCategory);
      });

      it("should return the custom data", () => {
        expect(notification.getData()).to.deep.equal({ key1: "value1", key2: "value2" });
      });
    });
  });

  describe("for a managed iOS push notification (silent notification, with managedAps key and content-available = 1)", () => {
    let managedNativeNotification = {
      aps: {
        "content-available": 1,
        badge: someBadgeCount
      },
      managedAps: {
        action: "CREATE",
        notificationId: "1",
        alert: {
          title: "some title",
          body: "some body"
        },
        sound: someSound,
        category: someCategory
      },
      key1: "value1",
      key2: "value2"
    };

    beforeEach(() => {
      notification = new IOSNotification(managedNativeNotification);
    });

    it("should return 'managed' type", function () {
      expect(notification.getType()).to.equal("managed");
    });

    it("should return the alert object", () => {
      expect(notification.getMessage()).to.equal(managedNativeNotification.managedAps.alert);
    });

    it("should return the sound", () => {
      expect(notification.getSound()).to.equal(someSound);
    });

    it("should return the badge count", () => {
      expect(notification.getBadgeCount()).to.equal(someBadgeCount);
    });

    it("should return the category", () => {
      expect(notification.getCategory()).to.equal(someCategory);
    });

    it("should return the custom data", () => {
      expect(notification.getData()).to.deep.equal({ managedAps: managedNativeNotification.managedAps, key1: "value1", key2: "value2" });
    });
  });
});
