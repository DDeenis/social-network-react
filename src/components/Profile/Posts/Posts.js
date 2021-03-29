import React from "react";
import Post from "../Post/Post";
import styles from './Posts.module.css';

/*
    // нормальный вариант

    const [posts, changePosts] = useState(props.posts);

    const maxCharacters = 70;
    const createPost = () => {
        const inputArea = document.querySelector(`.${styles.postInput}`);

        const postText = inputArea.value.length <= maxCharacters ? inputArea.value : inputArea.value.slice(0, maxCharacters);

        changePosts(posts.concat([{ content: postText, likes: 0, views: 0 }]));

        inputArea.value = '';
    };
*/

function Posts(props) {
    const newPostArea = React.createRef();

    const createPost = () => {
        const postText = newPostArea.current.value;

        // will not re-render element!!!
        props.posts.push({ content: postText, likes: 0, views: 0 });

        newPostArea.current.value = '';
    };

    const postsList = props.posts.map(
        post => <Post text={post.content} likes={post.likes} views={post.views} key={post[0] + post[post.length - 1]} />
    );

    return (
        <div className={styles.postsBlock}>
            <div className={styles.newPost}>
                <h2>My posts</h2>
                <textarea className={styles.postInput} placeholder="your news..." ref={newPostArea}></textarea>
                <button className={`btn ${styles.newPostBtn}`} onClick={createPost}>Send</button>
            </div>

            <div className={styles.userPosts}>
                { postsList }
            </div>
        </div>
    );
}

export default Posts;