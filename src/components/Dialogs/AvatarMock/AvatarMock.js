import * as React from 'react';
import styles from './AvatarMock.module.scss';

function AvatarMock({ size = 70, onClick = () => {} }) {
    return (
        <div className={styles.userAvatar} style={{ width: size + 'px', height: size + 'px' }} onClick={onClick}></div>
    );
}

export default AvatarMock;