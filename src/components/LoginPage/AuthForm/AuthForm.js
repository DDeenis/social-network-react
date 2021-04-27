import React, { useRef } from 'react';
import styles from './AuthForm.module.css';

function AuthForm({ authUser }) {
    const login = () => authUser(emailFrom.current.value, passwordFrom.current.value, checkbox.current.checked);

    const emailFrom = useRef(null);
    const passwordFrom = useRef(null);
    const checkbox = useRef(null);

    return (
        <div className={styles.authFormWrapper}>
            <div className={styles.authDataWrapper}>
                <label htmlFor='email' className={styles.authDataLabel}>Email</label>
                <input type='text' id='email' placeholder='Email' className={styles.authData} ref={emailFrom} />
            </div>

            <div className={styles.authDataWrapper}>
                <label htmlFor='password' className={styles.authDataLabel}>Password</label>
                <input type='password' id='password' placeholder='Password' className={styles.authData} ref={passwordFrom} />
            </div>

            <div className={styles.loginControls}>
                <div className={styles.rememberMe}>
                    <label htmlFor='remember-me' className={styles.rememberMeText}>Remember me</label>
                    <input type='checkbox' id='remember-me' className={styles.rememberMeCheckbox} ref={checkbox} />
                </div>

                <button className={`btn ${styles.loginBtn}`} onClick={() => login()}>Login</button>
            </div>
        </div>
    );
}

export default AuthForm;