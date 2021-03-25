import React from 'react'
import ChatMessage from '../ChatMessage/ChatMessage'
import styles from './Chat.module.css'
// !!!
import { messages } from "../../../data";

function Chat() {
    return (
        <div className={styles.chat}>
            { messages.map(m => <ChatMessage userName={m.name} content={m.message} key={m.name + m.name[0]} />) }
        </div>
    );
}

export default Chat;