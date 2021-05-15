import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthSelector, usersSelector } from '../../../redux/selectors';
import { setUsersThunkCreator } from '../../../redux/thunkCreators';
import { setCurrentPageCreator } from '../../../redux/usersReducer';
import UserFollow from './UserFollow';

function UserFollowContainer() {
    const { people, pageSize, totalUsersCount, currentPage } = useSelector(usersSelector);
    const isAuth = useSelector(isAuthSelector);
    const dispatch = useDispatch();

    const getUsers = (page = currentPage) => dispatch(setUsersThunkCreator(page, pageSize));
    const setCurrentPage = (currentPage) => dispatch(setCurrentPageCreator(currentPage));
    
    const onLoad = () => {
        if(people.length === 0) {
            getUsers();
        }
    }

    const totalPages = Math.ceil(totalUsersCount / pageSize);
    const pageItemsCount = 22;
    const halfPage = Math.ceil(pageItemsCount / 2);
    const possibleEndIndex = halfPage + currentPage;
    const startIndex = currentPage - halfPage > 0 ? currentPage - halfPage : Math.ceil(currentPage / 2);
    const endIndex = possibleEndIndex >= pageItemsCount ? possibleEndIndex : possibleEndIndex + (pageItemsCount - possibleEndIndex);
    const pages = [];

    for (let i = startIndex; i <= endIndex; i++) {
        pages.push(i);
    }

    return (
        <UserFollow
            onLoad={onLoad}
            getUsers={getUsers}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            currentPage={currentPage}
            pages={pages}
            isAuth={isAuth}
        />
    );
}

export default UserFollowContainer;