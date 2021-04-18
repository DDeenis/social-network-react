const actionTypes = Object.freeze({
    ADD_POST: 'ADD_POST',
    UPDATE_POST_INPUT: 'UPDATE_POST_INPUT',
    ADD_MESSAGE: 'ADD_MESSAGE',
    UPDATE_MESSAGE_INPUT: 'UPDATE_MESSAGE_INPUT',
    FOLLOW_USER: 'FOLLOW_USER',
    UNFOLLOW_USER: 'UNFOLLOW_USER',
    SET_USERS: 'SET_USERS'
});

const createPostCreator = () => {
    return {
        type: actionTypes.ADD_POST
    };
};

const inputPostTextCreator = (text) => {
    return {
        type: actionTypes.UPDATE_POST_INPUT,
        text: text
    };
}

const createMessageCreator = () => {
    return {
        type: actionTypes.ADD_MESSAGE
    };
};

const inputMessageTextCreator = (text) => {
    return {
        type: actionTypes.UPDATE_MESSAGE_INPUT,
        text: text
    };
}

const followUserCreator = (userId) => {
    return {
        type: actionTypes.FOLLOW_USER,
        id: userId
    }
}

const unfollowUserCreator = (userId) => {
    return {
        type: actionTypes.UNFOLLOW_USER,
        id: userId
    }
}

const setUsersCreator = (users) => {
    return {
        type: actionTypes.SET_USERS,
        users
    }
}

export {
    actionTypes,
    createPostCreator,
    createMessageCreator,
    inputPostTextCreator,
    inputMessageTextCreator,
    followUserCreator,
    unfollowUserCreator,
    setUsersCreator
}