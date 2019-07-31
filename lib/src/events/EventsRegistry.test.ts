import { EventsRegistry } from './EventsRegistry';
import { NativeEventsReceiver } from '../adapters/NativeEventsReceiver.mock';
import { NotificationCompletion, Notification } from '../interfaces/Notification';
import { CompletionCallbackWrapper } from '../adapters/CompletionCallbackWrapper';
import { NativeCommandsSender } from '../adapters/NativeCommandsSender.mock';
import { NotificationResponse } from '../interfaces/NotificationEvents';

describe('EventsRegistry', () => {
  let uut: EventsRegistry;
  const mockNativeEventsReceiver = new NativeEventsReceiver();
  const mockNativeCommandsSender = new NativeCommandsSender();
  const completionCallbackWrapper = new CompletionCallbackWrapper(mockNativeCommandsSender);

  beforeEach(() => {
    uut = new EventsRegistry(mockNativeEventsReceiver, completionCallbackWrapper);
  });

  describe('registerRemoteNotificationsReceived', () => {
    it('delegates to nativeEventsReceiver', () => {
      const cb = jest.fn();
  
      uut.registerNotificationReceived(cb);
  
      expect(mockNativeEventsReceiver.registerRemoteNotificationReceived).toHaveBeenCalledTimes(1);
      expect(mockNativeEventsReceiver.registerRemoteNotificationReceived).toHaveBeenCalledWith(expect.any(Function));
    });
  
    it('should wrap callback with completion block', () => {
      const wrappedCallback = jest.fn();
      const notification: Notification  = {identifier: 'identifier', data: {}, alert: 'alert'}
      
      uut.registerNotificationReceived(wrappedCallback);
      const call = mockNativeEventsReceiver.registerRemoteNotificationReceived.mock.calls[0][0];
      call(notification);
      
      expect(wrappedCallback).toBeCalledWith(notification, expect.any(Function));
      expect(wrappedCallback).toBeCalledTimes(1);
    });

    it('should wrap callback with completion block', () => {
      const expectedNotification: Notification  = {identifier: 'identifier', data: {}, alert: 'alert'}
      
      uut.registerNotificationReceived((notification) => {
        expect(notification).toEqual(expectedNotification);
      });
      const call = mockNativeEventsReceiver.registerRemoteNotificationReceived.mock.calls[0][0];
      call(expectedNotification);
    });

    it('calling completion should invoke finishPresentingNotification', () => {
      const notification: Notification  = {identifier: 'notificationId', data: {}, alert: 'alert'}
      const response: NotificationCompletion  = {alert: true}
      
      uut.registerNotificationReceived((notification, completion) => {
        completion(response);
        
        expect(mockNativeCommandsSender.finishPresentingNotification).toBeCalledWith(notification.identifier, response);
      });
      const call = mockNativeEventsReceiver.registerRemoteNotificationReceived.mock.calls[0][0];
      call(notification);
    });
  });

  describe('', () => {
    it('delegates to nativeEventsReceiver', () => {
      const cb = jest.fn();
  
      uut.registerRemoteNotificationOpened(cb);
  
      expect(mockNativeEventsReceiver.registerRemoteNotificationOpened).toHaveBeenCalledTimes(1);
      expect(mockNativeEventsReceiver.registerRemoteNotificationOpened).toHaveBeenCalledWith(expect.any(Function));
    });
  
    it('should wrap callback with completion block', () => {
      const wrappedCallback = jest.fn();
      const notification: Notification  = {identifier: 'identifier', data: {}, alert: 'alert'};
      const response: NotificationResponse = {notification, identifier: 'responseId'};

      uut.registerRemoteNotificationOpened(wrappedCallback);
      const call = mockNativeEventsReceiver.registerRemoteNotificationOpened.mock.calls[0][0];
      call(response);
      
      expect(wrappedCallback).toBeCalledWith(response, expect.any(Function));
      expect(wrappedCallback).toBeCalledTimes(1);
    });

    it('should wrap callback with completion block', () => {
      const notification: Notification  = {identifier: 'identifier', data: {}, alert: 'alert'}
      const expectedResponse: NotificationResponse = {notification, identifier: 'responseId'}
      
      uut.registerRemoteNotificationOpened((response) => {
        expect(response).toEqual(expectedResponse);
      });
      const call = mockNativeEventsReceiver.registerRemoteNotificationOpened.mock.calls[0][0];
      call(expectedResponse);
    });

    it('calling completion should invoke finishHandlingAction', () => {
      const notification: Notification  = {identifier: 'notificationId', data: {}, alert: 'alert'}
      const expectedResponse: NotificationResponse = {identifier: 'responseId', notification};
      
      uut.registerRemoteNotificationOpened((response, completion) => {
        completion();
        
        expect(response).toEqual(expectedResponse);
        expect(mockNativeCommandsSender.finishHandlingAction).toBeCalledWith(notification.identifier);
      });
      const call = mockNativeEventsReceiver.registerRemoteNotificationOpened.mock.calls[0][0];
      call(expectedResponse);
    });
  });

  it('delegates registerRemoteNotificationsRegistered to nativeEventsReceiver', () => {
    const cb = jest.fn();
    uut.registerRemoteNotificationsRegistered(cb);
    expect(mockNativeEventsReceiver.registerRemoteNotificationsRegistered).toHaveBeenCalledTimes(1);
    expect(mockNativeEventsReceiver.registerRemoteNotificationsRegistered).toHaveBeenCalledWith(cb);
  });

  it('delegates registerPushKitRegistered to nativeEventsReceiver', () => {
    const cb = jest.fn();
    uut.registerPushKitRegistered(cb);
    expect(mockNativeEventsReceiver.registerPushKitRegistered).toHaveBeenCalledTimes(1);
    expect(mockNativeEventsReceiver.registerPushKitRegistered).toHaveBeenCalledWith(cb);
  });

  it('delegates registerPushKitNotificationReceived to nativeEventsReceiver', () => {
    const cb = jest.fn();
    uut.registerPushKitNotificationReceived(cb);
    expect(mockNativeEventsReceiver.registerPushKitNotificationReceived).toHaveBeenCalledTimes(1);
    expect(mockNativeEventsReceiver.registerPushKitNotificationReceived).toHaveBeenCalledWith(cb);
  });

  it('delegates registerRemoteNotificationsRegistrationFailed to nativeEventsReceiver', () => {
    const cb = jest.fn();
    uut.registerRemoteNotificationsRegistrationFailed(cb);
    expect(mockNativeEventsReceiver.registerRemoteNotificationsRegistrationFailed).toHaveBeenCalledTimes(1);
    expect(mockNativeEventsReceiver.registerRemoteNotificationsRegistrationFailed).toHaveBeenCalledWith(cb);
  });
});
