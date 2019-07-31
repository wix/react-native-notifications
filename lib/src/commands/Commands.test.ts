import * as _ from 'lodash';
import { mock, verify, instance, deepEqual, when, anything, anyString } from 'ts-mockito';

import { Commands } from './Commands';
import { NativeCommandsSender } from '../adapters/NativeCommandsSender';
import { Notification } from '../interfaces/Notification';

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
    it('sends getInitialNotification to native', () => {
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
    it('sends requestPermissions to native', () => {
      uut.requestPermissions();
      verify(mockedNativeCommandsSender.requestPermissions()).called();
    });
  });

  describe('abandonPermissions', () => {
    it('sends abandonPermissions to native', () => {
      uut.abandonPermissions();
      verify(mockedNativeCommandsSender.abandonPermissions()).called();
    });
  });

  describe('sendLocalNotification', () => {
    it('sends sendLocalNotification to native', () => {
      const notification: Notification = {data: {}, alert: 'alert'};
      uut.sendLocalNotification(notification);
      verify(mockedNativeCommandsSender.sendLocalNotification(notification, 'id')).called();
    });
  });
});
