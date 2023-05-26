import { UserData } from '../types/types';
export interface AuthState {
  userData: UserData | null;
  isLoading: boolean;
}
// Создаем стейт
export const initialState: AuthState = {
  userData: null,
  isLoading: false,
};
