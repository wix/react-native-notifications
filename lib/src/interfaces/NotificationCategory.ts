export class NotificationCategory {
  identifier: string
  actions?: NotificationAction[];

  constructor(identifier: string, actions?: NotificationAction[]) {
    this.identifier = identifier;
    this.actions = actions;
  }
}

export interface NotificationTextInput {
  buttonTitle: string;
  placeholder: string;
}

export type ActivationMode = 'background' | 'foreground' | 'authenticationRequired' | 'destructive';

export class NotificationAction {
  identifier: string;
  activationMode: ActivationMode;
  title: string;
  authenticationRequired: boolean;
  textInput?: NotificationTextInput;

  constructor(identifier: string, activationMode: ActivationMode, title: string, authenticationRequired: boolean, textInput?: NotificationTextInput) {
    this.identifier = identifier;
    this.activationMode = activationMode;
    this.title = title;
    this.authenticationRequired = authenticationRequired;
    this.textInput = textInput;
  }
}