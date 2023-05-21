import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';
export const AUTH_STATE_NAME = 'auth';

const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const getLoading = createSelector(
  getAuthState,
  (state) => state.isLoading
);

export const isAuthenticated = createSelector(getAuthState, (state) => {
  return !!state.userData;
});
