// not right, but better than nothing

const state = {
    profile: {
        posts: [
            { content: 'Hey, why nobody love me?', likes: 0, views: 1000 },
            { content: 'It\'s our new program! Hey!', likes: 100, views: 5 },
            { content: 'Hidden post', likes: 0, views: 0 }
        ]
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
        ]
    },
    sidebar: {
        people: [
            'Andrew', 'Sasha', 'Sveta'
        ]
    }
};

export default state;