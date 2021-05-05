import React from 'react';
import { useDispatch } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createMessageCreator } from '../../../redux/actionCreators';
import ChatInput from './ChatInput';

function ChatInputContainer() {
    const dispatch = useDispatch();

    const ChatFormInput = reduxForm({
        form: 'chat'
    })(ChatInput);

    const createMessage = (formData) => dispatch(createMessageCreator(formData.message));

    return (
        <ChatFormInput
            onSubmit={createMessage}
        />
    );
}

export default ChatInputContainer;