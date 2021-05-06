import { actionTypes } from './actionCreators';

const initialState = {
    posts: [
        { content: 'Hey, why nobody love me?', likes: 0, views: 1000 },
        { content: 'It\'s our new program! Hey!', likes: 100, views: 5 }
    ],
    userStatus: '',
    watchedProfile: null
};

const addPost = (state, post) => {
    const newPost = { content: post, likes: 0, views: 0 };
    return {...state, posts: [...state.posts, newPost]};
}

const setWatchedProfile = (state, watchedProfile) => ({ ...state, watchedProfile });

const setUserStatus = (state, userStatus) => ({ ...state, userStatus });

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_POST:
            return addPost(state, action.post);

        case actionTypes.SET_WATCHED_PROFILE:
            return setWatchedProfile(state, action.watchedProfile);
        
        case actionTypes.SET_USER_STATUS:
            return setUserStatus(state, action.userStatus);

        default:
            break;
    }

    return state;
}

export default profileReducer;