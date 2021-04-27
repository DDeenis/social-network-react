import React from 'react';
import AuthForm from './AuthForm';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUserEmailCreator, setUserPasswordCreator, setRememberMeCreator, setUserIdCreator } from '../../../redux/actionCreators';

function AuthFormContainer() {
    const { data, userId } = useSelector(state => state.login);
    const dispatch = useDispatch();

    const authUser = (email, password, remember = false) => 
        axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login?email=${email}&password=${password}&rememberMe=${remember}`)
             .then(r => {
                 if(r.data.resultCode === 0) setUserId(r.data.data.userId)
             });

    const setUserEmail = (email) => dispatch(setUserEmailCreator(email));
    const setUserPassword = (password) => dispatch(setUserPasswordCreator(password));
    const setRememberMe = (rememberMe) => dispatch(setRememberMeCreator(rememberMe));
    const setUserId = (userId) => dispatch(setUserIdCreator(userId));

    return (
        <AuthForm
            authUser={authUser}
            setUserEmail={setUserEmail}
            setUserPassword={setUserPassword}
            setRememberMe={setRememberMe}
            data={data}
            userId={userId}
        />
    );
}

export default AuthFormContainer;