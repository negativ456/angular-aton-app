import { createAction, props } from '@ngrx/store';
import { UserData } from '../types/types';
export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login Success';

export const SIGNUP_START = '[auth page] signup start';
export const SIGNUP_SUCCESS = '[auth page] signup success';
export const AUTO_LOGIN_ACTION = '[auth page] auto login';
export const LOGOUT_ACTION = '[auth page] logout';
export const SET_LOADING = '[loading] set loading';

export const loginStart = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ userData: UserData }>()
);

export const signupStart = createAction(
  SIGNUP_START,
  props<{ email: string; password: string }>()
);

export const signupSuccess = createAction(
  SIGNUP_SUCCESS,
  props<{ userData: UserData }>()
);

export const setIsLoading = createAction(
  SET_LOADING,
  props<{ isLoading: boolean }>()
);

export const autoLogin = createAction(AUTO_LOGIN_ACTION);
export const logout = createAction(LOGOUT_ACTION);
