import React, { useEffect } from 'react';
import PagesBar from '../PagesBar/PagesBar';
import UserFollowListContainer from '../UserFollowList/UserFollowListContainer';
import styles from './UserFollow.module.css';

function UserFollow({ onLoad, getUsers, setCurrentPage, currentPage }) {
    let pages = [];

    useEffect(() => {
        onLoad();

        // totalPages
        for (let i = currentPage; i <= 23 + currentPage; i++) {
            pages.push(i);
        }
    }, []);

    useEffect(() => {
        pages = [];

        for (let i = currentPage; i <= 23 + currentPage; i++) {
            pages.push(i);
        }
    }, [currentPage]);

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