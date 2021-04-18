import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPostCreator, inputPostTextCreator } from '../../../redux/actionCreators';
import Posts from '../Posts/Posts';

function PostsContainer() {
    const { posts, postInput } = useSelector(state => state.profile);
    const dispatch = useDispatch();

    const createPost = () => dispatch(createPostCreator());
    const inputPostText = (e) => dispatch(inputPostTextCreator(e.target.value));

    return (
        <Posts 
            posts={posts}
            postInput={postInput}
            createPost={createPost}
            inputPostText={inputPostText}
        />
    );
}

export default PostsContainer;