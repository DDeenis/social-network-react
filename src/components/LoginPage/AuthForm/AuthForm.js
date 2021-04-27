import React from 'react';
import { Redirect } from 'react-router';
import styles from './AuthForm.module.css';

function AuthForm({ authUser, setUserEmail, setUserPassword, setRememberMe, data, userId }) {
    const login = () => authUser(data.email, data.password, data.rememberMe);
    console.log(userId)

    return (
        <div className={styles.authFormWrapper}>
            <div className={styles.authDataWrapper}>
                <label htmlFor='email' className={styles.authDataLabel}>Email</label>
                <input type='text' id='email' placeholder='Email' className={styles.authData} value={data.email} onChange={(e) => setUserEmail(e.target.value)} />
            </div>

            <div className={styles.authDataWrapper}>
                <label htmlFor='password' className={styles.authDataLabel}>Password</label>
                <input type='password' id='password' placeholder='Password' className={styles.authData} value={data.password} onChange={(e) => setUserPassword(e.target.value)} />
            </div>

            <div className={styles.loginControls}>
                <div className={styles.rememberMe}>
                    <label htmlFor='remember-me' className={styles.rememberMeText}>Remember me</label>
                    <input type='checkbox' id='remember-me' className={styles.rememberMeCheckbox} checked={data.rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                </div>

                <button className={`btn ${styles.loginBtn}`} onClick={() => login()}>Login</button>

                {
                    userId ?
                    <Redirect to={`/profile/${userId}`} /> : <></>
                }
            </div>
        </div>
    );
}

export default AuthForm;