import { User } from '../types/user';
import { UsersViews } from '../const/const';

export interface UserState {
  users: User[];
  usersTotal: number;
  isLoading: boolean;
  userView: UsersViews;
}

export const initialState: UserState = {
  users: [],
  usersTotal: 12,
  isLoading: false,
  userView: UsersViews.GRID,
};
