import { stopSubmit } from "redux-form";
import userApi from "../api/api";
import {
    followUserCreator,
    setFetchingStatusCreator,
    setFollowingInProgressCreator,
    setIsAuthCreator,
    setIsLoadingCreator,
    setTotalUsersCountCreator,
    setUserIdCreator,
    setUserLoginCreator,
    setUsersCreator,
    setUserStatusCreator,
    setWatchedProfileCreator,
    unfollowUserCreator
} from "./actionCreators";

export const setUsersThunkCreator = (page, pageSize) => async (dispatch) => {
    dispatch(setFetchingStatusCreator(true));

    const response = await userApi.getUsers(page, pageSize);

    dispatch(setUsersCreator(response.items));
    dispatch(setTotalUsersCountCreator(response.totalCount));

    dispatch(setFetchingStatusCreator(false));
}

export const followUserThunkCreator = (userId) => async (dispatch) => {
    dispatch(setFollowingInProgressCreator(userId, true));

    const response = await userApi.followUser(userId);

    if (response.resultCode === 0) {
        dispatch(followUserCreator(userId));
    }

    dispatch(setFollowingInProgressCreator(userId, false));
}

export const unfollowUserThunkCreator = (userId) => async (dispatch) => {
    dispatch(setFollowingInProgressCreator(userId, true));

    const response = await userApi.unfollowUser(userId);

    if (response.resultCode === 0) {
        dispatch(unfollowUserCreator(userId));
    }

    dispatch(setFollowingInProgressCreator(userId, false));
}

export const authUserThunkCreator = (email, password, remember = false) => async (dispatch) => {
    dispatch(setIsLoadingCreator(true));

    const response = await userApi.authUser(email, password, remember);

    if (response.resultCode === 0) {
        dispatch(setUserIdCreator(response.data.userId));
        dispatch(setIsAuthCreator(true));
    } else {
        dispatch(stopSubmit('login', { _error: response.messages[0] }));
    }
    
    dispatch(setIsLoadingCreator(false));
}

export const logoutUserThunkCreator = () => async (dispatch) => {
    dispatch(setIsLoadingCreator(true));

    const response = await userApi.logoutUser();
    
    if (response.resultCode === 0) {
        dispatch(setUserIdCreator(0));
        dispatch(setUserLoginCreator(''));
        dispatch(setIsAuthCreator(false));
    }

    dispatch(setIsLoadingCreator(false));
}

export const getMeThunkCreator = () => async (dispatch) => {
    dispatch(setIsLoadingCreator(true));

    const response = await userApi.getMe();
     
    if (response.resultCode === 0) {
        dispatch(setUserIdCreator(response.data.id));
        dispatch(setUserLoginCreator(response.data.login));
        dispatch(setIsAuthCreator(true));
    }

    dispatch(setIsLoadingCreator(false));
}

export const setWatchedProfileThunkCreator = (id) => async (dispatch) => {
    const response = await userApi.getProfileInfo(id);
    
    dispatch(setWatchedProfileCreator(response));
}

export const getUserStatusThunkCreator = (userId) => async (dispatch) => {
    const response = await userApi.getUserStatus(userId);
    
    dispatch(setUserStatusCreator(response));
}

export const updateUserStatusThunkCreator = (statusText) => async (dispatch) => {
    await userApi.updateUserStatus(statusText);
    
    dispatch(setUserStatusCreator(statusText));
}
