import React from 'react';
import { useSelector } from 'react-redux';
import { isAuthSelector, messagesSelector } from '../../../redux/selectors';
import withAuthRedirect from '../../hocs/withAuthRedirect';
import Chat from './Chat';

function ChatContainer() {
    const messages = useSelector(messagesSelector);
    const isAuth = useSelector(isAuthSelector);

    const ChatWrapper = withAuthRedirect(Chat);

    return (
        <ChatWrapper 
            messages={messages}
            isAuth={isAuth}
        />
    );
}

export default ChatContainer;