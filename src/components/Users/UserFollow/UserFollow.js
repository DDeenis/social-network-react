import React, { useEffect } from 'react';
import PagesBar from '../PagesBar/PagesBar';
import UserFollowListContainer from '../UserFollowList/UserFollowListContainer';
import styles from './UserFollow.module.scss';

function UserFollow({ onLoad, getUsers, setCurrentPage, currentPage, pages }) {
    useEffect(() => {
        onLoad();
    }, []);

    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>Users</p>

            <section className={styles.followList}>
                <UserFollowListContainer />
            </section>

            <PagesBar pages={pages} currentPage={currentPage} getUsers={getUsers} setCurrentPage={setCurrentPage} />
            <button className={`btn ${styles.showMoreBtn}`} onClick={() => getUsers()}>Show more</button>
        </div>
    );
}

export default UserFollow;