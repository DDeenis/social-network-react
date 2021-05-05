import React from 'react'
import ChatInputContainer from '../ChatInput/ChatInputContainer';
import ChatMessage from '../ChatMessage/ChatMessage'
import styles from './Chat.module.css'

function Chat({ messages }) {
    const chatMessagesList = messages.map((m, i) => <ChatMessage userName={m.name} content={m.message} key={i} />);

    return (
        <div className={styles.chat}>
            <div className={styles.chatMessages}>{chatMessagesList}</div>
            <ChatInputContainer />
        </div>
    );
}

export default Chat;