export interface NotificationCompletion {
  badge?: boolean;
  alert?: boolean;
  sound?: boolean;
  list?: boolean;
}

export enum NotificationBackgroundFetchResult {
  NEW_DATA = "newData",
  NO_DATA = "noData",
  FAILED = "failed",
}
