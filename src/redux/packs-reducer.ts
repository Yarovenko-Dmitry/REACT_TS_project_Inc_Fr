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
	page: 0,
	pageCount: 10,
	minCardsCount: 0,
	maxCardsCount: 20,
	cardPacksTotalCount: 1

};

export const packsReducer = (state: PacksReducerType = initialState,
	action: ActionTypes) => {
	switch (action.type) {
		case 'packs/SET_PACKS':
			return {
				...state, cardPacks: action.cardsPacks,
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
		case 'packs/SET_RANGE':
			return {
				...state, cardPacks: action.cardPacks,
				page: action.page,
				pageCount: action.pageCount,
				cardPacksTotalCount: action.cardPacksTotalCount,
				minCardsCount: action.minCardsCount,
				maxCardsCount: action.maxCardsCount,
			};
		default:
			return state;
	}
};

export const setPackOfCards = (cardsPacks: PackType[], page:number,
	pageCount:number, cardPacksTotalCount: number, minCardsCount: number,
	maxCardsCount:number ) => ({
	type: 'packs/SET_PACKS',
	cardsPacks,
	page,
	pageCount,
	cardPacksTotalCount,
	minCardsCount,
	maxCardsCount
} as const);

export const setPage = (page: number, pageCount: number) => ({
	type: 'packs/SET_PAGE',
	page,
	pageCount
} as const);

export const setRange = (data: any,min:number,max:number) => ({
	type: 'packs/SET_RANGE',
	cardPacks: data.cardPacks,
	page: data.page,
	pageCount: data.pageCount,
	cardPacksTotalCount: data.cardPacksTotalCount,
	minCardsCount: min,
	maxCardsCount: max,
} as const);

type ActionTypes =
	ReturnType<typeof setPackOfCards>
	| ReturnType<typeof setPage>
	| ReturnType<typeof setRange>

export const getPackOfCardsTC = (page: number, row: number) => (dispatch: Dispatch<ActionTypes>,
	getState: () => AppRootStateType) => {
	const {minCardsCount, maxCardsCount} = getState().packsReducer
	mainContent.getPacksOfCards(page, row, minCardsCount, maxCardsCount).then(
		res => {
			dispatch(setRange(res.data, minCardsCount, maxCardsCount));
		}
	).catch(error => {
		console.log(error.response.data.error)
	});
};

export const changeRange = (min: number, max: number) => (dispatch: Dispatch<ActionTypes>,
	getState: () => AppRootStateType) => {
	const {page, pageCount} = getState().packsReducer
	mainContent.getRangedCards(page, pageCount, min, max).then(
	res => {
		dispatch(setRange(res.data,min,max));
	}
	).catch(error => {
		console.log(error.response.data.error)

	});
};

export const addNewPackTC = (name: string) => (dispatch: Dispatch<any>, getState: () => AppRootStateType) => {
	const {page, pageCount} = getState().packsReducer
	mainContent.addNewPack(name).then(
		res => {
			dispatch(getPackOfCardsTC(page, pageCount));
		}
	).catch(error => {
		console.log(error.response.data.error)
	});
};
export const deletePackTC = (id: string) => (dispatch: Dispatch<any>, getState: () => AppRootStateType) => {
	const {page, pageCount} = getState().packsReducer
	mainContent.deletePack(id).then(
		res => {
			dispatch(getPackOfCardsTC(page, pageCount));
		}
	).catch(error => {
		console.log(error.response.data.error)
	});
};

export const updatePackTC = (id: string, name: string) => (dispatch: Dispatch<any>,
	getState: () => AppRootStateType) => {
	const {page, pageCount} = getState().packsReducer
	mainContent.updatePack(id, name).then(
		res => {
			dispatch(getPackOfCardsTC(page, pageCount));
		}
	).catch(error => {
		console.log(error.response.data.error)
	});
};
