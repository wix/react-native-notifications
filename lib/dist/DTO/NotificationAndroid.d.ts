import { Notification } from './Notification';
export declare class NotificationAndroid extends Notification {
    constructor(payload: object);
    readonly title: string;
    readonly body: string;
    readonly sound: string;
}
