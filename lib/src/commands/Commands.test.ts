import * as _ from 'lodash';
import { mock, verify, instance, when, anyNumber } from 'ts-mockito';

import { Commands } from './Commands';
import { NativeCommandsSender } from '../adapters/NativeCommandsSender';
import { Notification } from '../DTO/Notification';
import { UniqueIdProvider } from '../adapters/UniqueIdProvider';
import { NotificationCategory } from '../interfaces/NotificationCategory';
import { NotificationPermissions } from '../interfaces/NotificationPermissions';
import { NotificationFactory } from '../DTO/NotificationFactory';
import {NotificationAndroid} from "../DTO/NotificationAndroid";
import {Platform} from "react-native";
import {NotificationIOS} from "../DTO/NotificationIOS";

describe('Commands', () => {
  let uut: Commands;
  let mockedNativeCommandsSender: NativeCommandsSender;
  let mockedUniqueIdProvider: UniqueIdProvider;
  let notificationFactory: NotificationFactory

  beforeEach(() => {
    notificationFactory = new NotificationFactory();
    mockedNativeCommandsSender = mock(NativeCommandsSender);
    mockedUniqueIdProvider = mock(UniqueIdProvider);
    when(mockedUniqueIdProvider.generate()).thenCall(() => 12);
    uut = new Commands(
      instance(mockedNativeCommandsSender),
      instance(mockedUniqueIdProvider),
      notificationFactory
    );
  });

  describe('getInitialNotification', () => {
    it('sends to native', () => {
      uut.getInitialNotification();
      verify(mockedNativeCommandsSender.getInitialNotification()).called();
    });

    it('Android - returns a promise with the initial notification', async () => {
      Platform.OS = 'android';
      const expectedNotification: Notification = new NotificationAndroid({'google.message_id': 'id'});
      when(mockedNativeCommandsSender.getInitialNotification()).thenResolve(
          {'google.message_id': 'id'}
      );
      const result = await uut.getInitialNotification();
      expect(result).toEqual(expectedNotification);
    });

    it('Should return undefined initial notification', async () => {
      Platform.OS = 'android';
      when(mockedNativeCommandsSender.getInitialNotification()).thenResolve();
      const result = await uut.getInitialNotification();
      expect(result).toEqual(undefined);
    });

    it('iOS - returns a promise with the initial notification', async () => {
      Platform.OS = 'ios';
      const expectedNotification: Notification = new NotificationIOS({identifier: 'id'});
      when(mockedNativeCommandsSender.getInitialNotification()).thenResolve(
          {identifier: 'id'}
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
      const notification: Notification = new Notification({identifier: 'id'});
      uut.postLocalNotification(notification);
      verify(mockedNativeCommandsSender.postLocalNotification(notification, anyNumber())).called();
    });

    it('generates unique identifier', () => {
      const notification: Notification = new Notification({identifier: 'id'});
      uut.postLocalNotification(notification);
      verify(mockedNativeCommandsSender.postLocalNotification(notification, anyNumber())).called();
    });

    it('use passed notification id', () => {
      const notification: Notification = new Notification({identifier: 'id'});
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

  describe('removeDeliveredNotifications', () => {
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

  describe('refreshToken', () => {
    it('sends to native', () => {
      uut.refreshToken();
      verify(mockedNativeCommandsSender.refreshToken()).called();
    });
  });
});
