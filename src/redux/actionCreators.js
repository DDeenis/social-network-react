export const actionTypes = Object.freeze({
    ADD_POST: 'ADD_POST',
    UPDATE_POST_INPUT: 'UPDATE_POST_INPUT',
    ADD_MESSAGE: 'ADD_MESSAGE',
    UPDATE_MESSAGE_INPUT: 'UPDATE_MESSAGE_INPUT',
    FOLLOW_USER: 'FOLLOW_USER',
    UNFOLLOW_USER: 'UNFOLLOW_USER',
    SET_USERS: 'SET_USERS',
    SET_TOTAL_USERS_COUNT: 'SET_TOTAL_USERS_COUNT',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    SET_FETCHING_STATUS: 'SET_FETCHING_STATUS',
    SET_USER_PROFILE: 'SET_USER_PROFILE'
});

export const createPostCreator = () => ({ type: actionTypes.ADD_POST });

export const inputPostTextCreator = (text) => ({ type: actionTypes.UPDATE_POST_INPUT, text });

export const createMessageCreator = () => ({ type: actionTypes.ADD_MESSAGE });

export const inputMessageTextCreator = (text) => ({ type: actionTypes.UPDATE_MESSAGE_INPUT, text });

export const followUserCreator = (userId) => ({ type: actionTypes.FOLLOW_USER, id: userId });

export const unfollowUserCreator = (userId) => ({ type: actionTypes.UNFOLLOW_USER, id: userId });

export const setUsersCreator = (users) => ({ type: actionTypes.SET_USERS, users });

export const setCurrentPageCreator = (currentPage) => ({ type: actionTypes.SET_CURRENT_PAGE, currentPage });

export const setTotalUsersCountCreator = (totalUsersCount) => ({ type: actionTypes.SET_TOTAL_USERS_COUNT, totalUsersCount });

export const setFetchingStatusCreator = (isFetching) => ({ type: actionTypes.SET_FETCHING_STATUS, isFetching });

export const setUserProfileCreator = (profile) => ({ type: actionTypes.SET_USER_PROFILE, profile });
