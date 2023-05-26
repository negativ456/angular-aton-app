import { createAction, props } from '@ngrx/store';
import { User } from '../types/user';
import { UsersViews } from '../const/const';

export const getUsersStart = createAction(
  '[users] get users',
  props<{ page: number }>()
);
export const getUsersSuccess = createAction(
  '[users] get users success',
  props<{ users: User[]; totalUsers: number }>()
);

export const updateUserStart = createAction(
  '[users] update user',
  props<{ user: User }>()
);
export const updateUserSuccess = createAction(
  '[users] update user success',
  props<{ user: User }>()
);
export const deleteUserStart = createAction(
  '[users] delete user',
  props<{ user: User }>()
);
export const deleteUserSuccess = createAction(
  '[users] delete user success',
  props<{ user: User }>()
);

export const createUserStart = createAction(
  '[users] create user start',
  props<{ user: Omit<User, 'id'> }>()
);

export const createUserSuccess = createAction(
  '[users] create user success',
  props<{ user: User }>()
);

export const setIsLoading = createAction(
  '[users] set is loading',
  props<{ isLoading: boolean }>()
);

export const setUserView = createAction(
  '[users] set user view',
  props<{ userView: UsersViews }>()
);

export const autoUserView = createAction('[users] auto user view');
