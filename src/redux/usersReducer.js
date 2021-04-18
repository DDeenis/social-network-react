import { actionTypes } from "./actionCreators";

const initialState = {
    people: [
        { name: 'Dmitry K.', location: { country: 'Belarus', city: 'Minsk' }, message: 'I am looking for a Job right now...', isFollowing: false, id: 1 },
        { name: 'Svetlana D.', location: { country: 'Belarus', city: 'Minsk' }, message: 'I am so pretty', isFollowing: false, id: 2 },
        { name: 'Sergei S.', location: { country: 'Ukrane', city: 'Kiev' }, message: 'I like football!!!', isFollowing: true, id: 3 },
        { name: 'Andrew T.', location: { country: 'United States', city: 'Philadelphia' }, message: 'I am free to help you to create good Video Production', isFollowing: true, id: 4 }
    ]
}

function changeFollowState(state, userId, isFollowing) {
    const index = state.people.findIndex((p) => p.id === userId);

    if(index !== -1) {
        return { ...state, people: state.people.map(u => u.id === userId ? { ...u, isFollowing } : u) };
    }

    return state;
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
    
        default:
            return state;
    }
}

export default usersReducer;