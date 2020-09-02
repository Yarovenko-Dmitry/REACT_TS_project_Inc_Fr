import {Dispatch} from 'redux';
import {mainContent} from '../api/api';
import {AppRootStateType} from './redux-store';

export type PacksReducerType = {
	cardPacks: PackType[] | [],
	page: number,
	pageCount: number
	cardPacksTotalCount: number
	minCardsCount: number
	maxCardsCount: number
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
	pageCount: 10,
	minCardsCount: 0,
	maxCardsCount: 4,
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
				cardPacksTotalCount: action.cardPacksTotalCount,
				minCardsCount: action.minCardsCount,
				maxCardsCount: action.maxCardsCount
			};
		case 'packs/SET_PAGE':
			return {
				...state,
				page: action.page,
				pageCount: action.pageCount

			};
		case 'packs/SET_ROW':
			return {
				...state,
				page: action.pageCount,
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
	cardPacksTotalCount: data.cardPacksTotalCount,
	minCardsCount: data.minCardsCount,
	maxCardsCount: data.maxCardsCount
} as const);

export const setPage = (data: any) => ({
	type: 'packs/SET_PAGE',
	page: data.page,
	pageCount: data.pageCount
} as const);
export const setRow = (pageCount: number) => ({
	type: 'packs/SET_ROW',
	pageCount
} as const);


type ActionTypes = ReturnType<typeof setPackOfCards> | ReturnType<typeof setPage>| ReturnType<typeof setRow>

export const getPackOfCardsTC = (page:number,row:number) => (dispatch: Dispatch<ActionTypes>) => {
	mainContent.getPacksOfCards(page, row).then(
		res => {
			dispatch(setPackOfCards(res.data));
			console.log('data after request', res.data);
		}
	).catch(error => {
	});
};

export const changeRange = (min:number,max:number) => (dispatch: Dispatch<ActionTypes>, getState: any) => {
	const page = getState().packsReducer.page
	const count = getState().packsReducer.cardsCount
	mainContent.getRangedCards(page, count, min, max).then(
		res => {
			dispatch(setPackOfCards(res.data));
		}
	).catch(error => {
	});
};

export const addNewPackTC = (name: string) => (dispatch: Dispatch<any>, getState: any) => {
	const page = getState().packsReducer.page
	const count = getState().packsReducer.cardsCount
	mainContent.addNewPack(name).then(
		res => {
			dispatch(getPackOfCardsTC(page,count));
		}
).catch(error => {

});
};
