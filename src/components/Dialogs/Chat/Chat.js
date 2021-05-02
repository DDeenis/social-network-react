import React from 'react'
import ChatMessage from '../ChatMessage/ChatMessage'
import styles from './Chat.module.css'

function Chat({ messages, messageInput, createMessage, changeInput }) {
    const chatMessagesList = messages.map((m, i) => <ChatMessage userName={m.name} content={m.message} key={i} />);

    return (
        <div className={styles.chat}>
            <div className={styles.chatMessages}>{chatMessagesList}</div>
            <div className={styles.chatInput}>
                <textarea 
                    className={styles.messageInput}
                    placeholder="Type your message"
                    value={messageInput}
                    onChange={changeInput}
                />
                <button className={`btn ${styles.newMessageBtn}`} onClick={createMessage}>Send</button>
            </div>
        </div>
    );
}

export default Chat;