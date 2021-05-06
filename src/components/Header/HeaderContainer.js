import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getMeThunkCreator, logoutUserThunkCreator } from '../../redux/thunkCreators';
import Header from './Header';

function HeaderContainer() {
    const { isAuth, login } = useSelector(state => state.login);
    const history = useHistory();
    const dispatch = useDispatch();

    const logout = () => dispatch(logoutUserThunkCreator());
    const redirectToLogin = () => history.push('/login');

    useEffect(() => {
        dispatch(getMeThunkCreator());
    }, [isAuth]);

    return (
        <Header
            isAuth={isAuth}
            userLogin={login}
            logout={logout}
            redirectToLogin={redirectToLogin}
        />
    );
}

export default HeaderContainer;