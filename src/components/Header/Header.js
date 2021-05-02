import React from 'react'
import styles from './Header.module.css'
import BallLogo from '../../assets/images/ball.png'

function Header({ isAuth, login }) {
    return (
        <header>
            <img src={BallLogo} alt="ball" className={styles.headerLogo} />
            <span className={styles.headerAuthText}>{ isAuth ? 'Logged as ' + login : 'Not logged in' }</span>
        </header>
    );
}

export default Header;