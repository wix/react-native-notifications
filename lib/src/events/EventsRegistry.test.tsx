import { EventsRegistry } from './EventsRegistry';
import { NativeEventsReceiver } from '../adapters/NativeEventsReceiver.mock';

describe('EventsRegistry', () => {
  let uut: EventsRegistry;
  const mockNativeEventsReceiver = new NativeEventsReceiver();

  beforeEach(() => {
    uut = new EventsRegistry(mockNativeEventsReceiver);
  });

  it('delegates registerRemoteNotificationsRegistered to nativeEventsReceiver', () => {
    const cb = jest.fn();
    uut.registerRemoteNotificationsRegistered(cb);
    expect(mockNativeEventsReceiver.registerRemoteNotificationsRegistered).toHaveBeenCalledTimes(1);
    expect(mockNativeEventsReceiver.registerRemoteNotificationsRegistered).toHaveBeenCalledWith(cb);
  });

  it('delegates registerRemoteNotificationsReceived to nativeEventsReceiver', () => {
    const cb = jest.fn();
    uut.registerNotificationReceived(cb);
    expect(mockNativeEventsReceiver.registerRemoteNotificationReceived).toHaveBeenCalledTimes(1);
    expect(mockNativeEventsReceiver.registerRemoteNotificationReceived).toHaveBeenCalledWith(cb);
  });
});
