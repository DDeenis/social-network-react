import { setIsAuthCreator, setUserIdCreator, setUserLoginCreator } from "../redux/actionCreators";
import loginReducer from "../redux/loginReducer";

/* eslint-disable no-undef */
const state = {
    userId: 0,
    login: '',
    isAuth: false
};

describe('add userId', () => {
    const result = loginReducer(state, setUserIdCreator(1));

    it('userId should be added', () => {
        expect(result.userId).toBe(1);
    });

    it('userId shouldnt be 0', () => {
        expect(result.userId).not.toBe(0);
    });
});

describe('update login', () => {
    const result = loginReducer(state, setUserLoginCreator('test'));

    it('login should be added', () => {
        expect(result.login).toBe('test');
    });

    it('login shouldnt be empty', () => {
        expect(result.login).not.toBe('');
    });
});

describe('update auth status', () => {
    const result = loginReducer(state, setIsAuthCreator(true));

    it('isAuth should be changed', () => {
        expect(result.isAuth).toBe(true);
    });

    it('isAuth shouldnt be false', () => {
        expect(result.isAuth).not.toBe(false);
    });
});