import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {registerReducer} from "./register-reducer";
import passwordRecoveryReducer from './passwordRecovery-reducer';
import pssawordCreationReducer from './pssawordCreation-reducer';
import loginReducer from './login-reducer';


const reducers = combineReducers({
  register: registerReducer,
  pwRecoveryRequest: passwordRecoveryReducer,
  passwordUpdate: pssawordCreationReducer,
  login: loginReducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;