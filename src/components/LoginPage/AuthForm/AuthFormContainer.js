import * as React from 'react';
import AuthForm from './AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { authUserThunkCreator } from '../../../redux/thunkCreators';
import {reduxForm} from "redux-form";
import { maxLengthValidatorCreator, minLengthValidatorCreator, requiredField } from '../../../utils/validators';
import { useHistory } from 'react-router';
import { isAuthSelector, isLoadingSelector, userIdSelector } from '../../../redux/selectors';

function AuthFormContainer() {
    const userId = useSelector(userIdSelector);
    const isAuth = useSelector(isAuthSelector);
    const isLoading = useSelector(isLoadingSelector);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const loginUser = (email, password, remember = false) => dispatch(authUserThunkCreator(email, password, remember));

    const handleSubmitLogin = (formData) => loginUser(formData.email, formData.password, formData.rememberMe);

    const maxLength = 30;
    const minLength = 1;

    const emailValidators = [requiredField, maxLengthValidatorCreator(maxLength), minLengthValidatorCreator(minLength)];
    const passwordValidators = [requiredField, maxLengthValidatorCreator(maxLength), minLengthValidatorCreator(minLength)];

    const ReduxAuthForm = reduxForm({
        form: 'login'
    })(AuthForm);

    if(isAuth && !isLoading) history.push(`/profile/${userId}`);

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