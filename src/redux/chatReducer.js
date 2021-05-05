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
    ]
};

function addMessage(state, message) {
    const newMessage = { name: 'Me', message }
    return {...state, messageInput: '', messages: [...state.messages, newMessage]};
}

function chatReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_MESSAGE:
            return addMessage(state, action.message);

        default:
            break;
    }

    return state;
}

export default chatReducer;