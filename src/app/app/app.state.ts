import { AuthState } from '../features/AuthForm/model/store/auth.state';
import { ActionReducer } from '@ngrx/store';
import { AuthReducer } from '../features/AuthForm/model/store/auth.reducer';
import { UserState } from '../entities/User/model/state/user.state';
import { UserReducer } from '../entities/User/model/state/user.reducer';
import { NotificationState } from '../entities/Notification/model/state/notification.state';
import { NotificationReducer } from '../entities/Notification/model/state/notification.reducer';

export interface AppState {
  auth: AuthState;
  users: UserState;
  notification: NotificationState;
}

export type AppStateKey = keyof AppState;

export type ReducerList = {
  [name in AppStateKey]: ActionReducer<NonNullable<AppState[name]>>;
};

export const appReducer: ReducerList = {
  auth: AuthReducer,
  users: UserReducer,
  notification: NotificationReducer,
};
