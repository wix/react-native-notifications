import { Notification } from './Notification';
export declare class NotificationAndroid extends Notification {
    constructor(payload: object);
    get title(): string;
    get body(): string;
    get sound(): string;
}
