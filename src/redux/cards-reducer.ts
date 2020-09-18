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
  id: string
};

export type CardType = {
  answer: string
  question: string
  cardsPack_id: string
  grade: number
  rating: number
  shots: number
  type: string
  created: string
  updated: string
  __v?: number
  _id: string,
  more_id?: string
}

let initialState: StateType = {
  cards: [],
  cardsTotalCount: 0,
  maxGrade: 0,
  minGrade: 0,
  page: 1,
  pageCount: 4,
  id: ''
};

export const cardsReducer = (state: StateType = initialState,
                             action: ActionTypes) => {
  switch (action.type) {
    case 'cards/SET_CARDS':
      return {
        ...state, ...action.data, id: action.id
      }
    default:
      return state;
  }
};

const setCards = (data: StateType, id: string) => ({
  type: 'cards/SET_CARDS',
  data,
  id
})

type ActionTypes =
  ReturnType<typeof setCards>

export const getCardsTC = (id: string) => (dispatch: Dispatch<any>, getState: () => AppRootStateType) => {
  const {page, pageCount} = getState().cardsReducer;
  mainContent.getCards(id, page, pageCount).then(
    res => {
      dispatch(setCards(res.data, id));
    }
  ).catch(error => {
    console.log(error.response.data.error)
  });
};

export const getNewPageTC = (page: number, row: number) => (dispatch: Dispatch<any>, getState: () => AppRootStateType) => {
  const {id} = getState().cardsReducer;
  mainContent.getCards(id, page, row).then(
    res => {
      dispatch(setCards(res.data, id));
    }
  ).catch(error => {
    console.log(error.response.data.error)
  });
};

export const addNewCardTC = (question:string,answer:string) => (dispatch: Dispatch<any>,getState: () => AppRootStateType) => {
	const {id} = getState().cardsReducer;
	mainContent.addNewCard(id, question, answer).then(
		res => {
			dispatch(getCardsTC(id));

		}
	).catch(error => {
		console.log(error.response.data.error)
	});
};

export const sendGradeTC = (cardId:string,grade:number) => (dispatch: Dispatch<any>, getState: () => AppRootStateType) => {
	const {id} = getState().cardsReducer;
	mainContent.sendCardGrade(cardId, grade).then(
		res => {
			dispatch(getCardsTC(id));
		}
	).catch(error => {
		console.log(error.response.data.error)
	});
};

export const deleteCardTC = (cardId: string) => (dispatch: Dispatch<any>, getState: () => AppRootStateType) => {
  const {id} = getState().cardsReducer;
  mainContent.deleteCard(cardId).then(
    res => {
      dispatch(getCardsTC(id));
    }
  ).catch(error => {
    console.log(error.response.data.error)
  });
};

export const updateCardTC = (cardId: string, currentQuestion: string, currentAnswer: string) => (dispatch: Dispatch<any>, getState: () => AppRootStateType) => {
  const {id} = getState().cardsReducer;
  mainContent.updateCard(cardId, currentQuestion, currentAnswer).then(
    res => {
      dispatch(getCardsTC(id));
    }
  ).catch(error => {
    console.log(error.response.data.error)
  });
};