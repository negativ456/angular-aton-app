import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NotificationState } from './notification.state';
export const NOTIFICATION_STATE_NAME = 'notification';

const getNotificationState = createFeatureSelector<NotificationState>(
  NOTIFICATION_STATE_NAME
);

export const getNotifications = createSelector(getNotificationState, (state) =>
  state.notifications.slice(-3)
);
