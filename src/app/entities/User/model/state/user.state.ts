import { User } from '../types/user';

export interface UserState {
  users: User[];
  usersTotal: number;
  isLoading: boolean;
}

export const initialState: UserState = {
  users: [],
  usersTotal: 12,
  isLoading: false,
};
