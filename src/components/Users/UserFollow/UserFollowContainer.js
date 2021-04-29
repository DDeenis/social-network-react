import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userApi from '../../../api/api';
import { setCurrentPageCreator, setTotalUsersCountCreator, setUsersCreator, setFetchingStatusCreator } from '../../../redux/actionCreators';
import UserFollow from './UserFollow';

function UserFollowContainer() {
    const { people, pageSize, totalUsersCount, currentPage } = useSelector(state => state.users);
    const dispatch = useDispatch();

    // const { page } = useParams();

    const setUsers = (users) => dispatch(setUsersCreator(users));
    const setTotalUsersCount = (totalUsersCount) => dispatch(setTotalUsersCountCreator(totalUsersCount));
    const setFetchingStatus = (isFetching) => dispatch(setFetchingStatusCreator(isFetching));

    // useEffect(() => setCurrentPage(page), [page]);
    // useEffect(() => userApi.getUsers(page).then(r => setUsers(r.items)));
    useEffect(() => userApi.getUsers().then(r => setTotalUsersCount(r.totalCount)), []);

    const getUsers = (page = currentPage) => {
        setFetchingStatus(true);
        userApi.getUsers(page, pageSize).then(r => setUsers(r.items)).then(() => setFetchingStatus(false));
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