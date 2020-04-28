export class NotificationChannel {
  channelId: string
  name: string
  importance: -1000 | 0 | 1 | 2 | 3 | 4 | 5
  description?: string
  enableLights?: boolean
  enableVibration?: boolean
  groupId?: string
  lightColor?: string
  showBadge?: boolean
  soundFile?: string // "sound_file.mp3" for the file "android/app/src/main/res/raw/sound_file.mp3"
  vibrationPattern?: number[]

  constructor(
    {
      channelId,
      name,
      importance,
      description,
      enableLights,
      enableVibration,
      groupId,
      lightColor,
      showBadge,
      soundFile,
      vibrationPattern
    }: {
      channelId: string,
      name: string,
      importance: -1000 | 0 | 1 | 2 | 3 | 4 | 5,
      description?: string,
      enableLights?: boolean,
      enableVibration?: boolean,
      groupId?: string,
      lightColor?: string,
      showBadge?: boolean,
      soundFile?: string,
      vibrationPattern?: number[],
    }
  ) {
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
