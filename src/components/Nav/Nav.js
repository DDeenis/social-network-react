import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css'

function Nav() {
    return (
        <nav>
            <ul className={styles.navItems}>
                <li className={styles.navItem}>
                    <NavLink to="/profile" activeClassName={styles.activeLink}>Profile</NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="/dialogs" activeClassName={styles.activeLink}>Messages</NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="/news" activeClassName={styles.activeLink}>News</NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="/music" activeClassName={styles.activeLink}>Music</NavLink>
                </li>
                <li className={styles.navItem}>
                    <a gref="/settings" activeClassName={styles.activeLink}>Settings</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;