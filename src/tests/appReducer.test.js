/* eslint-disable no-undef */
import appReducer, { setIsLoadingCreator } from "../redux/appReducer";

const state = {
    isLoading: false
};

describe('loading state changing', () => {
    it('loading state should be changes', () => {
        const result = appReducer(state, setIsLoadingCreator(true));
        expect(result.isLoading).toBe(true);
    });
})