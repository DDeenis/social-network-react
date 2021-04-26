import { actionTypes } from './actionCreators';

const initialState = {
    posts: [
        { content: 'Hey, why nobody love me?', likes: 0, views: 1000 },
        { content: 'It\'s our new program! Hey!', likes: 100, views: 5 }
    ],
    postInput: '',
    profile: null
};

const addPost = (state) => {
    const newPost = { content: state.postInput, likes: 0, views: 0 };
    return {...state, postInput: '', posts: [...state.posts, newPost]};
}

const updatePostInput = (state, text) => ({ ...state, postInput: text });

const setUserProfile = (state, profile) => ({ ...state, profile });

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_POST:
            return addPost(state);

        case actionTypes.UPDATE_POST_INPUT:
            return updatePostInput(state, action.text);

        case actionTypes.SET_USER_PROFILE:
            return setUserProfile(state, action.profile);

        default:
            break;
    }

    return state;
}

export default profileReducer;