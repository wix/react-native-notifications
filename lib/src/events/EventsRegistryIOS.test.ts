import { EventsRegistryIOS } from './EventsRegistryIOS';
import { CompletionCallbackWrapper } from '../adapters/CompletionCallbackWrapper';
import { NativeCommandsSender } from '../adapters/NativeCommandsSender.mock';
import { NativeEventsReceiver } from '../adapters/NativeEventsReceiver.mock';

describe('EventsRegistryIOS', () => {
  let uut: EventsRegistryIOS;
  const mockNativeEventsReceiver = new NativeEventsReceiver();
  const mockNativeCommandsSender = new NativeCommandsSender();
  const completionCallbackWrapper = new CompletionCallbackWrapper(mockNativeCommandsSender);

  beforeEach(() => {
    uut = new EventsRegistryIOS(mockNativeEventsReceiver, completionCallbackWrapper);
  });

  it('delegates registerPushKitRegistered to nativeEventsReceiver', () => {
    const cb = jest.fn();
    uut.registerPushKitRegistered(cb);
    expect(mockNativeEventsReceiver.registerPushKitRegistered).toHaveBeenCalledTimes(1);
    expect(mockNativeEventsReceiver.registerPushKitRegistered).toHaveBeenCalledWith(cb);
  });

  fit('delegates registerPushKitNotificationReceived to nativeEventsReceiver', () => {
    const cb = jest.fn();
    uut.registerPushKitNotificationReceived(cb);
    expect(mockNativeEventsReceiver.registerPushKitNotificationReceived).toHaveBeenCalledTimes(1);
    //expect(mockNativeEventsReceiver.registerPushKitNotificationReceived).toHaveBeenCalledWith(cb);
    expect(mockNativeEventsReceiver.registerPushKitNotificationReceived).toHaveBeenCalledWith(expect.any(Function));
  });
});
