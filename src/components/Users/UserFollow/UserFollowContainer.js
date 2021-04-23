import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUsersCreator } from '../../../redux/actionCreators';
import UserFollow from './UserFollow';

function UserFollowContainer() {
    const { people, pageSize, totalUsersCount } = useSelector(state => state.users);
    const dispatch = useDispatch();

    const setUsers = (users) => dispatch(setUsersCreator(users));

    const makeRequest = (page = 1) => axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`);
    const getUsers = (page = 1) => makeRequest(page, pageSize).then(r => setUsers(r.data.items));
    const onLoad = () => {
        if(people.length === 0) {
            getUsers();
        }
    }

    const totalPages = totalUsersCount / pageSize;

    return (
        <UserFollow
            onLoad={onLoad}
            getUsers={getUsers}
            pageSize={pageSize}
            totalPages={totalPages}
        />
    );
}

export default UserFollowContainer;