import { actionTypes } from "./actionCreators";

const initialState = {
    people: [],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1
}

function changeFollowState(state, userId, followed) {
    const index = state.people.findIndex((p) => p.id === userId);

    if(index !== -1) {
        return { ...state, people: state.people.map(u => u.id === userId ? { ...u, followed } : u) };
    }

    return state;
}

function setTotalUsersCount(state, totalPages) {
    return { ...state, totalPages };
}

function setCurrentPage(state, currentPage) {
    return { ...state, currentPage };
}

function setUsers(state, users) {
    return { ...state, people: [...state.people, ...users] };
}

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FOLLOW_USER:
            return changeFollowState(state, action.id, true);

        case actionTypes.UNFOLLOW_USER:
            return changeFollowState(state, action.id, false);

        case actionTypes.SET_USERS:
            return setUsers(state, action.users);
        
        case actionTypes.SET_TOTAL_USERS_COUNT:
            return setTotalUsersCount(state, action.totalPages);

        case actionTypes.SET_CURRENT_PAGE:
            return setCurrentPage(state, action.currentPage);
    
        default:
            return state;
    }
}

export default usersReducer;