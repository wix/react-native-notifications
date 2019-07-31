import * as _ from 'lodash';
import { mock, verify, instance, deepEqual, when, anything, anyString } from 'ts-mockito';

import { Commands } from './Commands';
import { NativeCommandsSender } from '../adapters/NativeCommandsSender';
import { Notification, NotificationCategory, NotificationPermissions } from '../interfaces/Notification';

describe('Commands', () => {
  let uut: Commands;
  let mockedNativeCommandsSender: NativeCommandsSender;

  beforeEach(() => {
    mockedNativeCommandsSender = mock(NativeCommandsSender);

    uut = new Commands(
      instance(mockedNativeCommandsSender)
    );
  });

  describe('getInitialNotification', () => {
    it('sends to native', () => {
      uut.getInitialNotification();
      verify(mockedNativeCommandsSender.getInitialNotification()).called();
    });

    it('returns a promise with the initial notification', async () => {
      when(mockedNativeCommandsSender.getInitialNotification()).thenResolve(
        {data: {}}
      );
      const result = await uut.getInitialNotification();
      expect(result).toEqual({data: {}});
    });
  });

  describe('requestPermissions', () => {
    it('sends to native', () => {
      uut.requestPermissions();
      verify(mockedNativeCommandsSender.requestPermissions()).called();
    });
  });

  describe('registerPushKit', () => {
    it('sends to native', () => {
      uut.registerPushKit();
      verify(mockedNativeCommandsSender.registerPushKit()).called();
    });
  });

  describe('setCategories', () => {
    it('sends to native', () => {
      const emptyCategoriesArray: [NotificationCategory?] = [];
      uut.setCategories(emptyCategoriesArray);
      verify(mockedNativeCommandsSender.setCategories(emptyCategoriesArray)).called();
    });

    it('sends to native with categories', () => {
      const category: NotificationCategory = {identifier: 'id', actions: []};
      const categoriesArray: [NotificationCategory] = [category];
      uut.setCategories(categoriesArray);
      verify(mockedNativeCommandsSender.setCategories(categoriesArray)).called();
    });
  });

  describe('abandonPermissions', () => {
    it('sends to native', () => {
      uut.abandonPermissions();
      verify(mockedNativeCommandsSender.abandonPermissions()).called();
    });
  });

  describe('sendLocalNotification', () => {
    it('sends to native', () => {
      const notification: Notification = {data: {}, alert: 'alert'};
      uut.sendLocalNotification(notification);
      verify(mockedNativeCommandsSender.sendLocalNotification(notification, 'id')).called();
    });
  });
  
  describe('getBadgeCount', () => {
    it('sends to native', () => {
      uut.getBadgeCount();
      verify(mockedNativeCommandsSender.getBadgeCount()).called();
    });
  });

  describe('setBadgeCount', () => {
    it('sends to native', () => {
      uut.setBadgeCount(10);
      verify(mockedNativeCommandsSender.setBadgeCount(10)).called();
    });
  });

  describe('cancelLocalNotification', () => {
    it('sends to native', () => {
      uut.cancelLocalNotification("notificationId");
      verify(mockedNativeCommandsSender.cancelLocalNotification("notificationId")).called();
    });
  });

  describe('cancelAllLocalNotifications', () => {
    it('sends to native', () => {
      uut.cancelAllLocalNotifications();
      verify(mockedNativeCommandsSender.cancelAllLocalNotifications()).called();
    });
  });

  describe('isRegisteredForRemoteNotifications', () => {
    it('sends to native', () => {
      uut.isRegisteredForRemoteNotifications();
      verify(mockedNativeCommandsSender.isRegisteredForRemoteNotifications()).called();
    });

    it('return positive response from native', async () => {
      when(mockedNativeCommandsSender.isRegisteredForRemoteNotifications()).thenResolve(
        true
      );
      const isRegistered = await uut.isRegisteredForRemoteNotifications();
      verify(mockedNativeCommandsSender.isRegisteredForRemoteNotifications()).called();
      expect(isRegistered).toEqual(true);
    });

    it('return negative response from native', async () => {
      when(mockedNativeCommandsSender.isRegisteredForRemoteNotifications()).thenResolve(
        false
      );
      const isRegistered = await uut.isRegisteredForRemoteNotifications();
      expect(isRegistered).toEqual(false);
    });
  });
  
  describe('checkPermissions', () => {
    it('sends to native', () => {
      uut.checkPermissions();
      verify(mockedNativeCommandsSender.checkPermissions()).called();
    });

    it('return negative response from native', async () => {
      const expectedPermissions: NotificationPermissions = {badge: false, alert: true, sound: false};
      when(mockedNativeCommandsSender.checkPermissions()).thenResolve(
        expectedPermissions
      );
      const permissions = await uut.checkPermissions();
      expect(permissions).toEqual(expectedPermissions);
    });
  });

  describe('removeAllDeliveredNotifications', () => {
    it('sends to native', () => {
      uut.removeAllDeliveredNotifications();
      verify(mockedNativeCommandsSender.removeAllDeliveredNotifications()).called();
    });
  });

  describe('removeDeliveredNotifications', async () => {
    it('sends to native', () => {
      const identifiers: Array<string> = ["id1", "id2"];
      uut.removeDeliveredNotifications(identifiers);
      verify(mockedNativeCommandsSender.removeDeliveredNotifications(identifiers)).called();
    });
  });
});
