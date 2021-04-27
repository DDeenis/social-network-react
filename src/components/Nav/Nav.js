import React from 'react'
import { NavLink } from 'react-router-dom';
import FriendsOnline from './FriendsOnline/FriendsOnline';
import styles from './Nav.module.css'

function Nav(props) {
    return (
        <nav>
            <ul className={styles.navItems}>
                <li className={styles.navItem}>
                    {/* Put id of current user here */}
                    <NavLink to={`/profile/16638`} activeClassName={styles.activeLink}>Profile</NavLink>
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
                    <NavLink to="/users/1" activeClassName={styles.activeLink}>Find users</NavLink>
                </li>
                <li className={styles.navItem}>
                    <a gref="/settings" activeClassName={styles.activeLink}>Settings</a>
                </li>
            </ul>

            <div className={styles.friendsOnline}>
                <h3 className={styles.friendsOnlineTitle}>Friends</h3>
                <FriendsOnline people={props.state.people} />
            </div>
        </nav>
    );
}

export default Nav;