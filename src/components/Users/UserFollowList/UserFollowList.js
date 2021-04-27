import React from 'react';
import UserFollowItem from '../UserFollowItem/UserFollowItem';
import styles from './UserFollowList.module.css';

function UserFollowList({ users, followUser, unfollowUser, isFetching }) {
    const usersFollowList = users.map(
        u => <UserFollowItem 
                key={u.id} 
                user={u}
                followUser={followUser}
                unfollowUser={unfollowUser}
                isFetching={isFetching}
            />
    );

    return (
        <div className={styles.wrapper}>
            { usersFollowList }
        </div>
    );
}

export default UserFollowList;