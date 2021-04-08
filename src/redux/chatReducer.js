import { actionTypes } from "./actionCreators";

const initialState = {
    people: [
        'Dmitry', 'Andrew', 'Sasha', 'Sveta', 'Valera', 'Viktor'
    ],
    messages: [
        { name: 'Dmitry', message: 'I am a normal popover and I can have text and everything' },
        { name: 'Me', message: 'I am a normal pBLablabl I can have text and everything' },
        { name: 'Dmitry', message: 'I am a normal popover and I can have text and everything' },
        { name: 'Me', message: 'I am a normal popover and I can have text and everything' }
    ],
    messageInput: ''
};

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

function chatReducer(state = initialState, action) {
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