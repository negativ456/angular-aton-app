import { User } from '../types/user';

export interface UserState {
  users: User[];
}

export const initialState: UserState = {
  users: [],
};
