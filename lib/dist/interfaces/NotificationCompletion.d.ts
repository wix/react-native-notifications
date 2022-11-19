export interface NotificationCompletion {
    badge?: boolean;
    alert?: boolean;
    sound?: boolean;
}
export declare enum NotificationBackgroundFetchResult {
    NEW_DATA = "newData",
    NO_DATA = "noData",
    FAILED = "failed"
}
