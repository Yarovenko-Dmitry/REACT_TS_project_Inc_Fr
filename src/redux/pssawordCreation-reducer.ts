import {Dispatch} from 'redux';
import {passwordRecovery} from '../api/api';

export type PssawordCreationReducerType = {
	error: string
	success: boolean
	loading: boolean
};

let initialState: PssawordCreationReducerType = {
	error: '',
	success: false,
	loading: false,
};

const pssawordCreationReducer = (state: PssawordCreationReducerType = initialState,
	action: ActionTypes) => {
	switch (action.type) {
		case 'pwCreation/SET_SUCCESS':
			return {
				...state, success: action.success
			};
		case 'pwCreation/SET_LOADING':
			return {
				...state, loading: action.loading
			};
		case 'pwCreation/SET_ERROR':
			return {
				...state, error: action.error
			};
		default:
			return state;
	}
};

const setSuccessAC = (success: boolean) => ({
	type: 'pwCreation/SET_SUCCESS',
	success
} as const);
const setLoadingAC = (loading: boolean) => ({
	type: 'pwCreation/SET_LOADING',
	loading
} as const);
export const setErrorAC = (error: string) => ({
	type: 'pwCreation/SET_ERROR',
	error
} as const);

type ActionTypes =
	ReturnType<typeof setErrorAC>
	| ReturnType<typeof setSuccessAC>
	| ReturnType<typeof setLoadingAC>

export const setNewPasswordTC = (password: string,
	token: string) => (dispatch: Dispatch<ActionTypes>) => {
	dispatch(setLoadingAC(true));
	passwordRecovery.newPassword(password, token).then(
		res => {
			if (res.status === 200) {
				dispatch(setSuccessAC(true));
				dispatch(setErrorAC(''));
				dispatch(setLoadingAC(false));
			}
		}
	).catch(error => {
		const {response} = error;
		const {request, ...errorObject} = response;
		dispatch(setSuccessAC(false));
		dispatch(setLoadingAC(false));
		return dispatch(setErrorAC(errorObject.data.error));
	});
};

export default pssawordCreationReducer;