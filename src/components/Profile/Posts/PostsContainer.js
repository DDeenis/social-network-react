import * as React from 'react';
import { useSelector } from 'react-redux';
import { postsSelector } from '../../../redux/selectors';
import Posts from '../Posts/Posts';

function PostsContainer() {
    const posts = useSelector(postsSelector);

    return (
        <Posts 
            posts={posts}
        />
    );
}

export default PostsContainer;