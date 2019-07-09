import IOSNotification from '../lib/src/notification.ios';

describe('iOS Notification Object', () => {
  let notification;
  let someBadgeCount = 123, someSound = 'someSound', someCategory = 'some_notification_category', someThread = 'thread-1';

  describe('for a regular iOS push notification', () => {
    let regularNativeNotifications = [
      // basic example, without content-available = 1 (aka silent notification)
      {
        aps: {
          alert: {
            title: 'some title',
            body: 'some body'
          },
          badge: someBadgeCount,
          sound: someSound,
          category: someCategory,
          thread: someThread
        },
        key1: 'value1',
        key2: 'value2'
      },

      // another example, with content-available but also with alert object (should not be a silent notification)
      {
        aps: {
          'content-available': 1,
          alert: {
            title: 'some title',
            body: 'some body'
          },
          badge: someBadgeCount,
          sound: someSound,
          category: someCategory,
          thread: someThread
        },
        key1: 'value1',
        key2: 'value2'
      }
    ];

    regularNativeNotifications.forEach(nativeNotification => {
      beforeEach(() => {
        notification = new IOSNotification(nativeNotification);
      });

      it('should return regular type', function () {
        expect(notification.getType()).toEqual('regular');
      });

      it('should return the alert object', () => {
        expect(notification.getMessage()).toEqual(nativeNotification.aps.alert);
      });

      it('should return the sound', () => {
        expect(notification.getSound()).toEqual(someSound);
      });

      it('should return the badge count', () => {
        expect(notification.getBadgeCount()).toEqual(someBadgeCount);
      });

      it('should return the category', () => {
        expect(notification.getCategory()).toEqual(someCategory);
      });

      it('should return the thread', () => {
        expect(notification.getThread()).toEqual('thread-1');
      });

      it('should return the custom data', () => {
        expect(notification.getData()).toEqual({ key1: 'value1', key2: 'value2' });
      });
    });
  });

  describe('for a managed iOS push notification (silent notification, with managedAps key and content-available = 1)', () => {
    let managedNativeNotification = {
      aps: {
        'content-available': 1,
        badge: someBadgeCount
      },
      managedAps: {
        action: 'CREATE',
        notificationId: '1',
        alert: {
          title: 'some title',
          body: 'some body'
        },
        sound: someSound,
        category: someCategory
      },
      key1: 'value1',
      key2: 'value2'
    };

    beforeEach(() => {
      notification = new IOSNotification(managedNativeNotification);
    });

    it('should return managed type', function () {
      expect(notification.getType()).toEqual('managed');
    });

    it('should return the alert object', () => {
      expect(notification.getMessage()).toEqual(managedNativeNotification.managedAps.alert);
    });

    it('should return the sound', () => {
      expect(notification.getSound()).toEqual(someSound);
    });

    it('should return the badge count', () => {
      expect(notification.getBadgeCount()).toEqual(someBadgeCount);
    });

    it('should return the category', () => {
      expect(notification.getCategory()).toEqual(someCategory);
    });

    it('should return the custom data', () => {
      expect(notification.getData()).toEqual({ managedAps: managedNativeNotification.managedAps, key1: 'value1', key2: 'value2' });
    });
  });
});
