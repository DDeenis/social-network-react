/* eslint-disable no-undef */
import profileReducer, { createPostCreator, setUserStatusCreator, setWatchedProfileCreator } from '../../redux/profileReducer';

const state = {
    posts: [
        { content: 'Hey, why nobody love me?', likes: 0, views: 1000 },
        { content: 'It\'s our new program! Hey!', likes: 100, views: 5 }
    ],
    userStatus: '',
    watchedProfile: null
};

describe('post creation', () => {
    const result = profileReducer(state, createPostCreator('hello'));

    it('new post should be added', () => {    
        expect(result.posts.length).toBe(3);
    });
    
    it('new post content should be added', () => {
        expect(result.posts[2]).toStrictEqual({ content: 'hello', likes: 0, views: 0 });
    });
});

describe('wathed profile', () => {
    const result = profileReducer(state, setWatchedProfileCreator({ name: '' }));

    it('watched profile should be added', () => {
        expect(result.watchedProfile).not.toBeNull();
    });

    it('watched profile info should be added', () => {
        expect(result.watchedProfile).toStrictEqual({ name: '' });
    });
});

describe('user status', () => {
    const result = profileReducer(state, setUserStatusCreator('test'));

    it('user status shouldnt be empty', () => {
        expect(result.userStatus).not.toBe('');    
    });

    it('user status should be added', () => {
        expect(result.userStatus).toBe('test');    
    });
});
