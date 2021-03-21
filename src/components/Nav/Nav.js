import React from 'react'
import styles from './Nav.module.css'

function Nav() {
    return (
        <nav>
            <ul className={styles.navItems}>
                <li className={styles.navItem}>
                    <a href="#">Profile</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#">Messages</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#">News</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#">Music</a>
                </li>
            </ul>

            <a href="#" className={`${styles.settings} ${styles.navItem}`}>Settings</a>
        </nav>
    );
}

export default Nav;