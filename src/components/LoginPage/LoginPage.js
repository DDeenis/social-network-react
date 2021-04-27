import React from 'react';
import AuthFormContainer from './AuthForm/AuthFormContainer';
import styles from './LoginPage.module.css';

function LoginPage() {
    return (
        <section className={styles.loginPage}>
            <div className={styles.loginOptions}>
                <button href='#' rel='noopener noreferrer' className={`${styles.loginOptionsActive} ${styles.loginOptionsBtn} btn`}>Login</button>
                <button href='#' rel='noopener noreferrer' className={`${styles.loginOptionsBtn} btn`}>Register</button>
            </div>

            <AuthFormContainer />
        </section>
    );
}

export default LoginPage;