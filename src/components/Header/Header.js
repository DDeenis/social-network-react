import React from 'react'
import styles from './Header.module.css'
import BallLogo from '../../assets/images/ball.png'

function Header() {
    return (
        <header>
            <img src={BallLogo} alt="ball" className={styles.headerLogo} />
        </header>
    );
}

export default Header;