export declare class NotificationCategory {
    identifier: string;
    actions: [NotificationAction?];
    constructor(identifier: string, actions: [NotificationAction?]);
}
export interface NotificationTextInput {
    buttonTitle: string;
    placeholder: string;
}
export declare class NotificationAction {
    identifier: string;
    activationMode: 'foreground' | 'authenticationRequired' | 'destructive';
    title: string;
    authenticationRequired: boolean;
    textInput: NotificationTextInput;
    constructor(identifier: string, activationMode: 'foreground' | 'authenticationRequired' | 'destructive', title: string, authenticationRequired: boolean, textInput: NotificationTextInput);
}
