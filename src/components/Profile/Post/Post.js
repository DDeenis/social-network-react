import React from "react";
import styles from './Post.module.css';

function Post({ text, likes, views }) {
    return (
        <section className={styles.postBlock}>
            <div className={styles.avatar}></div>
            
            <acticle className={styles.postText}>
                {text}
            </acticle>

            <div className={styles.likesBlock}>
                <span className={styles.likes}>{likes}</span>
                <span className={styles.views}>{views}</span>
            </div>
        </section>
    );
}

export default Post;