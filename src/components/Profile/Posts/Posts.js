import React from "react";
import Post from "../Post/Post";
import styles from './Posts.module.css';

function Posts() {
    return (
        <div className={styles.postsBlock}>
            <div className={styles.newPost}>
                <h2>My posts</h2>
                <textarea className={styles.postInput} placeholder="your news..."></textarea>
                <button className={`btn ${styles.newPostBtn}`}>Send</button>
            </div>

            <div className={styles.userPosts}>
                <Post text='Hey, why nobody love me?' likes={10} views={3} />
                <Post text="It's our new program! Hey!" likes={100} views={1} />
                { ['one', 'two', 'three'].map(post => <Post text={post} key={post[0] + post[post.length - 1]} />) }
            </div>
        </div>
    );
}

export default Posts;