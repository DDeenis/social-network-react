import React from "react";
import Post from "../Post/Post";
import PostsInputContainer from "../PostsInput/PostsInputContainer";
import styles from './Posts.module.scss';

function Posts(props) {
    const postsList = props.posts.map(
        post => <Post text={post.content} likes={post.likes} views={post.views} key={post.content[0] + post.content[post.content.length - 1]} />
    );
    
    return (
        <div className={styles.postsBlock}>
            <PostsInputContainer />

            <div className={styles.userPosts}>
                { postsList }
            </div>
        </div>
    );
}

export default Posts;