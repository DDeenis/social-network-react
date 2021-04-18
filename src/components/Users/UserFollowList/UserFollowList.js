import React from 'react';
import UserFollowItem from '../UserFollowItem/UserFollowItem';
import styles from './UserFollowList.module.css';

function UserFollowList({ users, followUser, unfollowUser }) {
    const usersFollowList = users.map(
        u => <UserFollowItem 
                key={u.id} 
                id={u.id}
                name={u.name} 
                location={u.location} 
                message={u.message} 
                isFollowing={u.isFollowing}
                followUser={followUser}
                unfollowUser={unfollowUser}
            />
    );

    return (
        <div className={styles.wrapper}>
            { usersFollowList }
        </div>
    );
}

export default UserFollowList;