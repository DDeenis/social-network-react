import React from 'react';
import { useSelector } from 'react-redux';
import withAuthRedirect from '../../hocs/withAuthRedirect';
import Chat from './Chat';

function ChatContainer() {
    const { messages, messageInput } = useSelector(state => state.chat);
    const { isAuth } = useSelector(state => state.login);

    const ChatWrapper = withAuthRedirect(Chat);

    return (
        <ChatWrapper 
            messages={messages}
            messageInput={messageInput}
            isAuth={isAuth}
        />
    );
}

export default ChatContainer;