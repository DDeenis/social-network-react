import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from '../../../redux/selectors';
import { followUserThunkCreator, unfollowUserThunkCreator } from '../../../redux/thunkCreators';
import UserFollowList from "./UserFollowList";

function UserFollowListContainer() {
    const { people, isFetching, followingInProgress } = useSelector(usersSelector);
    const dispatch = useDispatch();

    const followUser = (userId) => {
        dispatch(followUserThunkCreator(userId));
    };

    const unfollowUser = (userId) => {
        dispatch(unfollowUserThunkCreator(userId));
    };

    return (
        <UserFollowList
            users={people}
            followUser={followUser}
            unfollowUser={unfollowUser}
            isFetching={isFetching}
            followingInProgress={followingInProgress}
        />
    );
}

export default UserFollowListContainer;