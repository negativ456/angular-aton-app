import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NotificationState } from './notification.state';
export const NOTIFICATION_STATE_NAME = 'notification';

const getNotificationState = createFeatureSelector<NotificationState>(
  NOTIFICATION_STATE_NAME
);

export const getNotificationOpen = createSelector(
  getNotificationState,
  (state) => state.open
);

export const getNotificationMessage = createSelector(
  getNotificationState,
  (state) => state.message
);

export const getNotificationType = createSelector(
  getNotificationState,
  (state) => state.notificationType
);
