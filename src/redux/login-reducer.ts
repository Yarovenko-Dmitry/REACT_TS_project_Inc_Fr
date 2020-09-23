import {Dispatch} from 'redux';
import {authAPI, UsersDataType} from '../api/api';

export type LoginReducerType = {
  isAuth?: boolean,
  userProfile: UsersDataType
};

let internalState: LoginReducerType = {
  isAuth: false,
  userProfile: {
    _id: '',
    email: '',
    name: '',
    avatar: '',
    publicCardPacksCount: 0,
    created: 'YYYY-MM-DD',
    updated: 'YYYY-MM-DD',
    isAdmin: false,
    verified: false,
    rememberMe: false,
    error: '',
  }
};
debugger
 export const loginReducer = (state: LoginReducerType = internalState, action: ActionTypes): LoginReducerType => {

  switch (action.type) {
    case 'login/SET_USER_DATA':
      return {
        ...state,
        userProfile: action.data,
        isAuth: true
      };
    case 'login/LOGOUT':
      return {
        ...state,
        isAuth: false
      };
    default:
      return state
  }
}

export const loginAC = (data: UsersDataType) => ({
  type: 'login/SET_USER_DATA',
  data
} as const);

const logoutAC = () => ({
  type: 'login/LOGOUT',
} as const);

type ActionTypes =
  | ReturnType<typeof loginAC>
  | ReturnType<typeof logoutAC>;

export const setLoginTC = (email: string, password: string, rememberMe: boolean = false) => (dispatch: Dispatch<ActionTypes>) => {
  authAPI.login(email, password, rememberMe)
    .then(res => {
        dispatch(loginAC(res.data))
      }
    )
};

export const logoutTC = () => (dispatch: Dispatch) => {
  authAPI.logout()
    .then(res => {
      if (res.data.info === 'logOut success —ฅ/ᐠ.̫ .ᐟ\\ฅ—') {
        dispatch(logoutAC())
      }
    })
}


