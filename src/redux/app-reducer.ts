import { Dispatch } from "redux"
import {authAPI} from "../api/api";


const initialState: InitialStateType = {
    isInitialized: false,
}

export const appReducer = (state: InitialStateType  = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        // case 'APP/SET-STATUS':
        //     return {...state, status: action.status}
        // case 'APP/SET-ERROR':
        //     return {...state, error: action.error}
        case "APP/INITIALIZE-APP":
            return {...state, isInitialized: action.isInitialized}
        default:
            return {...state}
    }
}


export const initializeAppAC = (isInitialized: boolean) => ({type: 'APP/INITIALIZE-APP', isInitialized} as const)


export const initializeAppTC = () => (dispatch: Dispatch) => {
    authAPI.me().then(res => {
        try {
            dispatch(initializeAppAC(true))
        } catch (e) {
            dispatch(initializeAppAC(true))
            console.log(e.response.data.error)
        }

    })
}

export type InitialStateType = {
    isInitialized: boolean
}

export type InitializeAppActionType = ReturnType<typeof initializeAppAC>


type ActionsType = | InitializeAppActionType
