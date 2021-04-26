import React from 'react';
import styles from './AvatarMock.module.css';

function AvatarMock({ size = 70 }) {
    return (
        <div className={styles.userAvatar} style={{ width: size + 'px', height: size + 'px' }}></div>
    );
}

export default AvatarMock;