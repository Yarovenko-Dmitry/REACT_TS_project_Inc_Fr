import {Dispatch} from 'redux';
import {authAPI, UsersDataType} from '../api/api';
import {AppRootStateType} from './redux-store';
import { ThunkDispatch } from 'redux-thunk';

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

const loginReducer = (state: LoginReducerType = internalState, action: ActionTypes): LoginReducerType => {

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
        // Андрея - не трогать
        case 'login/AUTH-ME':
            return {...state, isAuth: action.isAuth, userProfile: action.userProfile};
// Андрея - не трогать
        default:
            return state;
    }
}

const loginAC = (data: UsersDataType) => ({
    type: 'login/SET_USER_DATA',
    data
} as const);

const logoutAC = () => ({
    type: 'login/LOGOUT',
} as const);

type ActionTypes =
    | ReturnType<typeof loginAC>
    | ReturnType<typeof logoutAC>
    // Андрея - не трогать
    | ReturnType<typeof authMeAC>
// Андрея - не трогать

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

// Андрея - не трогать
export const authMeAC = (isAuth: boolean, userProfile: UsersDataType) => ({
    type: 'login/AUTH-ME',
    isAuth,
    userProfile
} as const);

export const authMeTC = () => async (dispatch: ThunkDispatch<AppRootStateType, {}, ActionTypes>) => {
    try {
        const res = await authAPI.me();
        dispatch(authMeAC(true, res));
    } catch (e) {
        console.log(e.response.data.error)
    }
}
// Андрея - не трогать


export default loginReducer

