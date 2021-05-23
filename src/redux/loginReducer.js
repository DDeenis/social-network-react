const SET_USER_ID = 'SET_USER_ID';
const SET_IS_AUTH = 'SET_IS_AUTH';
const SET_USER_LOGIN = 'SET_USER_LOGIN';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

const initialState = {
    userId: 0,
    login: null,
    captchaUrl: null,
    // false
    isAuth: false
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_ID:
        case SET_IS_AUTH:
        case SET_USER_LOGIN:
        case SET_CAPTCHA_URL:
            return { ...state, ...action.payload };
    
        default:
            return state;
    }
}

// action creators
export const setUserIdCreator = (userId) => ({ type: SET_USER_ID, payload: { userId } });
export const setIsAuthCreator = (isAuth) => ({ type: SET_IS_AUTH, payload: { isAuth } });
export const setUserLoginCreator = (login) => ({ type: SET_USER_LOGIN, payload: { login } });
export const setCaptchaUrlCreator = (captchaUrl) => ({ type: SET_CAPTCHA_URL, payload: { captchaUrl } });
