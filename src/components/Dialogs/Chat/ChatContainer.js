import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createMessageCreator, inputMessageTextCreator } from '../../../redux/actionCreators';
import Chat from './Chat';

function ChatContainer() {
    const { messages, messageInput } = useSelector(state => state.chat);
    const dispatch = useDispatch();

    const createMessage = () => dispatch(createMessageCreator());
    const changeInput = (e) => dispatch(inputMessageTextCreator(e.target.value));

    return (
        <Chat 
            messages={messages}
            messageInput={messageInput}
            createMessage={createMessage}
            changeInput={changeInput}
        />
    );
}

export default ChatContainer;