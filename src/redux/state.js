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
        switch (action.type) {
            case 'ADD_POST':
                this._state.profile.posts.push({
                    content: this._state.profile.postInput,
                    likes: 0,
                    views: 0
                });
                this._state.profile.postInput = '';
                this._subscriber(this);
                break;

            case 'UPDATE_POST_INPUT':
                this._state.profile.postInput = action.text;
                this._subscriber(this);
                break;

            case 'ADD_MESSAGE':
                this._state.chat.messages.push({
                    name: 'Me',
                    message: this._state.chat.messageInput
                });
                this._state.chat.messageInput = '';
                this._subscriber(this);
                break;

            case 'UPDATE_MESSAGE_INPUT':
                this._state.chat.messageInput = action.text;
                this._subscriber(this);
                break;

            default:
                break;
        }
    }
}


export default store;