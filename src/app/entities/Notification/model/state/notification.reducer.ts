import { createReducer, on } from '@ngrx/store';
import { initialState } from './notification.state';
import { addNotification, removeNotification } from './notification.actions';

export const NotificationReducer = createReducer(
  initialState,
  on(addNotification, (state, action) => {
    return {
      ...state,
      notifications: [
        ...state.notifications,
        { id: state.notifications.length, ...action.notification },
      ],
    };
  }),
  on(removeNotification, (state, action) => {
    return {
      ...state,
      notifications: state.notifications.filter(
        (item) => item.id !== action.id
      ),
    };
  })
);
