import {Dispatch} from "redux";
import {CardDataType, cardsAPI} from "../api/api";


let internalState: CardDataType = {
    cards: [
        {
            answer: "",
            question: "",
            cardsPack_id: "",
            grade: 0,
            rating: 0,
            shots: 0,
            type: "",
            created: "",
            updated: "",
            __v: 0,
            _id: "",
        },
    ],
    cardsTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    page: 0,
    pageCount: 0
};

export const cardReducer = (state: CardDataType = internalState, action: ActionsType) => {

    switch (action.type) {
        case "card/GET-CARD":
            debugger
            return {...state = action.data}
        default:
            return state;
    }
}

const getCardAC = (data: CardDataType) => ({
    type: 'card/GET-CARD', data
})

export const getCardTC = () => async (dispatch: Dispatch<ActionsType>) => {
    try {
        let response = await cardsAPI.getCards()
        dispatch(getCardAC(response.data))
    } catch (e) {
        console.log(e)
    }

}

//types

type ActionsType = ReturnType<typeof getCardAC>
type ThunkDispatch = Dispatch<ActionsType>

type ParamsType = {}