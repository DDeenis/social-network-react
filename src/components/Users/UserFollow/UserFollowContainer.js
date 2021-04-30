import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPageCreator } from '../../../redux/actionCreators';
import { setUsersThunkCreator } from '../../../redux/thunkCreators';
import UserFollow from './UserFollow';

function UserFollowContainer() {
    const { people, pageSize, totalUsersCount, currentPage } = useSelector(state => state.users);
    const dispatch = useDispatch();

    const getUsers = (page = currentPage) => {
        dispatch(setUsersThunkCreator(page, pageSize))
    };

    const setCurrentPage = (currentPage) => dispatch(setCurrentPageCreator(currentPage));
    
    const onLoad = () => {
        if(people.length === 0) {
            getUsers();
        }
    }

    const totalPages = Math.ceil(totalUsersCount / pageSize);

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