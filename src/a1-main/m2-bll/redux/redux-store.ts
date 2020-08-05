import {applyMiddleware, combineReducers, createStore} from "redux";

import thunkMiddleware from 'redux-thunk';


const reducers = combineReducers({

});

let store: ReturnType<typeof createStore> = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;