import { actionTypes } from "./actionCreators";

const initialState = {
    people: [
        { name: 'Dmitry K.', location: 'Belarus, Minsk', message: 'I am looking for a Job right now...', isFollowing: false, id: 1 },
        { name: 'Svetlana D.', location: 'Belarus, Minsk', message: 'I am so pretty', isFollowing: false, id: 2 },
        { name: 'Sergei S.', location: 'Ukrane, Kiev', message: 'I like football!!!', isFollowing: true, id: 3 },
        { name: 'Andrew T.', location: 'United States, Philadelphia', message: 'I am free to help you to create good Video Production', isFollowing: true, id: 4 }
    ]
}

function changeFollowState(state, userId, isFollowing) {
    const index = state.people.findIndex((p) => p.id === userId);

    if(index !== -1) {
        const newPeoples = [...state.people];
        newPeoples[index] = { ...newPeoples[index], isFollowing };
        return { ...state, people: newPeoples };
    }

    return state;
}

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FOLLOW_USER:
            return changeFollowState(state, action.id, true);

        case actionTypes.UNFOLLOW_USER:
            return changeFollowState(state, action.id, false);
    
        default:
            return state;
    }
}

export default usersReducer;