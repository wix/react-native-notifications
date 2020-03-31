export declare class Notification {
    identifier?: string;
    payload: any;
    constructor(payload: object);
    readonly title: string;
    readonly body: string;
    readonly sound: string;
    readonly badge: number;
    readonly type: string;
    readonly thread: string;
}
