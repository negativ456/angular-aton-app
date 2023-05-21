import { NotificationType } from '../const/notificationConst';

export interface NotificationState {
  notificationType: NotificationType;
  message: string;
  open: boolean;
}

export const initialState: NotificationState = {
  notificationType: NotificationType.SUCCESS,
  message: '',
  open: false,
};
