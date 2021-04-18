import { combineReducers, createStore } from "redux";
import chatReducer from "./chatReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers(
    {
        profile: profileReducer,
        chat: chatReducer,
        sidebar: sidebarReducer,
        users: usersReducer
    }
);

const store = createStore(reducers);

export default store;