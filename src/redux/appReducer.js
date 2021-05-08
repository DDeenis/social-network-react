import { actionTypes } from "./actionCreators";

const initialState = {
    isLoading: false
}

const setIsLoading = (state, isLoading) => ({ ...state, isLoading });

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_IS_LOADING:
            return setIsLoading(state, action.isLoading);

        default:
            return state;
    }
}