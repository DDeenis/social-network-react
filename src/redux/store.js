import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const reducersCombined = combineReducers(reducers);

const store = createStore(reducersCombined, applyMiddleware(thunk));

export default store;