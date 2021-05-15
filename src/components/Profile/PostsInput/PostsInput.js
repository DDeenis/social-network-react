import * as React from 'react';
import { Field } from 'redux-form';
import Textarea from '../../Common/Textarea/Textarea';
import styles from './PostsInput.module.scss';

function PostsInput(props) {
    return (
        <form className={styles.newPost} onSubmit={props.handleSubmit}>
            <h2>My posts</h2>
            <Field 
                component={Textarea}
                maxLength={props.maxLength}
                className={styles.postInput}
                placeholder="your news..."
                name='post'
                validate={props.validators}
            />
            <button className={`btn ${styles.newPostBtn}`} type='submit'>Send</button>
        </form>
    );
}

export default PostsInput;