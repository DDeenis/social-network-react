import { actionTypes } from "./actionCreators";

const initialState = {
    people: [],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    // isLoading: false
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
    ({ ...state, followingInProgress: state.followingInProgress.filter(p => p.id != id) });
const setTotalUsersCount = (state, totalUsersCount) => ({ ...state, totalUsersCount });
const setCurrentPage = (state, currentPage) => ({ ...state, currentPage });
const setFetchingStatus = (state, isFetching) => ({ ...state, isFetching });
const setUsers = (state, users) => ({ ...state, people: [...users] });

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FOLLOW_USER:
            return changeFollowState(state, action.id, true);

        case actionTypes.UNFOLLOW_USER:
            return changeFollowState(state, action.id, false);

        case actionTypes.SET_USERS:
            return setUsers(state, action.users);
        
        case actionTypes.SET_TOTAL_USERS_COUNT:
            return setTotalUsersCount(state, action.totalUsersCount);

        case actionTypes.SET_CURRENT_PAGE:
            return setCurrentPage(state, action.currentPage);

        case actionTypes.SET_FETCHING_STATUS:
            return setFetchingStatus(state, action.isFetching);
        
        case actionTypes.SET_IS_FOLLOWING_IN_PROGRESS:
            return setFollowingInProgress(state, action.id, action.isFollowingInProgress);
    
        default:
            return state;
    }
}

export default usersReducer;