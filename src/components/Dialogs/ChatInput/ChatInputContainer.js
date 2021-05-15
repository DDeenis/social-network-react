import React from 'react';
import { useDispatch } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createMessageCreator } from '../../../redux/chatReducer';
import { maxLengthValidatorCreator, minLengthValidatorCreator, requiredField } from '../../../utils/validators';
import ChatInput from './ChatInput';

function ChatInputContainer() {
    const dispatch = useDispatch();

    const maxLength = 50;
    const minLength = 1;

    const ChatFormInput = reduxForm({
        form: 'chat'
    })(ChatInput);

    const createMessage = (formData) => dispatch(createMessageCreator(formData.message));
    const validators = [requiredField, maxLengthValidatorCreator(maxLength), minLengthValidatorCreator(minLength)];

    return (
        <ChatFormInput
            maxLength={maxLength}
            onSubmit={createMessage}
            validators={validators}
        />
    );
}

export default ChatInputContainer;