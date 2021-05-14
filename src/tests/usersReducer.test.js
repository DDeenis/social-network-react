import { setCurrentPageCreator, setFetchingStatusCreator, setFollowingInProgressCreator, setTotalUsersCountCreator, setUsersCreator } from "../redux/actionCreators";
import usersReducer from "../redux/usersReducer";

/* eslint-disable no-undef */
const state = {
    people: [],
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

describe('add people', () => {
    const people = [{ id: 1, name: 'test' }, { id: 2, name: 'test2' }];
    const result = usersReducer(state, setUsersCreator(people));

    it('people should be added', () => {
        expect(result.people.length).toBe(2);
    });

    it('people info should be added', () => {
        expect(result.people).toStrictEqual(people);
    });
})

describe('update total users count', () => {
    const result = usersReducer(state, setTotalUsersCountCreator(10));

    it('total users count should be updated', () => {
        expect(result.totalUsersCount).toBe(10);
    });

    it('total users count shouldnt be 0', () => {
        expect(result.totalUsersCount).not.toBe(0);
    });
});

describe('update current page', () => {
    const result = usersReducer(state, setCurrentPageCreator(2));

    it('current page should be updated', () => {
        expect(result.currentPage).toBe(2);
    });
});

describe('update fetching status', () => {
    const result = usersReducer(state, setFetchingStatusCreator(true));

    it('fething status should be updated', () => {
        expect(result.isFetching).toBe(true);
    });

    it('fething status shouldnt be false', () => {
        expect(result.isFetching).not.toBe(false);
    });
});

describe('update following in progress list', () => {
    const resultAdd = usersReducer(state, setFollowingInProgressCreator(1, true));
    const resultDelete = usersReducer(resultAdd, setFollowingInProgressCreator(1, false));

    it('item should be added to following in progress list', () => {
        expect(resultAdd.followingInProgress.length).toBe(1);
    });

    it('item info should be added to following in progress list', () => {
        expect(resultAdd.followingInProgress).toStrictEqual([1]);
    });

    it('item should be deleted from following in progress list', () => {
        expect(resultDelete.followingInProgress.length).toBe(0);
    });

    it('item info should be deleted from following in progress list', () => {
        expect(resultDelete.followingInProgress).toStrictEqual([]);
    });
});
