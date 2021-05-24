import classNames from 'classnames';
import * as React from 'react';
import AuthFormContainer from './AuthForm/AuthFormContainer';
import styles from './LoginPage.module.scss';

function LoginPage() {
    return (
        <section className={styles.loginPage}>
            <div className={styles.loginOptions}>
                <button href='#' rel='noopener noreferrer' className={classNames('btn', styles.loginOptionsBtn, styles.loginOptionsActive)}>Login</button>
                <button href='#' rel='noopener noreferrer' className={classNames('btn', styles.loginOptionsBtn)}>Register</button>
            </div>

            <AuthFormContainer />
        </section>
    );
}

export default LoginPage;