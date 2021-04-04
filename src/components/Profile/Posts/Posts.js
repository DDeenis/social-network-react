import React, { useRef } from "react";
import Post from "../Post/Post";
import styles from './Posts.module.css';

function Posts(props) {
    const newPostArea = useRef(null);

    const maxCharacters = 70;
    const createPost = () => {
        const inputArea = newPostArea.current;

        const postText = inputArea.value.length <= maxCharacters ? inputArea.value : inputArea.value.slice(0, maxCharacters - 3) + '...';

        if(!postText) return;

        props.addPost({});
    };

    const inputText = () => {
        props.changeInput(newPostArea.current.value);
    }

    const postsList = props.posts.map(
        post => <Post text={post.content} likes={post.likes} views={post.views} key={post.content[0] + post.content[post.content.length - 1]} />
    );

    return (
        <div className={styles.postsBlock}>
            <div className={styles.newPost}>
                <h2>My posts</h2>
                <textarea className={styles.postInput} placeholder="your news..." ref={newPostArea} value={props.postInput} onChange={inputText} />
                <button className={`btn ${styles.newPostBtn}`} onClick={createPost}>Send</button>
            </div>

            <div className={styles.userPosts}>
                { postsList }
            </div>
        </div>
    );
}

export default Posts;