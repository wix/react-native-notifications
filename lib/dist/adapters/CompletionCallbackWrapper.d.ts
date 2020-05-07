import { NativeCommandsSender } from './NativeCommandsSender';
import { Notification } from "..";
import { NotificationActionResponse } from '../interfaces/NotificationActionResponse';
export declare class CompletionCallbackWrapper {
    private readonly nativeCommandsSender;
    constructor(nativeCommandsSender: NativeCommandsSender);
    wrapReceivedBackgroundCallback(callback: Function): (notification: Notification) => void;
    wrapReceivedForegroundCallback(callback: Function): (notification: Notification) => void;
    private wrapReceivedAndInvoke;
    wrapOpenedCallback(callback: Function): (notification: Notification, completion: () => void, actionResponse?: NotificationActionResponse) => void;
    private applicationIsVisible;
}
