import React from 'react';
import UserFollowList from '../UserFollowList/UserFollowList';
import styles from './UserFollow.module.css';

function UserFollow() {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>Users</p>

            <section className={styles.followList}>
                <UserFollowList />
            </section>

            <button className={styles.showMoreBtn}>Show more</button>
        </div>
    );
}

export default UserFollow;