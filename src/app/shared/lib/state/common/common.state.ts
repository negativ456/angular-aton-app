export interface CommonState {
  isLoading: boolean;
  errorMessage: string;
}

export const initialState: CommonState = {
  isLoading: false,
  errorMessage: '',
};
