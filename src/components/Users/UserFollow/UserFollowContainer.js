import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPageCreator, setTotalUsersCountCreator, setUsersCreator } from '../../../redux/actionCreators';
import UserFollow from './UserFollow';

function UserFollowContainer() {
    const { people, pageSize, totalUsersCount, currentPage } = useSelector(state => state.users);
    const dispatch = useDispatch();

    const setUsers = (users) => dispatch(setUsersCreator(users));
    const setTotalUsersCount = (totalUsersCount) => dispatch(setTotalUsersCountCreator(totalUsersCount));

    const makeRequest = (page = 1) => axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`);
    const getUsers = (page = 1) => {
        makeRequest(page, pageSize).then(r => {
            setUsers(r.data.items);
            setTotalUsersCount(r.data.totalCount);
        });
    }
    const setCurrentPage = (currentPage) => dispatch(setCurrentPageCreator(currentPage));
    const onLoad = () => {
        if(people.length === 0) {
            getUsers();
        }
    }

    makeRequest().then(r => setTotalUsersCount(r.data.totalCount))

    const totalPages = totalUsersCount / pageSize;

    return (
        <UserFollow
            onLoad={onLoad}
            getUsers={getUsers}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            currentPage={currentPage}
        />
    );
}

export default UserFollowContainer;