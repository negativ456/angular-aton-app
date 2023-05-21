import { createReducer, on } from '@ngrx/store';
import { initialState } from './user.state';
import {
  deleteUserSuccess,
  getUsersSuccess,
  updateUserSuccess,
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
    console.log(action.user);
    return {
      ...state,
      users: state.users.filter((user) => user.id !== action.user.id),
    };
  })
);
