import React from 'react';
import { Field } from 'redux-form';
import styles from './PostsInput.module.css';

function PostsInput(props) {
    return (
        <form className={styles.newPost} onSubmit={props.handleSubmit}>
            <h2>My posts</h2>
            <Field 
                component='textarea' 
                className={styles.postInput}
                placeholder="your news..."
                name='post'
            />
            <button className={`btn ${styles.newPostBtn}`} type='submit'>Send</button>
        </form>
    );
}

export default PostsInput;