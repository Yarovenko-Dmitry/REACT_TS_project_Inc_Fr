import {Dispatch} from 'redux';
import {mainContent} from '../api/api';

export type PacksReducerType = {
	cardPacks: PackType[] | [],
	page: number,
	pageCount: number
	cardPacksTotalCount: number
};

export type PackType = {
	cardsCount: number
	created: string
	grade: number
	more_id: string
	name: string
	path: string
	private: boolean
	rating: number
	shots: number
	type: string
	updated: string
	user_id: string
	user_name: string
	__v: number
	_id: string
}

let initialState: PacksReducerType = {
	cardPacks: [],
	page: 1,
	pageCount: 4,
	cardPacksTotalCount: 1

};

export const packsReducer = (state: PacksReducerType = initialState,
	action: ActionTypes) => {
	switch (action.type) {
		case 'packs/SET_PACKS':
			return {
				...state, cardPacks: action.packs,
				page: action.page,
				pageCount: action.pageCount,
				cardPacksTotalCount: action.cardPacksTotalCount
			};
		default:
			return state;
	}
};

export const setPackOfCards = (data: any) => ({
	type: 'packs/SET_PACKS',
	packs: data.cardPacks,
	page: data.page,
	pageCount: data.pageCount,
	cardPacksTotalCount: data.cardPacksTotalCount
} as const);

type ActionTypes = ReturnType<typeof setPackOfCards>

export const getPackOfCardsTC = () => (dispatch: Dispatch<ActionTypes>) => {
	// dispatch(setLoadingAC(true))
	mainContent.getPacksOfCards().then(
		res => {
			dispatch(setPackOfCards(res.data));
			// dispatch(setErrorAC(''));
			// dispatch(setLoadingAC(false))
		}
	).catch(error => {
		// const {response} = error;
		// const {request, ...errorObject} = response;
		// dispatch(setSuccessAC(false));
		// dispatch(setLoadingAC(false))
		// return dispatch(setErrorAC(errorObject.data.error));
	});
};

