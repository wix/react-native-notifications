export interface Notification {
  data: object;
  alert: string
  sound?: string;
  badge?: number;
  type?: string;
  thread?: string;
}
