import { createAction, props } from '@ngrx/store';
import { Notification } from '../types/notification';

export const addNotification = createAction(
  '[notification] add',
  props<{ notification: Omit<Notification, 'id'> }>()
);

export const removeNotification = createAction(
  '[notification] remove',
  props<{ id: number }>()
);
