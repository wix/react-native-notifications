import { NativeModules } from 'react-native';
import { Notification } from '../interfaces/Notification';

interface NativeCommandsModule {
  getInitialNotification(): Promise<any>;
  localNotification(notification: Notification, id: string): Promise<Notification>;
  requestPermissionsWithCategories(categories: any): Promise<any>;
}

export class NativeCommandsSender {
  private readonly nativeCommandsModule: NativeCommandsModule;
  constructor() {
    this.nativeCommandsModule = NativeModules.RNBridgeModule;
  }

  sendLocalNotification(notification: Notification, id: string) {
    return this.nativeCommandsModule.localNotification(notification, id);
  }

  getInitialNotification() {
    return this.nativeCommandsModule.getInitialNotification();
  }
  
  requestPermissions() {
    return this.nativeCommandsModule.requestPermissionsWithCategories([]);
  }
}
