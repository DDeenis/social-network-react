const ADD_MESSAGE = 'ADD_MESSAGE';

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
    return {...state, messages: [...state.messages, newMessage]};
}

function chatReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return addMessage(state, action.message);

        default:
            break;
    }

    return state;
}

export default chatReducer;

// action creators
export const createMessageCreator = (message) => ({ type: ADD_MESSAGE, message });
