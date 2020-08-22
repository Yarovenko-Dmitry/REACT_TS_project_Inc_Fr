import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {registerReducer} from "./register-reducer";
import passwordRecoveryReducer from './passwordRecovery-reducer';


const reducers = combineReducers({
    register: registerReducer,
    recovery: passwordRecoveryReducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;