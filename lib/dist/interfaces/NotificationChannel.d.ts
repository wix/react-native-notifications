export declare class NotificationChannel {
    channelId: string;
    name: string;
    importance: -1000 | 0 | 1 | 2 | 3 | 4 | 5;
    description?: string;
    enableLights?: boolean;
    enableVibration?: boolean;
    groupId?: string;
    lightColor?: string;
    showBadge?: boolean;
    soundFile?: string;
    vibrationPattern?: number[];
    constructor(channelId: string, name: string, importance: -1000 | 0 | 1 | 2 | 3 | 4 | 5, description?: string, enableLights?: boolean, enableVibration?: boolean, groupId?: string, lightColor?: string, showBadge?: boolean, soundFile?: string, vibrationPattern?: number[]);
}
