export class NotificationCategory {
  identifier: string
  actions: [NotificationAction?];

  constructor(identifier: string, actions: [NotificationAction?]) {
    this.identifier = identifier;
    this.actions = actions;
  }
}

export interface NotificationTextInput {
  buttonTitle: string;
  placeholder: string;
}

export class NotificationAction {
  identifier: string;
  activationMode: 'foreground' | 'authenticationRequired' | 'destructive';
  title: string;
  authenticationRequired: boolean;
  textInput: NotificationTextInput;

  constructor(identifier: string, activationMode: 'foreground' | 'authenticationRequired' | 'destructive', title: string, authenticationRequired: boolean, textInput: NotificationTextInput) {
    this.identifier = identifier;
    this.activationMode = activationMode;
    this.title = title;
    this.authenticationRequired = authenticationRequired;
    this.textInput = textInput;
  }
}