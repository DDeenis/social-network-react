import React from 'react';
import styles from './PageItem.module.css';

function PageItem({ number, isCurrent, getUsers, setCurrentPage }) {
    const showUsersOnPage = () => {
        getUsers(number);
        setCurrentPage(number);
    };

    return (
        <div className={isCurrent ? styles.pageItemActive : styles.pageItem} onClick={() => showUsersOnPage()}>{ number }</div>
    );
}

export default PageItem;