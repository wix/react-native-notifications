import * as _ from 'lodash';
import { mock, verify, instance, when, anyNumber } from 'ts-mockito';

import { Commands } from './Commands';
import { NativeCommandsSender } from '../adapters/NativeCommandsSender';
import { Notification, NotificationCategory, NotificationPermissions } from '../interfaces/Notification';
import { UniqueIdProvider } from '../adapters/UniqueIdProvider';

describe('Commands', () => {
  let uut: Commands;
  let mockedNativeCommandsSender: NativeCommandsSender;
  let mockedUniqueIdProvider: UniqueIdProvider;
  
  beforeEach(() => {
    mockedNativeCommandsSender = mock(NativeCommandsSender);
    mockedUniqueIdProvider = mock(UniqueIdProvider);
    when(mockedUniqueIdProvider.generate()).thenCall(() => 12);
    uut = new Commands(
      instance(mockedNativeCommandsSender),
      instance(mockedUniqueIdProvider)
    );
  });

  describe('getInitialNotification', () => {
    it('sends to native', () => {
      uut.getInitialNotification();
      verify(mockedNativeCommandsSender.getInitialNotification()).called();
    });

    it('returns a promise with the initial notification', async () => {
      const expectedNotification: Notification = {identifier: 'id', data: {}, alert: 'alert'};
      when(mockedNativeCommandsSender.getInitialNotification()).thenResolve(
        expectedNotification
      );
      const result = await uut.getInitialNotification();
      expect(result).toEqual(expectedNotification);
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

  describe('postLocalNotification', () => {
    it('sends to native', () => {
      const notification: Notification = {identifier: 'id', alert: 'alert', data: {}};
      uut.postLocalNotification(notification);
      verify(mockedNativeCommandsSender.postLocalNotification(notification, anyNumber())).called();
    });

    it('generates unique identifier', () => {
      const notification: Notification = {identifier: 'id', data: {}, alert: 'alert'};
      uut.postLocalNotification(notification);
      verify(mockedNativeCommandsSender.postLocalNotification(notification, anyNumber())).called();
    });

    it('use passed notification id', () => {
      const notification: Notification = {identifier: 'id', data: {}, alert: 'alert'};
      const passedId: number = 2;
      uut.postLocalNotification(notification, passedId);
      verify(mockedNativeCommandsSender.postLocalNotification(notification, passedId)).called();
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

  describe('getDeliveredNotifications', () => {
    it('sends to native', () => {
      uut.getDeliveredNotifications();
      verify(mockedNativeCommandsSender.getDeliveredNotifications()).called();
    });
  });
});
