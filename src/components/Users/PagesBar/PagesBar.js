import React from 'react';
import PageItem from '../PageItem/PageItem';
import styles from './PagesBar.module.css';

function PagesBar({ pages, currentPage, getUsers, setCurrentPage }) {
    return (
        <div className={styles.pagesList}>
            { pages.map(p => <PageItem key={p} number={p} isCurrent={p === currentPage} getUsers={getUsers} setCurrentPage={setCurrentPage} />) }
        </div>
    );
}

export default PagesBar;