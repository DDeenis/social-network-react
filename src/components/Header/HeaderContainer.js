import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMeThunkCreator } from '../../redux/thunkCreators';
import Header from './Header';

function HeaderContainer() {
    const { isAuth, login } = useSelector(state => state.login);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMeThunkCreator());
    }, [isAuth]);

    return (
        <Header
            isAuth={isAuth}
            login={login}
        />
    );
}

export default HeaderContainer;