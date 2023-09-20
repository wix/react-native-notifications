export declare class Notification {
    identifier: string;
    payload: any;
    constructor(payload: object);
    get title(): string;
    get body(): string;
    get sound(): string;
    get badge(): number;
    get type(): string;
    get thread(): string;
}
