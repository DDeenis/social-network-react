import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createMessageCreator, inputMessageTextCreator } from '../../../redux/actionCreators';
import withAuthRedirect from '../../hocs/withAuthRedirect';
import Chat from './Chat';

function ChatContainer() {
    const { messages, messageInput } = useSelector(state => state.chat);
    const { isAuth } = useSelector(state => state.login);
    const dispatch = useDispatch();

    const createMessage = () => dispatch(createMessageCreator());
    const changeInput = (e) => dispatch(inputMessageTextCreator(e.target.value));

    const ChatWrapper = withAuthRedirect(Chat);

    return (
        <ChatWrapper 
            messages={messages}
            messageInput={messageInput}
            createMessage={createMessage}
            changeInput={changeInput}
            isAuth={isAuth}
        />
    );
}

export default ChatContainer;