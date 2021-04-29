import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userApi from '../../../api/api';
import { followUserCreator, setFollowingInProgressCreator, unfollowUserCreator } from '../../../redux/actionCreators';
import UserFollowList from "./UserFollowList";

function UserFollowListContainer() {
    const { people, isFetching, followingInProgress } = useSelector(state => state.users);
    const dispatch = useDispatch();

    const followUser = (userId) => {
        setFollowingInProgress(userId, true);
        userApi.followUser(userId).then(r => {
            if(r.resultCode === 0) dispatch(followUserCreator(userId))
        })
        .then(() => setFollowingInProgress(userId, false))
        .catch(r => console.log(r));
    };

    const unfollowUser = (userId) => {
        setFollowingInProgress(userId, true);
        userApi.unfollowUser(userId).then(r => {
            if(r.resultCode === 0) dispatch(unfollowUserCreator(userId));
        })
        .then(() => setFollowingInProgress(userId, false))
        .catch(r => console.log(r));
    };

    const setFollowingInProgress = (id, isFollowingInProgress) => dispatch(setFollowingInProgressCreator(id, isFollowingInProgress));

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