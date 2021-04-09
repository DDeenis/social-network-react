import React from 'react';
import { createMessageCreator, inputMessageTextCreator } from '../../../redux/actionCreators';
import Chat from './Chat';

function ChatContainer({ state, dispatch }) {
    const createMessage = () => {
        dispatch(
            createMessageCreator()
        )
    };

    const changeInput = (e) => {
        dispatch(
            inputMessageTextCreator(e.target.value)
        )
    }

    return (
        <Chat messages={state.messages}
              createMessage={createMessage}
              changeInput={changeInput}
              messageInput={state.messageInput}
        />
    );
}

export default ChatContainer;