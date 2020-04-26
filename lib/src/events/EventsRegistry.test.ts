import { EventsRegistry } from './EventsRegistry';
import { NativeEventsReceiver } from '../adapters/NativeEventsReceiver.mock';
import { Notification } from '../DTO/Notification';
import { CompletionCallbackWrapper } from '../adapters/CompletionCallbackWrapper';
import { NativeCommandsSender } from '../adapters/NativeCommandsSender.mock';
import { NotificationResponse } from '../interfaces/NotificationEvents';
import { Platform, AppState } from 'react-native';
import { NotificationCompletion, NotificationBackgroundFetchResult } from '../interfaces/NotificationCompletion';

describe('EventsRegistry', () => {
  let uut: EventsRegistry;
  const mockNativeEventsReceiver = new NativeEventsReceiver();
  const mockNativeCommandsSender = new NativeCommandsSender();
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
  
      expect(mockNativeEventsReceiver.registerNotificationReceived).toHaveBeenCalledTimes(1);
      expect(mockNativeEventsReceiver.registerNotificationReceived).toHaveBeenCalledWith(expect.any(Function));
    });
  
    it('should wrap callback with completion block', () => {
      const wrappedCallback = jest.fn();
      const notification: Notification  = new Notification({identifier: 'identifier'});
      
      uut.registerNotificationReceivedBackground(wrappedCallback);
      const call = mockNativeEventsReceiver.registerNotificationReceived.mock.calls[0][0];
      call(notification);
      
      expect(wrappedCallback).toBeCalledWith(notification, expect.any(Function));
      expect(wrappedCallback).toBeCalledTimes(1);
    });

    it('should wrap callback with completion block', () => {
      const expectedNotification: Notification  = new Notification({identifier: 'identifier'});
      
      uut.registerNotificationReceivedBackground((notification) => {
        expect(notification).toEqual(expectedNotification);
      });
      const call = mockNativeEventsReceiver.registerNotificationReceived.mock.calls[0][0];
      call(expectedNotification);
    });

    it('should invoke finishPresentingNotification', () => {
      const notification: Notification  = new Notification({identifier: 'notificationId'});
      const response = NotificationBackgroundFetchResult.NO_DATA;
      
      uut.registerNotificationReceivedBackground((notification, completion) => {
        completion(response);
        
        expect(mockNativeCommandsSender.finishPresentingNotification).toBeCalledWith(notification.identifier, response);
      });
      const call = mockNativeEventsReceiver.registerNotificationReceived.mock.calls[0][0];
      call(notification);
    });

    it('should not invoke finishPresentingNotification on Android', () => {
      Platform.OS = 'android';
      const expectedNotification: Notification  = new Notification({identifier: 'notificationId'});
      const response = NotificationBackgroundFetchResult.NO_DATA;
      
      uut.registerNotificationReceivedBackground((notification, completion) => {
        completion(response);
        expect(expectedNotification).toEqual(notification);
        expect(mockNativeCommandsSender.finishPresentingNotification).toBeCalledTimes(0);
      });
      const call = mockNativeEventsReceiver.registerNotificationReceived.mock.calls[0][0];
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
      const response: NotificationResponse = {notification, identifier: 'responseId'};

      uut.registerNotificationOpened(wrappedCallback);
      const call = mockNativeEventsReceiver.registerNotificationOpened.mock.calls[0][0];
      call(response);
      
      expect(wrappedCallback).toBeCalledWith(response, expect.any(Function), undefined); //JMC: ActionResponse
      expect(wrappedCallback).toBeCalledTimes(1);
    });

    it('should wrap callback with completion block', () => {
      const notification: Notification  = new Notification({identifier: 'identifier'});
      const expectedResponse: NotificationResponse = {notification, identifier: 'responseId'}
      
      uut.registerNotificationOpened((response) => {
        expect(response).toEqual(expectedResponse);
      });
      const call = mockNativeEventsReceiver.registerNotificationOpened.mock.calls[0][0];
      call(expectedResponse);
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
