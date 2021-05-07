import { stopSubmit } from "redux-form";
import userApi from "../api/api";
import { 
    followUserCreator, 
    setFetchingStatusCreator, 
    setFollowingInProgressCreator, 
    setIsAuthCreator,
    setTotalUsersCountCreator,
    setUserIdCreator, 
    setUserLoginCreator, 
    setUsersCreator, 
    setUserStatusCreator, 
    setWatchedProfileCreator, 
    unfollowUserCreator 
} from "./actionCreators";

export const setUsersThunkCreator = (page, pageSize) => (dispatch) => {
    dispatch(setFetchingStatusCreator(true));

    userApi.getUsers(page, pageSize)
        .then(r => dispatch(setUsersCreator(r.items)))
        .then(r => dispatch(setTotalUsersCountCreator(r.totalCount)))
        .then(() => dispatch(setFetchingStatusCreator(false)))
        .catch(r => console.log(r));
}

export const followUserThunkCreator = (userId) => (dispatch) => {
    dispatch(setFollowingInProgressCreator(userId, true));

    userApi.followUser(userId).then(r => {
        if (r.resultCode === 0) dispatch(followUserCreator(userId))
    })
        .then(() => dispatch(setFollowingInProgressCreator(userId, false)))
        .catch(r => console.log(r));
}

export const unfollowUserThunkCreator = (userId) => (dispatch) => {
    dispatch(setFollowingInProgressCreator(userId, true));

    userApi.unfollowUser(userId).then(r => {
        if (r.resultCode === 0) dispatch(unfollowUserCreator(userId));
    })
        .then(() => dispatch(setFollowingInProgressCreator(userId, false)))
        .catch(r => console.log(r));
}

export const authUserThunkCreator = (email, password, remember = false) => (dispatch) => {
    userApi.authUser(email, password, remember)
        .then(r => {
            if(r.resultCode === 0) {
                dispatch(setUserIdCreator(r.data.userId));
                dispatch(setIsAuthCreator(true));
            } else {
                dispatch(stopSubmit('login', { _error: r.messages[0] }))
            }
        })
        .catch(r => console.log(r));
}

export const logoutUserThunkCreator = () => (dispatch) => {
    userApi.logoutUser()
        .then(r => {
            if(r.resultCode === 0) {
                dispatch(setUserIdCreator(0));
                dispatch(setUserLoginCreator(''));
                dispatch(setIsAuthCreator(false));
            }
        })
        .catch(r => console.log(r));
}

export const getMeThunkCreator = () => (dispatch) => {
    userApi.getMe()
        .then(r => {
            if(r.resultCode === 0) {
                dispatch(setUserIdCreator(r.data.id));
                dispatch(setUserLoginCreator(r.data.login));
                dispatch(setIsAuthCreator(true));
            }
        })
        .catch(r => console.log(r));
}

export const setWatchedProfileThunkCreator = (id) => (dispatch) => {
    userApi.getProfileInfo(id)
        .then(r => dispatch(setWatchedProfileCreator(r)))
        .catch(r => console.log(r));
}

export const getUserStatusThunkCreator = (userId) => (dispatch) => {
    userApi.getUserStatus(userId)
        .then(r => dispatch(setUserStatusCreator(r)))
        .catch(r => console.log(r));
}

export const updateUserStatusThunkCreator = (statusText) => (dispatch) => {
    userApi.updateUserStatus(statusText)
        .then(() => dispatch(setUserStatusCreator(statusText)))
        .catch(r => console.log(r));
}
