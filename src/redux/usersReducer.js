const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_FETCHING_STATUS = 'SET_FETCHING_STATUS';
const SET_IS_FOLLOWING_IN_PROGRESS = 'SET_IS_FOLLOWING_IN_PROGRESS';

const initialState = {
    people: [],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const changeFollowState = (state, userId, followed) => {
    const index = state.people.findIndex((p) => p.id === userId);

    if(index !== -1) {
        return { ...state, people: state.people.map(u => u.id === userId ? { ...u, followed } : u) };
    }

    return state;
}

const setFollowingInProgress = (state, id, isFollowingInProgress) => 
    isFollowingInProgress ? 
    ({ ...state, followingInProgress: [...state.followingInProgress, id] }) : 
    ({ ...state, followingInProgress: state.followingInProgress.filter(p => p !== id) });
const setUsers = (state, users) => ({ ...state, people: [...users] });

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FOLLOW_USER:
            return changeFollowState(state, action.id, true);

        case UNFOLLOW_USER:
            return changeFollowState(state, action.id, false);

        case SET_USERS:
            return setUsers(state, action.users);
        
        case SET_TOTAL_USERS_COUNT:
        case SET_CURRENT_PAGE:
        case SET_FETCHING_STATUS:
            return { ...state, ...action.payload };
        
        case SET_IS_FOLLOWING_IN_PROGRESS:
            return setFollowingInProgress(state, action.id, action.isFollowingInProgress);
    
        default:
            return state;
    }
}

export default usersReducer;

// action creators
export const followUserCreator = (userId) => ({ type: FOLLOW_USER, id: userId });
export const unfollowUserCreator = (userId) => ({ type: UNFOLLOW_USER, id: userId });
export const setUsersCreator = (users) => ({ type: SET_USERS, users });
export const setCurrentPageCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, payload: { currentPage } });
export const setTotalUsersCountCreator = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, payload: { totalUsersCount } });
export const setFetchingStatusCreator = (isFetching) => ({ type: SET_FETCHING_STATUS, payload: { isFetching } });
export const setFollowingInProgressCreator = (id, isFollowingInProgress) => ({ type: SET_IS_FOLLOWING_IN_PROGRESS, id, isFollowingInProgress });
