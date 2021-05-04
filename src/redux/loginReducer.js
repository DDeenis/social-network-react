import { actionTypes } from "./actionCreators";

const initialState = {
    userId: 0,
    login: '',
    // false
    isAuth: true
};

const setUserId = (state, userId) => ({ ...state, userId });

const setIsAuth = (state, isAuth) => ({ ...state, isAuth });

const setLogin = (state, login) => ({ ...state, login });

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_USER_ID:
            return setUserId(state, action.userId);
        
        case actionTypes.SET_IS_AUTH:
            return setIsAuth(state, action.isAuth);
        
        case actionTypes.SET_USER_LOGIN:
            return setLogin(state, action.login);
    
        default:
            return state;
    }
}