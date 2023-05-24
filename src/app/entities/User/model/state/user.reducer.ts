import { createReducer, on } from '@ngrx/store';
import { initialState } from './user.state';
import {
  createUserSuccess,
  deleteUserSuccess,
  getUsersSuccess,
  updateUserSuccess,
  setIsLoading,
} from './user.action';

export const UserReducer = createReducer(
  initialState,
  on(getUsersSuccess, (state, action) => {
    return {
      ...state,
      users: action.users,
    };
  }),
  on(updateUserSuccess, (state, action) => {
    return {
      ...state,
      users: state.users.map((user) =>
        user.id === action.user.id ? action.user : user
      ),
    };
  }),
  on(deleteUserSuccess, (state, action) => {
    return {
      ...state,
      users: state.users.filter((user) => user.id !== action.user.id),
    };
  }),
  on(createUserSuccess, (state, action) => {
    console.log([...state.users, action.user]);
    return {
      ...state,
      users: [...state.users, action.user],
    };
  }),
  on(setIsLoading, (state, action) => {
    return {
      ...state,
      isLoading: action.isLoading,
    };
  })
);
