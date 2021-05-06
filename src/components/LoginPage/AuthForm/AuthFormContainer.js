import React from 'react';
import AuthForm from './AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { authUserThunkCreator } from '../../../redux/thunkCreators';
import {reduxForm} from "redux-form";
import { maxLengthValidatorCreator, minLengthValidatorCreator, requiredField } from '../../../utils/validators';


function AuthFormContainer() {
    const { userId } = useSelector(state => state.login);
    const dispatch = useDispatch();
    
    const loginUser = (email, password, remember = false) => {
        dispatch(authUserThunkCreator(email, password, remember));
    }

    const handleSubmitLogin = (formData) => loginUser(formData.email, formData.password, formData.rememberMe);

    const maxLength = 30;
    const minLength = 1;

    const emailValidators = [requiredField, maxLengthValidatorCreator(maxLength), minLengthValidatorCreator(minLength)];
    const passwordValidators = [requiredField, maxLengthValidatorCreator(maxLength), minLengthValidatorCreator(minLength)];

    const ReduxAuthForm = reduxForm({
        form: 'login'
    })(AuthForm);

    return (
        <ReduxAuthForm
            loginUser={loginUser}
            userId={userId}
            onSubmit={handleSubmitLogin}
            emailValidators={emailValidators}
            passwordValidators={passwordValidators}
        />
    );
}

export default AuthFormContainer;