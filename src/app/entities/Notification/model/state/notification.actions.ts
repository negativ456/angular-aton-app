import { createAction, props } from '@ngrx/store';
import { NotificationType } from '../const/notificationConst';

export const openNotification = createAction(
  '[notification] open',
  props<{ message: string; notificationType: NotificationType }>()
);
export const closeNotification = createAction('[notification] close');
