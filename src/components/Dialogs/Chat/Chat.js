import React from 'react'
import ChatMessage from '../ChatMessage/ChatMessage'
import styles from './Chat.module.css'

function Chat(props) {
    const chatMessagesList = props.messages.map(m => <ChatMessage userName={m.name} content={m.message} key={m.message.charCodeAt(0) + m.name.charCodeAt(1)} />);

    return (
        <div className={styles.chat}>
            <div className={styles.chatMessages}>{chatMessagesList}</div>
            <div className={styles.chatInput}>
                <textarea className={styles.messageInput}
                          placeholder="Type your message"
                          value={props.messageInput}
                          onChange={props.changeInput}
                />
                <button className={`btn ${styles.newMessageBtn}`} onClick={props.createMessage}>Send</button>
            </div>
        </div>
    );
}

export default Chat;