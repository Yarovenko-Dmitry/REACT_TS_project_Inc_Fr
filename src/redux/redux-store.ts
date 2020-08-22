import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {registerReducer} from "./register-reducer";


const reducers = combineReducers({
    register: registerReducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;