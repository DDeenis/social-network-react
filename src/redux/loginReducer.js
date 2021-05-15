const SET_USER_ID = 'SET_USER_ID';
const SET_IS_AUTH = 'SET_IS_AUTH';
const SET_USER_LOGIN = 'SET_USER_LOGIN';

const initialState = {
    userId: 0,
    login: '',
    // false
    isAuth: false
};

const setUserId = (state, userId) => ({ ...state, userId });

const setIsAuth = (state, isAuth) => ({ ...state, isAuth });

const setLogin = (state, login) => ({ ...state, login });

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_ID:
            return setUserId(state, action.userId);
        
        case SET_IS_AUTH:
            return setIsAuth(state, action.isAuth);
        
        case SET_USER_LOGIN:
            return setLogin(state, action.login);
    
        default:
            return state;
    }
}

// action creators
export const setUserIdCreator = (userId) => ({ type: SET_USER_ID, userId });
export const setIsAuthCreator = (isAuth) => ({ type: SET_IS_AUTH, isAuth });
export const setUserLoginCreator = (login) => ({ type: SET_USER_LOGIN, login });
