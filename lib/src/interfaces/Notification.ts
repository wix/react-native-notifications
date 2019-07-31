export interface Notification {
  identifier: string;
  data: object;
  alert: string
  sound?: string;
  badge?: number;
  type?: string;
  thread?: string;
}

export interface NotificationPermissions {
  badge: boolean;
  alert: boolean;
  sound: boolean;
}

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

export interface NotificationActionResponse {
  identifier: string;
  text: string;
}

export interface NotificationCompletion {
  badge?: boolean;
  alert?: boolean;
  sound?: boolean;
}
