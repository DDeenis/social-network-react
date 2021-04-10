import { actionTypes } from './actionCreators';

const initialState = {
    posts: [
        { content: 'Hey, why nobody love me?', likes: 0, views: 1000 },
        { content: 'It\'s our new program! Hey!', likes: 100, views: 5 }
    ],
    postInput: ''
};

function _addPost(state) {
    const newPost = { content: state.postInput, likes: 0, views: 0 };
    return {...state, postInput: '', posts: [...state.posts, newPost]};
}

function _updatePostInput(state, text) {
    return {...state, postInput: text};
}

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_POST:
            return _addPost(state);

        case actionTypes.UPDATE_POST_INPUT:
            return _updatePostInput(state, action.text);

        default:
            break;
    }

    return state;
}

export default profileReducer;