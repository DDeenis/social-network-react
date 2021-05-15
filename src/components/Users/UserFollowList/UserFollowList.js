import * as React from 'react';
import UserFollowItem from '../UserFollowItem/UserFollowItem';
import styles from './UserFollowList.module.scss';

function UserFollowList({ users, followUser, unfollowUser, isFetching, followingInProgress }) {
    const usersFollowList = users.map(
        u => <UserFollowItem 
                key={u.id} 
                user={u}
                followUser={followUser}
                unfollowUser={unfollowUser}
                isFetching={isFetching}
                isLoading={followingInProgress.includes(u.id)}
            />
    );

    return (
        <div className={styles.wrapper}>
            { usersFollowList }
        </div>
    );
}

export default UserFollowList;