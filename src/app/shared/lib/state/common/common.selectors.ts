import { CommonState } from './common.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const COMMON_STATE_NAME = 'common';

const getSharedState = createFeatureSelector<CommonState>(COMMON_STATE_NAME);

export const getLoading = createSelector(getSharedState, (state) => {
  return state.isLoading;
});

export const getErrorMessage = createSelector(getSharedState, (state) => {
  return state.errorMessage;
});
