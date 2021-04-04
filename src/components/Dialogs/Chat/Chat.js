import React, { useRef } from 'react'
import ChatMessage from '../ChatMessage/ChatMessage'
import styles from './Chat.module.css'

function Chat(props) {
    const newMessageArea = useRef(null);

    const chatMessagesList = props.messages.map(m => <ChatMessage userName={m.name} content={m.message} key={m.message.charCodeAt(0) + m.name.charCodeAt(1)} />);

    const createMessage = () => {
        const messageText = newMessageArea.current.value;

        if(!messageText) return;

        props.addMessage({ name: 'Me', message: messageText });

        newMessageArea.current.value = '';
    };

    return (
        <div className={styles.chat}>
            <div className={styles.chatMessages}>{chatMessagesList}</div>
            <div className={styles.chatInput}>
                <textarea className={styles.messageInput} placeholder="Type your message" ref={newMessageArea}></textarea>
                <button className={`btn ${styles.newMessageBtn}`} onClick={createMessage}>Send</button>
            </div>
        </div>
    );
}

export default Chat;