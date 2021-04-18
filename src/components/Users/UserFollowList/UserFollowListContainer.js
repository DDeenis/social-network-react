import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUserCreator, unfollowUserCreator } from '../../../redux/actionCreators';
import UserFollowList from "./UserFollowList";

function UserFollowListContainer() {
    const users = useSelector(state => state.users.people);
    const dispatch = useDispatch();

    const followUser = (userId) => dispatch(followUserCreator(userId));
    const unfollowUser = (userId) => dispatch(unfollowUserCreator(userId));

    return (
        <UserFollowList
            users={users}
            followUser={followUser}
            unfollowUser={unfollowUser}
        />
    );
}

export default UserFollowListContainer;