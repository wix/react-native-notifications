import { Platform, AppState } from 'react-native';
import { Notification } from '../DTO/Notification';
import { CompletionCallbackWrapper } from '../adapters/CompletionCallbackWrapper';
import { NativeCommandsSender } from '../adapters/NativeCommandsSender';
import { NativeEventsReceiver } from '../adapters/NativeEventsReceiver';
import { NotificationResponse } from '../interfaces/NotificationEvents';
import { NotificationCompletion, NotificationBackgroundFetchResult } from '../interfaces/NotificationCompletion';
import { EventsRegistry } from './EventsRegistry';

jest.mock('../adapters/NativeCommandsSender')
jest.mock('../adapters/NativeEventsReceiver')

describe('EventsRegistry', () => {
  let uut: EventsRegistry;
  const mockNativeEventsReceiver = new NativeEventsReceiver() as jest.Mocked<NativeEventsReceiver>;
  const mockNativeCommandsSender = new NativeCommandsSender() as jest.Mocked<NativeCommandsSender>;
  const completionCallbackWrapper = new CompletionCallbackWrapper(mockNativeCommandsSender);

  beforeEach(() => {
    uut = new EventsRegistry(mockNativeEventsReceiver, completionCallbackWrapper);
  });

  describe('registerRemoteNotificationsReceivedForeground', () => {
    beforeEach(() => {
      AppState.currentState = 'active';
    });

    it('delegates to nativeEventsReceiver', () => {
      const cb = jest.fn();
  
      uut.registerNotificationReceivedForeground(cb);
  
      expect(mockNativeEventsReceiver.registerNotificationReceived).toHaveBeenCalledTimes(1);
      expect(mockNativeEventsReceiver.registerNotificationReceived).toHaveBeenCalledWith(expect.any(Function));
    });
  
    it('should wrap callback with completion block', () => {
      const wrappedCallback = jest.fn();
      const notification: Notification  = new Notification({identifier: 'identifier'});
      
      uut.registerNotificationReceivedForeground(wrappedCallback);
      const call = mockNativeEventsReceiver.registerNotificationReceived.mock.calls[0][0];
      call(notification);
      
      expect(wrappedCallback).toBeCalledWith(notification, expect.any(Function));
      expect(wrappedCallback).toBeCalledTimes(1);
    });

    it('should wrap callback with completion block', () => {
      const expectedNotification: Notification  = new Notification({identifier: 'identifier'});
      
      uut.registerNotificationReceivedForeground((notification) => {
        expect(notification).toEqual(expectedNotification);
      });
      const call = mockNativeEventsReceiver.registerNotificationReceived.mock.calls[0][0];
      call(expectedNotification);
    });

    it('should invoke finishPresentingNotification', () => {
      const notification: Notification  = new Notification({identifier: 'notificationId'});
      const response: NotificationCompletion  = {alert: true}
      
      uut.registerNotificationReceivedForeground((notification, completion) => {
        completion(response);
        
        expect(mockNativeCommandsSender.finishPresentingNotification).toBeCalledWith(notification.identifier, response);
      });
      const call = mockNativeEventsReceiver.registerNotificationReceived.mock.calls[0][0];
      call(notification);
    });

    it('should not invoke finishPresentingNotification on Android', () => {
      Platform.OS = 'android';
      const expectedNotification: Notification  = new Notification({identifier: 'notificationId'});
      const response: NotificationCompletion  = {alert: true}
      
      uut.registerNotificationReceivedForeground((notification, completion) => {
        completion(response);
        expect(expectedNotification).toEqual(notification);
        expect(mockNativeCommandsSender.finishPresentingNotification).toBeCalledTimes(0);
      });
      const call = mockNativeEventsReceiver.registerNotificationReceived.mock.calls[0][0];
      call(expectedNotification);
    });
  });

  describe('registerRemoteNotificationsReceivedBackground', () => {
    beforeEach(() => {
      AppState.currentState = 'background';
    });

    it('delegates to nativeEventsReceiver', () => {
      const cb = jest.fn();
  
      uut.registerNotificationReceivedBackground(cb);
  
      expect(mockNativeEventsReceiver.registerNotificationReceivedBackground).toHaveBeenCalledTimes(1);
      expect(mockNativeEventsReceiver.registerNotificationReceivedBackground).toHaveBeenCalledWith(expect.any(Function));
    });
  
    it('should wrap callback with completion block', () => {
      const wrappedCallback = jest.fn();
      const notification: Notification  = new Notification({identifier: 'identifier'});
      
      uut.registerNotificationReceivedBackground(wrappedCallback);
      const call = mockNativeEventsReceiver.registerNotificationReceivedBackground.mock.calls[0][0];
      call(notification);
      
      expect(wrappedCallback).toBeCalledWith(notification, expect.any(Function));
      expect(wrappedCallback).toBeCalledTimes(1);
    });

    it('should wrap callback with completion block', () => {
      const expectedNotification: Notification  = new Notification({identifier: 'identifier'});
      
      uut.registerNotificationReceivedBackground((notification) => {
        expect(notification).toEqual(expectedNotification);
      });
      const call = mockNativeEventsReceiver.registerNotificationReceivedBackground.mock.calls[0][0];
      call(expectedNotification);
    });

    it('should invoke finishHandlingBackgroundAction', () => {
      const notification: Notification  = new Notification({identifier: 'notificationId'});
      const response = NotificationBackgroundFetchResult.NO_DATA;
      
      uut.registerNotificationReceivedBackground((notification, completion) => {
        completion(response);
        
        expect(mockNativeCommandsSender.finishHandlingBackgroundAction).toBeCalledWith(notification.identifier, response);
      });
      const call = mockNativeEventsReceiver.registerNotificationReceivedBackground.mock.calls[0][0];
      call(notification);
    });

    it('should not invoke finishHandlingBackgroundAction on Android', () => {
      Platform.OS = 'android';
      const expectedNotification: Notification  = new Notification({identifier: 'notificationId'});
      const response = NotificationBackgroundFetchResult.NO_DATA;
      
      uut.registerNotificationReceivedBackground((notification, completion) => {
        completion(response);
        expect(expectedNotification).toEqual(notification);
        expect(mockNativeCommandsSender.finishHandlingBackgroundAction).toBeCalledTimes(0);
      });
      const call = mockNativeEventsReceiver.registerNotificationReceivedBackground.mock.calls[0][0];
      call(expectedNotification);
    });
  });

  describe('', () => {
    it('delegates to nativeEventsReceiver', () => {
      const cb = jest.fn();
  
      uut.registerNotificationOpened(cb);
  
      expect(mockNativeEventsReceiver.registerNotificationOpened).toHaveBeenCalledTimes(1);
      expect(mockNativeEventsReceiver.registerNotificationOpened).toHaveBeenCalledWith(expect.any(Function));
    });
  
    it('should wrap callback with completion block', () => {
      const wrappedCallback = jest.fn();
      const notification: Notification  = new Notification({identifier: 'identifier'});
      const response: NotificationResponse = {
        notification,
        identifier: 'responseId',
        action: { identifier: 'actionIdentifier', text: 'userText' },
      };

      uut.registerNotificationOpened(wrappedCallback);
      const call = mockNativeEventsReceiver.registerNotificationOpened.mock.calls[0][0];
      call(response.notification, response.action);
      
      expect(wrappedCallback).toBeCalledWith(response.notification, expect.any(Function), response.action);
      expect(wrappedCallback).toBeCalledTimes(1);
    });

    it('should wrap callback with completion block', () => {
      const notification: Notification  = new Notification({identifier: 'identifier'});
      
      uut.registerNotificationOpened((response) => {
        expect(response).toEqual(notification);
      });
      const call = mockNativeEventsReceiver.registerNotificationOpened.mock.calls[0][0];
      call(notification);
    });

    it('calling completion should invoke finishHandlingAction', () => {
      const expectedNotification: Notification  = new Notification({identifier: 'notificationId'});
      
      uut.registerNotificationOpened((notification, completion) => {
        completion();
        
        expect(expectedNotification).toEqual(notification);
        expect(mockNativeCommandsSender.finishHandlingAction).toBeCalledWith(notification.identifier);
      });
      const call = mockNativeEventsReceiver.registerNotificationOpened.mock.calls[0][0];
      call(expectedNotification);
    });

    it('should not invoke finishHandlingAction on Android', () => {
      Platform.OS = 'android';
      const expectedNotification: Notification  = new Notification({identifier: 'notificationId'});
      
      uut.registerNotificationOpened((notification, completion) => {
        completion();
        
        expect(expectedNotification).toEqual(notification);
        expect(mockNativeCommandsSender.finishHandlingAction).toBeCalledTimes(0);
      });
      const call = mockNativeEventsReceiver.registerNotificationOpened.mock.calls[0][0];
      call(expectedNotification);
    });
  });

  it('delegates registerRemoteNotificationsRegistered to nativeEventsReceiver', () => {
    const cb = jest.fn();
    uut.registerRemoteNotificationsRegistered(cb);
    expect(mockNativeEventsReceiver.registerRemoteNotificationsRegistered).toHaveBeenCalledTimes(1);
    expect(mockNativeEventsReceiver.registerRemoteNotificationsRegistered).toHaveBeenCalledWith(cb);
  });

  it('delegates registerRemoteNotificationsRegistrationFailed to nativeEventsReceiver', () => {
    const cb = jest.fn();
    uut.registerRemoteNotificationsRegistrationFailed(cb);
    expect(mockNativeEventsReceiver.registerRemoteNotificationsRegistrationFailed).toHaveBeenCalledTimes(1);
    expect(mockNativeEventsReceiver.registerRemoteNotificationsRegistrationFailed).toHaveBeenCalledWith(cb);
  });
});
