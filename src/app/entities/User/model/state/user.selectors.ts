import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';

export const USERS_STATE_NAME = 'users';

const getUsersState = createFeatureSelector<UserState>(USERS_STATE_NAME);

export const getUsers = createSelector(getUsersState, (state) => state.users);
export const getUsersLoading = createSelector(
  getUsersState,
  (state) => state.isLoading
);
export const getTotalUsers = createSelector(
  getUsersState,
  (state) => state.usersTotal
);
