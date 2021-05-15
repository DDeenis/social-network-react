import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageItem.module.scss';

function PageItem({ number, isCurrent, getUsers, setCurrentPage }) {
    const showUsersOnPage = () => {
        getUsers(number);
        setCurrentPage(number);
    };

    return (
        <NavLink to={`/users/${number}`} className={styles.pageLink}>
            <div className={isCurrent ? styles.pageItemActive : styles.pageItem} onClick={() => showUsersOnPage()}>
                { number }
            </div>
        </NavLink>
    );
}

export default PageItem;