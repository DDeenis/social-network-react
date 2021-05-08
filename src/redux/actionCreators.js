export const actionTypes = Object.freeze({
    ADD_POST: 'ADD_POST',
    ADD_MESSAGE: 'ADD_MESSAGE',
    FOLLOW_USER: 'FOLLOW_USER',
    UNFOLLOW_USER: 'UNFOLLOW_USER',
    SET_USERS: 'SET_USERS',
    SET_TOTAL_USERS_COUNT: 'SET_TOTAL_USERS_COUNT',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    SET_FETCHING_STATUS: 'SET_FETCHING_STATUS',
    SET_USER_ID: 'SET_USER_ID',
    SET_IS_FOLLOWING_IN_PROGRESS: 'SET_IS_FOLLOWING_IN_PROGRESS',
    SET_WATCHED_PROFILE: 'SET_WATCHED_PROFILE',
    SET_IS_AUTH: 'SET_IS_AUTH',
    SET_USER_LOGIN: 'SET_USER_LOGIN',
    SET_USER_STATUS: 'SET_USER_STATUS',
    SET_IS_LOADING: 'SET_IS_LOADING'
});

export const createPostCreator = (post) => ({ type: actionTypes.ADD_POST, post });

export const createMessageCreator = (message) => ({ type: actionTypes.ADD_MESSAGE, message });

export const followUserCreator = (userId) => ({ type: actionTypes.FOLLOW_USER, id: userId });

export const unfollowUserCreator = (userId) => ({ type: actionTypes.UNFOLLOW_USER, id: userId });

export const setUsersCreator = (users) => ({ type: actionTypes.SET_USERS, users });

export const setCurrentPageCreator = (currentPage) => ({ type: actionTypes.SET_CURRENT_PAGE, currentPage });

export const setTotalUsersCountCreator = (totalUsersCount) => ({ type: actionTypes.SET_TOTAL_USERS_COUNT, totalUsersCount });

export const setFetchingStatusCreator = (isFetching) => ({ type: actionTypes.SET_FETCHING_STATUS, isFetching });

export const setUserIdCreator = (userId) => ({ type: actionTypes.SET_USER_ID, userId });

export const setFollowingInProgressCreator = (id, isFollowingInProgress) => ({ type: actionTypes.SET_IS_FOLLOWING_IN_PROGRESS, id, isFollowingInProgress });

export const setWatchedProfileCreator = (watchedProfile) => ({ type: actionTypes.SET_WATCHED_PROFILE, watchedProfile });

export const setIsAuthCreator = (isAuth) => ({ type: actionTypes.SET_IS_AUTH, isAuth });

export const setUserLoginCreator = (login) => ({ type: actionTypes.SET_USER_LOGIN, login });

export const setUserStatusCreator = (status) => ({ type: actionTypes.SET_USER_STATUS, userStatus: status });

export const setIsLoadingCreator = (isLoading) => ({ type: actionTypes.SET_IS_LOADING, isLoading });