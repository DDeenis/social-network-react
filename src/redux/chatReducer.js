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
    const newMessage = { name: 'Me', message: state.messageInput }
    return {...state, messageInput: '', messages: [...state.messages, newMessage]};
}

function _updateMessageInput(state, text) {
    return {...state, messageInput: text};
}

function chatReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_MESSAGE:
            return _addMessage(state);

        case actionTypes.UPDATE_MESSAGE_INPUT:
            return _updateMessageInput(state, action.text);

        default:
            break;
    }

    return state;
}

export default chatReducer;