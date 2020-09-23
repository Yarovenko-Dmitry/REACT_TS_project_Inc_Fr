import {Dispatch} from "redux";
import {authAPI} from "../api/api";


let internalState: RegisterReducerType = {
  isRegistered: false
};

export const registerReducer = (state: RegisterReducerType = internalState, action: ActionsType) => {

  switch (action.type) {
    case "register/SET-IS-REGISTERED":

      return {...state, isRegistered: action.value}
    default:
      return state;
  }
}

const setRegisterAC = (value: boolean) => ({
  type: 'register/SET-IS-REGISTERED', value
})

export const RegisterTC = (data: RegisterParamsType) => async (dispatch: Dispatch<ActionsType>) => {
  try {
    let response = await authAPI.register(data)
    dispatch(setRegisterAC(true))
  } catch (e) {
    console.log(e)
  }

}

//types
type RegisterReducerType = {
  isRegistered: boolean
};
type ActionsType = ReturnType<typeof setRegisterAC>
type ThunkDispatch = Dispatch<ActionsType>

type RegisterParamsType = {
  email: string
  password: string
}