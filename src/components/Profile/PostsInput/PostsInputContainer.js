import React from 'react';
import { useDispatch } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createPostCreator } from '../../../redux/actionCreators';
import PostsInput from './PostsInput';

function PostsInputContainer() {
    const dispatch = useDispatch();

    const createPost = (formData) => dispatch(createPostCreator(formData.post));

    const PostFormInput = reduxForm({
        form: 'posts'
    })(PostsInput);

    return (
        <PostFormInput
            onSubmit={createPost}
        />
    );
}

export default PostsInputContainer;