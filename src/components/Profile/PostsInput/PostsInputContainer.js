import React from 'react';
import { useDispatch } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createPostCreator } from '../../../redux/actionCreators';
import { maxLengthValidatorCreator, minLengthValidatorCreator, requiredField } from '../../../utils/validators';
import PostsInput from './PostsInput';

function PostsInputContainer() {
    const dispatch = useDispatch();

    const maxLength = 100;
    const minLength = 1;

    const createPost = (formData) => dispatch(createPostCreator(formData.post));
    const validators = [requiredField, maxLengthValidatorCreator(maxLength), minLengthValidatorCreator(minLength)];

    const PostFormInput = reduxForm({
        form: 'posts'
    })(PostsInput);

    return (
        <PostFormInput
            maxLength={maxLength}
            onSubmit={createPost}
            validators={validators}
        />
    );
}

export default PostsInputContainer;