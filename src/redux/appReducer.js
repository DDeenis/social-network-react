const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_PROMISE_ERROR = 'SET_PROMISE_ERROR';

const initialState = {
    isLoading: false,
    error: null
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PROMISE_ERROR:
        case SET_IS_LOADING:
            return { ...state, ...state.payload };

        default:
            return state;
    }
}

// action creators
export const setIsLoadingCreator = (isLoading) => ({ type: SET_IS_LOADING, payload: { isLoading } });
export const setPromiseErrorCreator = (error) => ({ type: SET_PROMISE_ERROR, payload: { error } });
