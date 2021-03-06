import classNames from 'classnames';
import * as React from 'react';
import { Field } from 'redux-form';
import Textarea from '../../Common/Textarea/Textarea';
import styles from './ChatInput.module.scss';

function ChatInput(props) {
    return (
        <form className={styles.chatInput} onSubmit={props.handleSubmit}>
            <Field 
                component={Textarea}
                maxLength={50}
                className={styles.messageInput}
                placeholder="Type your message"
                name='message'
                validate={props.validators}
            />
            <button className={classNames('btn', styles.newMessageBtn)} type='submit'>Send</button>
        </form>
    );
}

export default ChatInput;