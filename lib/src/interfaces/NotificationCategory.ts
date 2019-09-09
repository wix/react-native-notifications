export interface NotificationCategory {
  identifier: string
  actions: [NotificationAction?];
}


export interface NotificationTextInput {
  buttonTitle: string;
  placeholder: string;
}

export interface NotificationAction {
  identifier: string;
  activationMode: 'foreground' | 'authenticationRequired' | 'destructive';
  title: string;
  authenticationRequired: boolean;
  textInput: NotificationTextInput
}