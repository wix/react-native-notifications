export class NotificationCategory {
  identifier: string
  actions?: NotificationAction[];

  constructor({ identifier, actions }: { identifier: string, actions?: NotificationAction[] }) {
    this.identifier = identifier;
    this.actions = actions;
  }
}

export interface NotificationTextInput {
  buttonTitle: string;
  placeholder: string;
}

export type NotificationActionActivationMode = 'foreground' | 'authenticationRequired' | 'destructive';

export class NotificationAction {
  identifier: string;
  activationMode: NotificationActionActivationMode;
  title: string;
  authenticationRequired: boolean;
  textInput?: NotificationTextInput;

  constructor({ identifier, activationMode, title, authenticationRequired = true, textInput }: { identifier: string, activationMode: NotificationActionActivationMode, title: string, authenticationRequired?: boolean, textInput?: NotificationTextInput}) {
    this.identifier = identifier;
    this.activationMode = activationMode;
    this.title = title;
    this.authenticationRequired = authenticationRequired;
    this.textInput = textInput;
  }
}