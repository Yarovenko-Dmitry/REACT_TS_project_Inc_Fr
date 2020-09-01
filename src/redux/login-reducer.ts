import {Dispatch} from 'redux';
import {authAPI, UsersDataType} from '../api/api';
import {AppRootStateType} from "./redux-store";
import {ThunkDispatch} from 'redux-thunk';


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

const loginReducer = (state: LoginReducerType = internalState, action: ActionTypes) => {

    switch (action.type) {
        case 'login/SET_USER_DATA':
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
        case 'login/AUTH-ME':
            return {...state, isAuth: action.isAuth, userProfile: action.userProfile};
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
export const authMeAC = (isAuth: boolean, userProfile: UsersDataType) => ({
    type: 'login/AUTH-ME',
    isAuth,
    userProfile
} as const);

type ActionTypes =
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setUserDataAC>
    | ReturnType<typeof setLoadingAC>
    | ReturnType<typeof authMeAC>

export const setLoginTC = (email: string, password: string, rememberMe: boolean = false) => (dispatch: Dispatch<ActionTypes>) => {
    authAPI.login(email, password, rememberMe)
        .then(res => {

                dispatch(setUserDataAC(res.data))
            }
        )
        // .catch(error => {
        //     const {response} = error;
        //     const {request, ...errorObject} = response;
        //     // dispatch(setSuccessAC(false));
        //     dispatch(setLoadingAC(false));
        //     return dispatch(setErrorAC(errorObject.data.error));
        // });
};

export const authMeTC = () => async (dispatch: ThunkDispatch<AppRootStateType, {}, ActionTypes>) => {
    try {
        const res = await authAPI.me();
        dispatch(authMeAC(true, res));
    } catch (e) {
        console.log(e.response.data.error)
    }
}

export default loginReducer