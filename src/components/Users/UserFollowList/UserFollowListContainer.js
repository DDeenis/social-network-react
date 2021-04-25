import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUserCreator, unfollowUserCreator } from '../../../redux/actionCreators';
import UserFollowList from "./UserFollowList";

function UserFollowListContainer() {
    const { people, isFetching } = useSelector(state => state.users);
    const dispatch = useDispatch();

    const followUser = (userId) => dispatch(followUserCreator(userId));
    const unfollowUser = (userId) => dispatch(unfollowUserCreator(userId));

    return (
        <UserFollowList
            users={people}
            followUser={followUser}
            unfollowUser={unfollowUser}
            isFetching={isFetching}
        />
    );
}

export default UserFollowListContainer;