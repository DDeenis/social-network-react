import React from "react";
import Post from "../Post/Post";
import styles from './Posts.module.css';

function Posts(props) {
    return (
        <div className={styles.postsBlock}>
            <div className={styles.newPost}>
                <h2>My posts</h2>
                <textarea className={styles.postInput} placeholder="your news..."></textarea>
                <button className={`btn ${styles.newPostBtn}`}>Send</button>
            </div>

            <div className={styles.userPosts}>
                { props.posts.map(post => <Post text={post.content} likes={post.likes} views={post.views} key={post[0] + post[post.length - 1]} />) }
            </div>
        </div>
    );
}

export default Posts;