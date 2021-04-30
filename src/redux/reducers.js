import chatReducer from "./chatReducer";
import loginReducer from "./loginReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

const reducers = {
    profile: profileReducer,
    chat: chatReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    login: loginReducer
};

export default reducers;