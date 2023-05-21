import { createAction, props } from '@ngrx/store';
export const SET_LOADING_ACTION = '[common state] set is loading';
export const SET_ERROR_MESSAGE = '[common state] set error message';

export const setIsLoading = createAction(
  SET_LOADING_ACTION,
  props<{ status: boolean }>()
);

export const setErrorMessage = createAction(
  SET_ERROR_MESSAGE,
  props<{ message: string }>()
);
