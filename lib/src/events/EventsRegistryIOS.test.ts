import { EventsRegistryIOS } from './EventsRegistryIOS';
import { NativeEventsReceiver } from '../adapters/NativeEventsReceiver.mock';

describe('EventsRegistryIOS', () => {
  let uut: EventsRegistryIOS;
  const mockNativeEventsReceiver = new NativeEventsReceiver();

  beforeEach(() => {
    uut = new EventsRegistryIOS(mockNativeEventsReceiver);
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
});
