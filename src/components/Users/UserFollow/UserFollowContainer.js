import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUsersCreator } from '../../../redux/actionCreators';
import UserFollow from './UserFollow';

function UserFollowContainer() {
    const users = useSelector(state => state.users.people);
    const dispatch = useDispatch();

    const setUsers = (users) => dispatch(setUsersCreator(users));

    const getUsers = () => axios.get('https://social-network.samuraijs.com/api/1.0/users').then(r => setUsers(r.data.items));
    const onLoad = () => {
        if(users.length === 0) 
            getUsers();
    }

    return (
        <UserFollow
            onLoad={onLoad}
            getUsers={getUsers}
        />
    );
}

export default UserFollowContainer;