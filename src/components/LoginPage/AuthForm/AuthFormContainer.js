import React from 'react';
import AuthForm from './AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { setUserEmailCreator, setUserPasswordCreator, setRememberMeCreator } from '../../../redux/actionCreators';
import { authUserThunkCreator } from '../../../redux/thunkCreators';

function AuthFormContainer() {
    const { data, userId } = useSelector(state => state.login);
    const dispatch = useDispatch();
    
    const loginUser = (email, password, remember = false) => {
        dispatch(authUserThunkCreator(email, password, remember));
    }

    const setUserEmail = (email) => dispatch(setUserEmailCreator(email));
    const setUserPassword = (password) => dispatch(setUserPasswordCreator(password));
    const setRememberMe = (rememberMe) => dispatch(setRememberMeCreator(rememberMe));

    return (
        <AuthForm
            loginUser={loginUser}
            setUserEmail={setUserEmail}
            setUserPassword={setUserPassword}
            setRememberMe={setRememberMe}
            data={data}
            userId={userId}
        />
    );
}

export default AuthFormContainer;