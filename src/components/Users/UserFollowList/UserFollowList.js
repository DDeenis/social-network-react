import React from 'react';
import UserFollowItem from '../UserFollowItem/UserFollowItem';
import styles from './UserFollowList.module.css';

function UserFollowList(props) {
    const usersFollowList = props.users.map(u => <UserFollowItem key={u.name[0]} name={u.name} location={u.location} message={u.message} isFollowing={u.isFollowing} />);

    return (
        <div className={styles.wrapper}>
            { usersFollowList }
        </div>
    );
}

export default UserFollowList;