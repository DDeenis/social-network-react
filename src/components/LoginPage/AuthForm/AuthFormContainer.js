import React from 'react';
import AuthForm from './AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { setUserEmailCreator, setUserPasswordCreator, setRememberMeCreator, setUserIdCreator } from '../../../redux/actionCreators';
import userApi from '../../../api/api';

function AuthFormContainer() {
    const { data, userId } = useSelector(state => state.login);
    const dispatch = useDispatch();
    
    const loginUser = (email, password, remember = false) => {
        userApi.authUser(email, password, remember).then(r => {
            if(r.resultCode === 0) setUserId(r.data.userId)
        });
    }

    const setUserEmail = (email) => dispatch(setUserEmailCreator(email));
    const setUserPassword = (password) => dispatch(setUserPasswordCreator(password));
    const setRememberMe = (rememberMe) => dispatch(setRememberMeCreator(rememberMe));
    const setUserId = (userId) => dispatch(setUserIdCreator(userId));

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