import { createReducer, on } from '@ngrx/store';
import { initialState } from './notification.state';
import { closeNotification, openNotification } from './notification.actions';
import { NotificationType } from '../const/notificationConst';

export const NotificationReducer = createReducer(
  initialState,
  on(openNotification, (state, action) => {
    return {
      ...state,
      message: action.message,
      notificationType: action.notificationType,
      open: true,
    };
  }),
  on(closeNotification, (state, action) => {
    return {
      ...state,
      message: '',
      notificationType: NotificationType.SUCCESS,
      open: false,
    };
  })
);
