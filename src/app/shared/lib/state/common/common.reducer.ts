import { Action, createReducer, on } from '@ngrx/store';
import { CommonState, initialState } from './common.state';
import { setErrorMessage, setIsLoading } from './common.actions';

export const CommonReducer = createReducer(
  initialState,
  on(setIsLoading, (state, action) => {
    return {
      ...state,
      isLoading: action.status,
    };
  }),
  on(setErrorMessage, (state, action) => {
    return {
      ...state,
      errorMessage: action.message,
    };
  })
);

// export function CommonReducer(state: CommonState, action: Action) {
//   return _commonReducer(state, action);
// }
