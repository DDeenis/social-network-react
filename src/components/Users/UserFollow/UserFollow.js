import React from 'react';
import UserFollowListContainer from '../UserFollowList/UserFollowListContainer';
import styles from './UserFollow.module.css';

function UserFollow() {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>Users</p>

            <section className={styles.followList}>
                <UserFollowListContainer />
            </section>

            <button className={`btn ${styles.showMoreBtn}`}>Show more</button>
        </div>
    );
}

export default UserFollow;