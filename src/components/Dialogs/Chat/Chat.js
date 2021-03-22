import React from 'react'
import ChatMessage from '../ChatMessage/ChatMessage'
import styles from './Chat.module.css'

function Chat() {
    return (
        <div className={styles.chat}>
            <ChatMessage userName="Dmitry" content="I am a normal popover and I can have text and everything" />
            <ChatMessage userName="Me" content="I am a normal pBLablabl I can have text and everything" />
            <ChatMessage userName="Dmitry" content="I am a normal popover and I can have text and everything" />
            <ChatMessage userName="Me" content="I am a normal popover and I can have text and everything" />
        </div>
    );
}

export default Chat;