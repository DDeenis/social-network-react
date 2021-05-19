import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthSelector, usersSelector } from '../../../redux/selectors';
import { setUsersThunkCreator } from '../../../redux/thunkCreators';
import { setCurrentPageCreator } from '../../../redux/usersReducer';
import { createPages } from '../../../utils/pagination';
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
    const pages = createPages(totalPages, currentPage, pageItemsCount);

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