import React from 'react'
import ChatMessage from '../ChatMessage/ChatMessage'
import styles from './Chat.module.css'

function Chat(props) {
    return (
        <div className={styles.chat}>
            { props.messages.map(m => <ChatMessage userName={m.name} content={m.message} key={m.name + m.name[0]} />) }
        </div>
    );
}

export default Chat;