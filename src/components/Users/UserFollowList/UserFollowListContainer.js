import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUserCreator, unfollowUserCreator } from '../../../redux/actionCreators';
import UserFollowList from "./UserFollowList";
import axios from 'axios';

function UserFollowListContainer() {
    const { people, isFetching } = useSelector(state => state.users);
    const dispatch = useDispatch();

    const apiKey = 'e01108d2-9c0c-4852-900d-fe7fba522054';

    const followUser = (userId) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, { withCredentials: true, headers: { "API-KEY": apiKey } }).then(r => {
            if(r.data.resultCode === 0) dispatch(followUserCreator(userId))
        }).catch(r => console.log(r));
    };

    const unfollowUser = (userId) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, { withCredentials: true, headers: { "API-KEY": apiKey } }).then(r => {
            if(r.data.resultCode === 0) dispatch(unfollowUserCreator(userId));
        }).catch(r => console.log(r));
    };

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