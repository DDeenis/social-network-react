import React from 'react';
import { useSelector } from 'react-redux';
import Posts from '../Posts/Posts';

function PostsContainer() {
    const { posts } = useSelector(state => state.profile);

    return (
        <Posts 
            posts={posts}
        />
    );
}

export default PostsContainer;