"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotificationChannel {
    constructor(channelId, name, importance, description, enableLights, enableVibration, groupId, lightColor, showBadge, soundFile, vibrationPattern) {
        this.channelId = channelId;
        this.name = name;
        this.importance = importance;
        this.description = description;
        this.enableLights = enableLights;
        this.enableVibration = enableVibration;
        this.groupId = groupId;
        this.lightColor = lightColor;
        this.showBadge = showBadge;
        this.soundFile = soundFile;
        this.vibrationPattern = vibrationPattern;
    }
}
exports.NotificationChannel = NotificationChannel;
