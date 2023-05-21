import { createAction, props } from '@ngrx/store';
import { User } from '../types/user';

export const getUsersStart = createAction('[users] get users');
export const getUsersSuccess = createAction(
  '[users] get users success',
  props<{ users: User[] }>()
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
