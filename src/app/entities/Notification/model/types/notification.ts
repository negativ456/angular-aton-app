import { NotificationType } from '../const/notificationConst';

export interface Notification {
  id: number;
  notificationType: NotificationType;
  message: string;
}
