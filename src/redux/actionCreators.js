const actionTypes = Object.freeze({
    ADD_POST: 'ADD_POST',
    UPDATE_POST_INPUT: 'UPDATE_POST_INPUT',
    ADD_MESSAGE: 'ADD_MESSAGE',
    UPDATE_MESSAGE_INPUT: 'UPDATE_MESSAGE_INPUT',
});

const createPostActionCreator = () => {
    return {
        type: actionTypes.ADD_POST
    };
};

const inputPostTextActionCreator = (text) => {
    return {
        type: actionTypes.UPDATE_POST_INPUT,
        text: text
    };
}

const createMessageActionCreator = () => {
    return {
        type: actionTypes.ADD_MESSAGE
    };
};

const inputMessageTextActionCreator = (text) => {
    return {
        type: actionTypes.UPDATE_MESSAGE_INPUT,
        text: text
    };
}

export {
    actionTypes,
    createPostActionCreator,
    createMessageActionCreator,
    inputPostTextActionCreator,
    inputMessageTextActionCreator
}