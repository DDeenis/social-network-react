import * as React from 'react'
import styles from './FriendOnline.module.scss'

function FriendOnline(props) {
    return (
        <div className={styles.friendOnline}>
            <div className={styles.avatar}></div>
            <p className={styles.name}>{props.name}</p>
        </div>
    );
}

export default FriendOnline;