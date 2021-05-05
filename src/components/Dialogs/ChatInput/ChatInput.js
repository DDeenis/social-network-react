import React from 'react';
import { Field } from 'redux-form';
import styles from './ChatInput.module.css';

function ChatInput(props) {
    return (
        <form className={styles.chatInput} onSubmit={props.handleSubmit}>
            <Field component='textarea'
                className={styles.messageInput}
                placeholder="Type your message"
                name='message'
            />
            <button className={`btn ${styles.newMessageBtn}`} type='submit'>Send</button>
        </form>
    );
}

export default ChatInput;