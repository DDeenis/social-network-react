import React from 'react';
import styles from './AuthForm.module.scss';
import { Field } from "redux-form";
import Input from '../../Common/Input/Input';

function AuthForm(props) {
    return (
        <form className={styles.authFormWrapper}>
            <div className={styles.authDataWrapper}>
                <label htmlFor='email' className={styles.authDataLabel}>Email</label>
                <Field component={Input} type='text' id='email' placeholder='Email' className={styles.authData} name='email' validate={props.emailValidators} />
            </div>

            <div className={styles.authDataWrapper}>
                <label htmlFor='password' className={styles.authDataLabel}>Password</label>
                <Field component={Input} type='password' id='password' placeholder='Password' className={styles.authData} name='password' validate={props.passwordValidators} />
            </div>

            <div className={styles.globalErrors}>
                <span>{props.error}</span>
            </div>

            <div className={styles.loginControls}>
                <div className={styles.rememberMe}>
                    <label htmlFor='remember-me' className={styles.rememberMeText}>Remember me</label>
                    <Field component='input' type='checkbox' id='remember-me' className={styles.rememberMeCheckbox} name='rememberMe' />
                </div>

                <button className={`btn ${styles.loginBtn}`} type='submit'>Login</button>
            </div>
        </form>
    );
}

export default AuthForm;