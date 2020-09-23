import {Dispatch} from "redux"
import {authAPI} from "../api/api";
import {loginAC} from './login-reducer';


const initialState: InitialStateType = {
  isInitialized: false,
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
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


export const initializeAppTC = () => async (dispatch: Dispatch) => {
  try {
    const res = await authAPI.me()
    dispatch(initializeAppAC(true))
    dispatch(loginAC(res))
  } catch (e) {
    dispatch(initializeAppAC(true))
    console.log(e.response.data.error)
  }
}

export type InitialStateType = {
  isInitialized: boolean
}

export type InitializeAppActionType = ReturnType<typeof initializeAppAC>


type ActionsType = | InitializeAppActionType
