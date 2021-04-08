import { combineReducers, createStore } from "redux";
import chatReducer from "./chatReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

const reducers = combineReducers(
    {
        profile: profileReducer,
        chat: chatReducer,
        sidebar: sidebarReducer,
    }
);

const store = createStore(reducers);

export default store;