import {Dispatch} from 'redux';
import {passwordRecovery} from '../api/api';


export type LoginReducerType = {
  error: string
  success: boolean
  loading: boolean
};

let internalState: LoginReducerType = {
  error: '',
  success: false,
  loading: false
};

const loginReducer = (state: LoginReducerType = internalState, action: ActionTypes) => {

  switch (action.type) {
    case 'login/SET_SUCCESS':
      return {
        ...state, success: action.success
      };
    case 'login/SET_LOADING':
      return {
        ...state, loading: action.loading
      };
    case 'login/SET_ERROR':
      return {
        ...state, error: action.error
      };
    default:
      return state;
  }
}

const setSuccessAC = (success: boolean) => ({
  type: 'login/SET_SUCCESS',
  success
} as const);
const setLoadingAC = (loading: boolean) => ({
  type: 'login/SET_LOADING',
  loading
} as const);
export const setErrorAC = (error: string) => ({
  type: 'login/SET_ERROR',
  error
} as const);

type ActionTypes =
  | ReturnType<typeof setErrorAC>
  | ReturnType<typeof setSuccessAC>
  | ReturnType<typeof setLoadingAC>

export const setLoginTC = (password: string, token: string) => (dispatch: Dispatch<ActionTypes>) => {

};

export default loginReducer