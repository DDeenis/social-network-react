const SET_IS_LOADING = 'SET_IS_LOADING';

const initialState = {
    isLoading: false
}

const setIsLoading = (state, isLoading) => ({ ...state, isLoading });

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case SET_IS_LOADING:
            return setIsLoading(state, action.isLoading);

        default:
            return state;
    }
}

// action creators


