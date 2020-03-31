"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventsRegistryIOS_1 = require("./EventsRegistryIOS");
const NativeEventsReceiver_mock_1 = require("../adapters/NativeEventsReceiver.mock");
describe('EventsRegistryIOS', () => {
    let uut;
    const mockNativeEventsReceiver = new NativeEventsReceiver_mock_1.NativeEventsReceiver();
    beforeEach(() => {
        uut = new EventsRegistryIOS_1.EventsRegistryIOS(mockNativeEventsReceiver);
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
