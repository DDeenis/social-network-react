import appReducer from "./appReducer";
import chatReducer from "./chatReducer";
import loginReducer from "./loginReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer"
import { reducer as formReducer } from 'redux-form'

const reducers = {
    app: appReducer,
    profile: profileReducer,
    chat: chatReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    login: loginReducer,
    form: formReducer
};

export default reducers;