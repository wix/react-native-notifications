export declare class NotificationCategory {
    identifier: string;
    actions?: NotificationAction[];
    constructor(identifier: string, actions?: NotificationAction[]);
}
export interface NotificationTextInput {
    buttonTitle: string;
    placeholder: string;
}
export type ActivationMode = 'background' | 'foreground' | 'authenticationRequired' | 'destructive';
export declare class NotificationAction {
    identifier: string;
    activationMode: ActivationMode;
    title: string;
    authenticationRequired: boolean;
    textInput?: NotificationTextInput;
    constructor(identifier: string, activationMode: ActivationMode, title: string, authenticationRequired: boolean, textInput?: NotificationTextInput);
}
