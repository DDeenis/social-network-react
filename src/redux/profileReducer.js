import { actionTypes } from './actionCreators';

function _addPost(state) {
    state.posts.push({
        content: state.postInput,
        likes: 0,
        views: 0,
    });
    state.postInput = '';

    return state;
}

function _updatePostInput(state, text) {
    state.postInput = text;

    return state;
}

function profileReducer(state, action) {
    switch (action.type) {
        case actionTypes.ADD_POST:
            state = _addPost(state);
            break;

        case actionTypes.UPDATE_POST_INPUT:
            state = _updatePostInput(state, action.text);
            break;

        default:
            break;
    }

    return state;
}

export default profileReducer;