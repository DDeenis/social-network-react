import { actionTypes } from "./actionCreators";

const initialState = {
    data: {
        email: '',
        password: '',
        rememberMe: false
    },
    userId: 0
};

const setUserEmail = (state, email) => ({ ...state, data: { ...state.data, email } });

const setUserPassword = (state, password) => ({ ...state, data: { ...state.data, password } });

const setRememberMe = (state, rememberMe) => ({ ...state, data: { ...state.data, rememberMe } });

const setUserId = (state, userId) => ({ ...state, userId });

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_USER_EMAIL:
            return setUserEmail(state, action.email);

        case actionTypes.SET_USER_PASSWORD:
            return setUserPassword(state, action.password);

        case actionTypes.SET_REMEMBER_ME:
            return setRememberMe(state, action.rememberMe);

        case actionTypes.SET_USER_ID:
            return setUserId(state, action.userId);
    
        default:
            return state;
    }
}