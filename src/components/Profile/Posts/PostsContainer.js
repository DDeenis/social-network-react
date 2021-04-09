import React from 'react';
import { createPostCreator, inputPostTextCreator } from '../../../redux/actionCreators';
import Posts from '../Posts/Posts';

function PostsContainer({ state, dispatch }) {
    const createPost = () => {
        dispatch(
            createPostCreator()
        );
    }

    const inputPostText = (e) => {
        dispatch(
            inputPostTextCreator(e.target.value)
        );
    }

    return (
        <Posts posts={state.posts}
            createPost={createPost}
            inputPostText={inputPostText}
            postInput={state.postInput}
        />
    );
}

export default PostsContainer;