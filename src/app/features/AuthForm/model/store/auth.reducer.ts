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
  // Слушаем action loginSuccess и записываем данные пользователя в store
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      userData: action.userData,
    };
  }),
  // Слушаем action signupSuccess и записываем данные пользователя в store
  on(signupSuccess, (state, action) => {
    return {
      ...state,
      userData: action.userData,
    };
  }),
  // Слушаем action logout и записываем null в качестве данных пользователя в store
  on(logout, (state) => {
    return {
      ...state,
      user: null,
    };
  }),
  // Слушаем action setIsLoading и записываем значение флага isLoading в store
  on(setIsLoading, (state, action) => {
    return {
      ...state,
      isLoading: action.isLoading,
    };
  })
);
