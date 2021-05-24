import * as React from 'react';
import styles from './Header.module.scss';
import BallLogo from '../../assets/images/ball.png';
import classNames from 'classnames';

function Header({ isAuth, userLogin, logout, redirectToLogin }) {
    return (
        <header>
            <img src={BallLogo} alt="ball" className={styles.headerLogo} />
            <span className={styles.headerAuthText}>{ isAuth ? 'Logged as ' + userLogin : 'Not logged in' }</span>
            {
                isAuth
                ? <button className={classNames('btn', styles.logoutBtn)} onClick={() => logout()}>Logout</button>
                : <button className={classNames('btn', styles.logoutBtn)} onClick={() => redirectToLogin()}>Login</button>
            }
        </header>
    );
}

export default Header;