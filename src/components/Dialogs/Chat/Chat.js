import React from 'react'
import { createMessageCreator, inputMessageTextCreator } from '../../../redux/actionCreators';
import ChatMessage from '../ChatMessage/ChatMessage'
import styles from './Chat.module.css'

function Chat(props) {
    const chatMessagesList = props.messages.map(m => <ChatMessage userName={m.name} content={m.message} key={m.message.charCodeAt(0) + m.name.charCodeAt(1)} />);

    const createMessage = () => {
        props.dispatch(
            createMessageCreator()
        )
    };

    const changeInput = (e) => {
        props.dispatch(
            inputMessageTextCreator(e.target.value)
        )
    }

    return (
        <div className={styles.chat}>
            <div className={styles.chatMessages}>{chatMessagesList}</div>
            <div className={styles.chatInput}>
                <textarea className={styles.messageInput}
                          placeholder="Type your message"
                          value={props.messageInput}
                          onChange={changeInput}
                />
                <button className={`btn ${styles.newMessageBtn}`} onClick={createMessage}>Send</button>
            </div>
        </div>
    );
}

export default Chat;