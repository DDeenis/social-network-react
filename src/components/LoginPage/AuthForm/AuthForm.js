import React from 'react';
import { Redirect } from 'react-router';
import styles from './AuthForm.module.css';
import { Field } from "redux-form";

function AuthForm(props) {
    return (
        <form className={styles.authFormWrapper} onSubmit={props.handleSubmit}>
            <div className={styles.authDataWrapper}>
                <label htmlFor='email' className={styles.authDataLabel}>Email</label>
                <Field component='input' type='text' id='email' placeholder='Email' className={styles.authData} name='email' />
            </div>

            <div className={styles.authDataWrapper}>
                <label htmlFor='password' className={styles.authDataLabel}>Password</label>
                <Field component='input' type='password' id='password' placeholder='Password' className={styles.authData} name='password' />
            </div>

            <div className={styles.loginControls}>
                <div className={styles.rememberMe}>
                    <label htmlFor='remember-me' className={styles.rememberMeText}>Remember me</label>
                    <Field component='input' type='checkbox' id='remember-me' className={styles.rememberMeCheckbox} name='rememberMe' />
                </div>

                <button className={`btn ${styles.loginBtn}`} type='submit'>Login</button>

                {
                    props.userId ?
                    <Redirect to={`/profile/${props.userId}`} /> : <></>
                }
            </div>
        </form>
    );
}

export default AuthForm;