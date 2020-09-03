import {passwordRecovery} from '../api/api';
import {Dispatch} from 'redux';

export type PasswordRecoveryReducerType = {
	error: string
	success: boolean
	loading: boolean
};

let initialState: PasswordRecoveryReducerType = {
	error: '',
	success: false,
	loading: false
};

const passwordRecoveryReducer = (state: PasswordRecoveryReducerType = initialState,
	action: ActionTypes) => {
	switch (action.type) {
		case 'pwRecovery/SET_ERROR':
			return {
				...state, error: action.error
			};
		case 'pwRecovery/SET_SUCCESS':
			return {
				...state, success: action.success
			};
		case 'pwRecovery/SET_LOADING':
			return {
				...state, loading: action.loading
			};
		default:
			return state;
	}
};

export const setErrorAC = (error: string) => ({
	type: 'pwRecovery/SET_ERROR',
	error
} as const);

export const setSuccessAC = (success: boolean) => ({
	type: 'pwRecovery/SET_SUCCESS',
	success
} as const);
export const setLoadingAC = (loading: boolean) => ({
	type: 'pwRecovery/SET_LOADING',
	loading
} as const);

type ActionTypes = ReturnType<typeof setErrorAC> | ReturnType<typeof setSuccessAC> | ReturnType<typeof setLoadingAC>

export const recoverPasswordTC = (email: string) => (dispatch: Dispatch<ActionTypes>) => {
	dispatch(setLoadingAC(true))
	passwordRecovery.getToken(email).then(
		res => {
			dispatch(setSuccessAC(res.data.success));
			dispatch(setErrorAC(''));
			dispatch(setLoadingAC(false))
		}
	).catch(error => {
		const {response} = error;
		const {request, ...errorObject} = response;
		dispatch(setSuccessAC(false));
		dispatch(setLoadingAC(false))
		return dispatch(setErrorAC(errorObject.data.error));
	});
};

export default passwordRecoveryReducer;