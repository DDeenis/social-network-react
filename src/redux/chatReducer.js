import { actionTypes } from "./actionCreators";

function _addMessage(state) {
    state.messages.push({
        name: 'Me',
        message: state.messageInput
    });
    state.messageInput = '';

    return state;
}

function _updateMessageInput(state, text) {
    state.messageInput = text;

    return state;
}

function chatReducer(state, action) {
    switch (action.type) {
        case actionTypes.ADD_MESSAGE:
            state = _addMessage(state);
            break;

        case actionTypes.UPDATE_MESSAGE_INPUT:
            state = _updateMessageInput(state, action.text);
            break;

        default:
            break;
    }

    return state;
}

export default chatReducer;