import {Dispatch} from 'redux';
import {authAPI} from '../api/api';


export type LoginReducerType = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  isAdmin: boolean;
  verified: boolean;
  rememberMe: boolean;
  error: string;
};

let internalState: LoginReducerType = {
  _id: '',
  email: '',
  name: '',
  avatar: '',
  publicCardPacksCount: 0,
  created: '',
  updated: '',
  isAdmin: false,
  verified: false,
  rememberMe: false,
  error: '',
};

const loginReducer = (state: LoginReducerType = internalState, action: ActionTypes) => {

  switch (action.type) {
    case 'login/SET_USER_DATA':
      debugger
      return {
        ...action.data
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

const setUserDataAC = (data: LoginReducerType) => ({
  type: 'login/SET_USER_DATA',
  data
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
  | ReturnType<typeof setUserDataAC>
  | ReturnType<typeof setLoadingAC>

export const setLoginTC = (email: string, password: string, rememberMe: boolean = false) => (dispatch: Dispatch<ActionTypes>) => {
  authAPI.login(email, password, rememberMe)
    .then(res => {

        dispatch(setUserDataAC(res.data))
      }
    )
    .catch(error => {
      const {response} = error;
      const {request, ...errorObject} = response;
      // dispatch(setSuccessAC(false));
      dispatch(setLoadingAC(false));
      return dispatch(setErrorAC(errorObject.data.error));
    });
};


export default loginReducer