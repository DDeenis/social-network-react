import React from "react";
import Post from "../Post/Post";
import styles from './Posts.module.css';

function Posts(props) {
    const postsList = props.posts.map(
        post => <Post text={post.content} likes={post.likes} views={post.views} key={post.content[0] + post.content[post.content.length - 1]} />
    );
    
    return (
        <div className={styles.postsBlock}>
            <div className={styles.newPost}>
                <h2>My posts</h2>
                <textarea className={styles.postInput}
                          placeholder="your news..."
                          value={props.postInput}
                          onChange={props.inputPostText}
                />
                <button className={`btn ${styles.newPostBtn}`} onClick={props.createPost}>Send</button>
            </div>

            <div className={styles.userPosts}>
                { postsList }
            </div>
        </div>
    );
}

export default Posts;