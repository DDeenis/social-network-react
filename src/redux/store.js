import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import chatReducer from "./chatReducer";
import loginReducer from "./loginReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers(
    {
        profile: profileReducer,
        chat: chatReducer,
        sidebar: sidebarReducer,
        users: usersReducer,
        login: loginReducer
    }
);

const store = createStore(reducers, applyMiddleware(thunk));

export default store;