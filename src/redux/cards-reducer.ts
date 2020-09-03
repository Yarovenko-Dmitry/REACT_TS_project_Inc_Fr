import {Dispatch} from 'redux';
import {mainContent} from '../api/api';
import {AppRootStateType} from './redux-store';

export type StateType = {
	cards: CardType[],
	cardsTotalCount: number
	maxGrade: number
	minGrade: number
	page: number
	pageCount: number
};

type CardType = {
	answer: string
	question: string
	cardsPack_id: string
	grade: number
	rating: number
	shots: number
	type: string
	created: string
	updated: string
	__v: number
	_id: string
}

let initialState: StateType = {
	cards: [],
	cardsTotalCount: 0,
	maxGrade: 0,
	minGrade: 0,
	page: 1,
	pageCount: 4
};

export const cardsReducer = (state: StateType = initialState,
	action: ActionTypes) => {
	switch (action.type) {
		case 'cards/SET_CARDS':
			return {
				...state, ...action.data

			}
		default:
			return state;
	}
};


const setCards = (data: StateType) => ({
	type: 'cards/SET_CARDS',
	data
})


type ActionTypes =
	ReturnType<typeof setCards>

export const getCardsTC = (id: string) => (dispatch: Dispatch<any>) => {
	mainContent.getCards(id).then(
		res => {
			dispatch(setCards(res.data));
		}
	).catch(error => {
		console.log(error.response.data.error)
	});
};
