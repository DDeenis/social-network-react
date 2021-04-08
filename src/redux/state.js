import chatReducer from "./chatReducer";
import profileReducer from "./profileReducer";

const store = {
    _state: {
        profile: {
            posts: [
                { content: 'Hey, why nobody love me?', likes: 0, views: 1000 },
                { content: 'It\'s our new program! Hey!', likes: 100, views: 5 },
                { content: 'Hidden post', likes: 0, views: 0 }
            ],
            postInput: ''
        },
        chat: {
            people: [
                'Dmitry', 'Andrew', 'Sasha', 'Sveta', 'Valera', 'Viktor'
            ],
            messages: [
                { name: 'Dmitry', message: 'I am a normal popover and I can have text and everything' },
                { name: 'Me', message: 'I am a normal pBLablabl I can have text and everything' },
                { name: 'Dmitry', message: 'I am a normal popover and I can have text and everything' },
                { name: 'Me', message: 'I am a normal popover and I can have text and everything' }
            ],
            messageInput: ''
        },
        sidebar: {
            people: [
                'Andrew', 'Sasha', 'Sveta'
            ]
        }
    },
    _subscriber(store) {
        console.log(store);
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.chat = chatReducer(this._state.chat, action);

        this._subscriber(this);
    }
}

export default store;