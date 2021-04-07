import React from 'react'
import FriendOnline from '../FriendOnline/FriendOnline';
import styles from './FriendsOnline.module.css'

function FriendsOnline(props) {
    return (
        <ul className={styles.friendsOnline}>
            { props.people.map(p => <FriendOnline key={p} name={p} />) }
        </ul>
    );
}

export default FriendsOnline;