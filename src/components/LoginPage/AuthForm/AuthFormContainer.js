import React from 'react';
import AuthForm from './AuthForm';
import axios from 'axios';

function AuthFormContainer() {
    const authUser = (email, password, remember = false) => axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login?email=${email}&password=${password}&rememberMe=${remember}`).then(r => console.log(r.data));
    
    return (
        <AuthForm
            authUser={authUser}
        />
    );
}

export default AuthFormContainer;