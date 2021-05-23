const ADD_POST = 'ADD_POST';
const SET_WATCHED_PROFILE = 'SET_WATCHED_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

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

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            return addPost(state, action.post);

        case SET_WATCHED_PROFILE:
        case SET_USER_STATUS:
            return { ...state, ...action.payload };

        default:
            break;
    }

    return state;
}

export default profileReducer;

// action creators
export const createPostCreator = (post) => ({ type: ADD_POST, post });
export const setWatchedProfileCreator = (watchedProfile) => ({ type: SET_WATCHED_PROFILE, payload: { watchedProfile } });
export const setUserStatusCreator = (status) => ({ type: SET_USER_STATUS, payload: { userStatus: status } });
