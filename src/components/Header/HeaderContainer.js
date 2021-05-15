import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { isAuthSelector, loginSelector } from '../../redux/selectors';
import { logoutUserThunkCreator } from '../../redux/thunkCreators';
import Header from './Header';

function HeaderContainer() {
    const isAuth = useSelector(isAuthSelector);
    const login = useSelector(loginSelector);
    const history = useHistory();
    const dispatch = useDispatch();

    const logout = () => dispatch(logoutUserThunkCreator());
    const redirectToLogin = () => history.push('/login');

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