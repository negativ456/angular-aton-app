import {
  loginSuccess,
  signupSuccess,
  logout,
  setIsLoading,
} from './auth.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from './auth.state';

export const AuthReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      userData: action.userData,
    };
  }),
  on(signupSuccess, (state, action) => {
    return {
      ...state,
      userData: action.userData,
    };
  }),
  on(logout, (state) => {
    return {
      ...state,
      user: null,
    };
  }),
  on(setIsLoading, (state, action) => {
    return {
      ...state,
      isLoading: action.isLoading,
    };
  })
);
