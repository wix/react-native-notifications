import { Notification } from './Notification';
export declare class NotificationIOS extends Notification {
    identifier: string;
    constructor(payload: object);
    get aps(): any;
    get alert(): any;
    get title(): string;
    get body(): string;
    get sound(): string;
    get badge(): number;
    get thread(): string;
}
